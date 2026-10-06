import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const assetsDir = path.resolve(distDir, 'assets');
const distIndexPath = path.resolve(distDir, 'index.html');
const singleOutputPath = path.resolve(distDir, 'standalone_index.html');

export function generateSingleFileHtml() {
  if (!fs.existsSync(distIndexPath)) {
    throw new Error('dist/index.html not found. Please run vite build first.');
  }

  let htmlContent = fs.readFileSync(distIndexPath, 'utf-8');

  // Find CSS file in dist/assets
  if (fs.existsSync(assetsDir)) {
    const files = fs.readdirSync(assetsDir);
    const cssFile = files.find((f) => f.endsWith('.css'));
    const jsFile = files.find((f) => f.endsWith('.js'));

    if (cssFile) {
      const cssContent = fs.readFileSync(path.resolve(assetsDir, cssFile), 'utf-8');
      // Replace <link rel="stylesheet" ...> with <style>...</style>
      htmlContent = htmlContent.replace(
        /<link\s+rel="stylesheet"[^>]*href="[^"]*"\s*\/?>/gi,
        `<style>\n${cssContent}\n</style>`
      );
    }

    if (jsFile) {
      const jsContent = fs.readFileSync(path.resolve(assetsDir, jsFile), 'utf-8');
      // Replace <script type="module" ... src="..."></script> with inline <script type="module">...</script>
      htmlContent = htmlContent.replace(
        /<script\s+type="module"[^>]*src="[^"]*"><\/script>/gi,
        `<script type="module">\n${jsContent}\n</script>`
      );
    }
  }

  fs.writeFileSync(singleOutputPath, htmlContent, 'utf-8');
  return htmlContent;
}

// If run directly via node
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  try {
    const html = generateSingleFileHtml();
    console.log(`Successfully generated standalone single-file HTML at ${singleOutputPath} (${(html.length / 1024).toFixed(1)} KB)`);
  } catch (err) {
    console.error('Error generating single-file HTML:', err);
    process.exit(1);
  }
}
