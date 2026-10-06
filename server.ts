import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);
const isProd = process.env.NODE_ENV === 'production';

// Ensure uploads directory exists
const UPLOADS_DIR = path.resolve(__dirname, 'public/uploads');
const MANIFEST_PATH = path.resolve(UPLOADS_DIR, 'manifest.json');

if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

if (!fs.existsSync(MANIFEST_PATH)) {
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify({}), 'utf-8');
}

// Helpers for manifest
const readManifest = (): Record<string, string> => {
  try {
    if (fs.existsSync(MANIFEST_PATH)) {
      const data = fs.readFileSync(MANIFEST_PATH, 'utf-8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Failed reading manifest:', err);
  }
  return {};
};

const writeManifest = (data: Record<string, string>) => {
  try {
    fs.writeFileSync(MANIFEST_PATH, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error('Failed writing manifest:', err);
  }
};

// Express JSON body parser for Base64 image payload (up to 50MB)
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Static uploads serving
app.use('/uploads', express.static(UPLOADS_DIR));
app.use(express.static(path.resolve(__dirname, 'public')));

// API Routes
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// GET single-file self-contained index.html download
app.get(['/api/download-single-html', '/download/index.html'], async (_req: Request, res: Response) => {
  try {
    const singleHtmlPath = path.resolve(__dirname, 'dist/standalone_index.html');
    if (!fs.existsSync(singleHtmlPath)) {
      const { generateSingleFileHtml } = await import('./scripts/build-single-file.js');
      generateSingleFileHtml();
    }
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Content-Disposition', 'attachment; filename="index.html"');
    res.sendFile(singleHtmlPath);
  } catch (err: any) {
    console.error('Error serving single-file HTML:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET all photos
app.get('/api/photos', (_req: Request, res: Response) => {
  const manifest = readManifest();
  res.json({ success: true, photos: manifest });
});

// POST upload photo
app.post('/api/upload', (req: Request, res: Response) => {
  try {
    const { slotId, dataUrl, fileName } = req.body;
    if (!slotId || !dataUrl) {
      res.status(400).json({ success: false, error: 'slotId and dataUrl are required' });
      return;
    }

    // Parse base64
    const matches = dataUrl.match(/^data:image\/([a-zA-Z0-9+]+);base64,(.+)$/);
    if (!matches || matches.length !== 3) {
      res.status(400).json({ success: false, error: 'Invalid data URL format' });
      return;
    }

    let ext = matches[1].toLowerCase();
    if (ext === 'jpeg') ext = 'jpg';
    if (ext === 'svg+xml') ext = 'svg';

    const base64Data = matches[2];
    const buffer = Buffer.from(base64Data, 'base64');

    const cleanSlotId = slotId.replace(/[^a-zA-Z0-9_-]/g, '_');
    const savedFileName = `${cleanSlotId}_${Date.now()}.${ext}`;
    const filePath = path.resolve(UPLOADS_DIR, savedFileName);

    fs.writeFileSync(filePath, buffer);

    const relativeUrl = `./uploads/${savedFileName}`;
    const manifest = readManifest();
    manifest[slotId] = relativeUrl;
    writeManifest(manifest);

    res.json({
      success: true,
      slotId,
      url: relativeUrl,
      fileName: savedFileName,
    });
  } catch (err: any) {
    console.error('Upload error:', err);
    res.status(500).json({ success: false, error: err.message || 'Upload failed' });
  }
});

// DELETE single photo
app.delete('/api/photos/:slotId', (req: Request, res: Response) => {
  try {
    const { slotId } = req.params;
    const manifest = readManifest();
    const existingUrl = manifest[slotId];

    if (existingUrl) {
      const fileName = path.basename(existingUrl);
      const filePath = path.resolve(UPLOADS_DIR, fileName);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
      delete manifest[slotId];
      writeManifest(manifest);
    }

    res.json({ success: true, slotId });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// DELETE all photos
app.delete('/api/photos', (_req: Request, res: Response) => {
  try {
    const manifest = readManifest();
    Object.values(manifest).forEach((photoUrl) => {
      const fileName = path.basename(photoUrl);
      const filePath = path.resolve(UPLOADS_DIR, fileName);
      if (fs.existsSync(filePath)) {
        try {
          fs.unlinkSync(filePath);
        } catch {}
      }
    });

    writeManifest({});
    res.json({ success: true, message: 'All photos cleared' });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Mount Vite or serve production build
async function startServer() {
  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${PORT} (${isProd ? 'production' : 'development'})`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
