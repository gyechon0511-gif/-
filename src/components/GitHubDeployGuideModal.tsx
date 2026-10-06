import React, { useState } from 'react';
import { X, Copy, Check, Github, ExternalLink, Terminal, HardDrive, Globe, Download, AlertCircle, Sparkles } from 'lucide-react';

interface GitHubDeployGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubDeployGuideModal: React.FC<GitHubDeployGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const gitCliCommands = `# 1. 깃 저장소 초기화 및 원격 저장소 연결
git init
git add .
git commit -m "feat: 계촌중학교 연구학교 운영보고서 발표 웹페이지"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/gyechon-presentation.git
git push -u origin main

# 2. 정적 웹페이지 빌드 (GitHub Pages 배포용)
npm run build
# -> dist 폴더에 완벽한 단일 HTML(standalone_index.html) 및 번들 에셋이 자동 생성됩니다.`;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-150">
      <div className="w-full max-w-3xl max-h-[88vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-4 md:p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Github className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-serif-kr">
                단일 index.html 다운로드 & 깃허브 배포 가이드
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                추가 폴더 없이 파일 1개만으로 즉시 열리는 올인원(All-in-One) 인덱스 파일
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 md:p-6 overflow-y-auto space-y-5 text-xs text-slate-300">
          {/* Direct Download Callout (Primary Action) */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/90 via-slate-900 to-teal-950/90 border border-emerald-500/60 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-xs mb-1">
                <Sparkles className="w-4 h-4" />
                <span>더블클릭 즉시 실행되는 단일 파일 index.html</span>
              </div>
              <h4 className="text-sm font-bold text-white">
                CSS 스타일과 JS 스크립트가 100% 내장된 올인원 index.html
              </h4>
              <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                다운로드 후 컴퓨터에서 바로 더블클릭하거나, 깃허브 저장소에 이 파일 하나만 올려도 하얀 화면 없이 완벽하게 작동합니다.
              </p>
            </div>

            <a
              href="/api/download-single-html"
              download="index.html"
              className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all shadow-lg hover:shadow-emerald-500/30 cursor-pointer shrink-0 whitespace-nowrap"
            >
              <Download className="w-4 h-4" />
              <span>index.html 바로 다운로드</span>
            </a>
          </div>

          {/* Explanation of Why the White Screen Happened */}
          <div className="p-3.5 rounded-xl bg-amber-950/25 border border-amber-800/40 text-[11px] space-y-1.5 text-amber-200/90">
            <div className="flex items-center gap-1.5 text-amber-400 font-bold">
              <AlertCircle className="w-4 h-4" />
              <span>💡 이전 파일 다운로드 시 '하얀 화면'이 떴던 이유와 해결책</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              기존 빌드 파일은 <code>&lt;script src="./assets/index.js"&gt;</code> 처럼 외부 <code>assets</code> 폴더를 참조하도록 분리되어 있었습니다. 따라서 <strong>HTML 파일만 단독으로 다운로드하거나 로컬 PC에서 더블클릭할 경우, 파일 누락 및 브라우저 로컬 보안(CORS)으로 인해 스크립트가 차단되어 하얀 화면</strong>이 나타났습니다.
            </p>
            <p className="text-emerald-300 font-medium">
              지금 위의 <strong>[index.html 바로 다운로드]</strong> 버튼으로 받으시는 파일은 <strong>모든 자바스크립트와 테일윈드 스타일을 HTML 내부에 100% 인라인(Inline) 탑재</strong>하여, 인터넷이 연결되지 않은 PC나 추가 폴더가 없는 환경에서도 더블클릭 한 번으로 즉시 실행됩니다!
            </p>
          </div>

          {/* Architecture Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
              <div className="flex items-center gap-2 text-emerald-400 font-bold mb-1.5">
                <HardDrive className="w-4 h-4" />
                <span>백엔드 (Node.js Express: server.ts)</span>
              </div>
              <ul className="text-[11px] text-slate-400 space-y-1 leading-relaxed">
                <li>• <code>POST /api/upload</code>: 사진 업로드 시 <code>public/uploads/</code>에 실제 이미지 파일 저장</li>
                <li>• <code>GET /api/photos</code>: 등록된 사진 매니페스트 제공</li>
                <li>• <code>GET /api/download-single-html</code>: 단일 index.html 스트리밍 다운로드</li>
                <li>• <code>DELETE /api/photos/:slotId</code>: 사진 파일 및 매니페스트 삭제</li>
              </ul>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
              <div className="flex items-center gap-2 text-teal-400 font-bold mb-1.5">
                <Globe className="w-4 h-4" />
                <span>프론트엔드 (React SPA + 브라우저 스토리지)</span>
              </div>
              <ul className="text-[11px] text-slate-400 space-y-1 leading-relaxed">
                <li>• 백엔드 연결 시: 실시간 파일 서버와 동기화</li>
                <li>• GitHub Pages 정적 호스팅 시: <strong>localStorage 자동 폴백</strong>으로 서버 없이도 사진 업로드 및 발표 100% 작동</li>
                <li>• <code>vite.config.ts</code>에 <code>base: './'</code> 적용으로 어떤 깃허브 서브경로에서도 깨짐 없음</li>
              </ul>
            </div>
          </div>

          {/* GitHub CLI Commands */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-white flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>깃허브 저장소 업로드 명령어 (Git Push)</span>
              </span>
              <button
                onClick={() => copyToClipboard(gitCliCommands, 1)}
                className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] flex items-center gap-1 transition-colors cursor-pointer"
              >
                {copiedIndex === 1 ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedIndex === 1 ? '복사됨' : '명령어 복사'}</span>
              </button>
            </div>
            <pre className="p-3 rounded-lg bg-slate-900 border border-slate-800/80 font-mono text-[11px] text-slate-300 overflow-x-auto leading-relaxed whitespace-pre">
              {gitCliCommands}
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3.5 border-t border-slate-800 bg-slate-950 flex items-center justify-between text-xs text-slate-400">
          <span>어떤 환경에서도 동작하는 독립형(Standalone) 인덱스 파일입니다.</span>
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold cursor-pointer"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
