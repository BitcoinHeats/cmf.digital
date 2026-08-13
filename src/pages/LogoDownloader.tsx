import { useState, useCallback } from 'react';
import { useSeoMeta } from '@unhead/react';
import { Download, Loader2, Check } from 'lucide-react';

interface LogoVariant {
  name: string;
  desc: string;
  svg: string;
  sizes: { width: number; height: number }[];
  bg: string | null;
}

const LOGOS: LogoVariant[] = [
  {
    name: 'Square Icon',
    desc: 'Profile pictures, avatars, app icons',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#f7931a"/><stop offset="100%" stop-color="#ea6c00"/></linearGradient></defs><rect width="512" height="512" rx="128" fill="url(#g)"/><text x="256" y="256" text-anchor="middle" dominant-baseline="central" font-family="system-ui, -apple-system, sans-serif" font-size="320" font-weight="800" fill="#ffffff">&#8355;</text></svg>`,
    sizes: [
      { width: 512, height: 512 },
      { width: 256, height: 256 },
      { width: 128, height: 128 },
    ],
    bg: null,
  },
  {
    name: 'Lockup — Light',
    desc: 'Headers, banners, email signatures',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400" width="1200" height="400"><defs><linearGradient id="mark" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#f7931a"/><stop offset="100%" stop-color="#ea6c00"/></linearGradient></defs><g transform="translate(40 40)"><rect width="320" height="320" rx="80" fill="url(#mark)"/><text x="160" y="160" text-anchor="middle" dominant-baseline="central" font-family="system-ui, -apple-system, sans-serif" font-size="200" font-weight="800" fill="#ffffff">&#8355;</text></g><text x="420" y="230" font-family="system-ui, -apple-system, sans-serif" font-size="140" font-weight="800" fill="#0f172a">CMF<tspan fill="#f7931a">.digital</tspan></text><text x="424" y="300" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="500" fill="#64748b" letter-spacing="1">The future of property management.</text></svg>`,
    sizes: [
      { width: 1200, height: 400 },
      { width: 600, height: 200 },
    ],
    bg: '#ffffff',
  },
  {
    name: 'Lockup — Dark',
    desc: 'Dark backgrounds, presentations',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400" width="1200" height="400"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#0b1120"/></linearGradient><linearGradient id="mark" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#f7931a"/><stop offset="100%" stop-color="#ea6c00"/></linearGradient><radialGradient id="glow" cx="30%" cy="50%" r="50%"><stop offset="0%" stop-color="#f7931a" stop-opacity="0.15"/><stop offset="100%" stop-color="#f7931a" stop-opacity="0"/></radialGradient></defs><rect width="1200" height="400" rx="24" fill="url(#bg)"/><rect width="1200" height="400" rx="24" fill="url(#glow)"/><g transform="translate(60 40)"><rect width="320" height="320" rx="80" fill="url(#mark)"/><text x="160" y="160" text-anchor="middle" dominant-baseline="central" font-family="system-ui, -apple-system, sans-serif" font-size="200" font-weight="800" fill="#ffffff">&#8355;</text></g><text x="440" y="210" font-family="system-ui, -apple-system, sans-serif" font-size="130" font-weight="800" fill="#f1f5f9">CMF<tspan fill="#f7931a">.digital</tspan></text><text x="444" y="270" font-family="system-ui, -apple-system, sans-serif" font-size="30" font-weight="500" fill="#94a3b8" letter-spacing="1">The future of property management.</text></svg>`,
    sizes: [
      { width: 1200, height: 400 },
      { width: 600, height: 200 },
    ],
    bg: '#0f172a',
  },
];

function svgToPng(
  svgString: string,
  width: number,
  height: number,
  bg: string | null,
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        URL.revokeObjectURL(url);
        reject(new Error('Canvas not supported'));
        return;
      }
      if (bg) {
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, width, height);
      }
      ctx.drawImage(img, 0, 0, width, height);
      URL.revokeObjectURL(url);
      canvas.toBlob((pngBlob) => {
        if (pngBlob) resolve(pngBlob);
        else reject(new Error('PNG conversion failed'));
      }, 'image/png');
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('SVG load failed'));
    };

    img.src = url;
  });
}

function triggerDownload(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export default function LogoDownloader() {
  useSeoMeta({
    title: 'CMF.digital — Logo Downloads',
    description: 'Download CMF.digital logo files in PNG format.',
    robots: 'noindex, nofollow',
  });

  const [downloading, setDownloading] = useState<string | null>(null);
  const [done, setDone] = useState<string | null>(null);

  const handleDownload = useCallback(
    async (logo: LogoVariant, size: { width: number; height: number }) => {
      const key = `${logo.name}-${size.width}`;
      setDownloading(key);
      setDone(null);
      try {
        const png = await svgToPng(
          logo.svg,
          size.width,
          size.height,
          logo.bg,
        );
        const filename = `cmf-digital-${slugify(logo.name)}-${size.width}.png`;
        triggerDownload(png, filename);
        setDone(key);
      } catch {
        // ignore
      } finally {
        setDownloading(null);
      }
    },
    [],
  );

  const handleDownloadAll = useCallback(async (logo: LogoVariant) => {
    setDownloading(`${logo.name}-all`);
    setDone(null);
    try {
      for (const size of logo.sizes) {
        const png = await svgToPng(
          logo.svg,
          size.width,
          size.height,
          logo.bg,
        );
        const filename = `cmf-digital-${slugify(logo.name)}-${size.width}.png`;
        triggerDownload(png, filename);
        await new Promise((r) => setTimeout(r, 400));
      }
      setDone(`${logo.name}-all`);
    } catch {
      // ignore
    } finally {
      setDownloading(null);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background px-4 py-12 text-foreground antialiased sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            CMF.digital Logo Downloads
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Click a button to download each logo as a PNG file.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="flex flex-col items-center gap-5 rounded-2xl border border-border/70 bg-card p-6"
            >
              <h2 className="text-lg font-semibold">{logo.name}</h2>
              <p className="text-sm text-muted-foreground">{logo.desc}</p>

              {/* Preview */}
              <div className="flex min-h-[140px] w-full items-center justify-center rounded-xl bg-white p-4">
                <img
                  src={`data:image/svg+xml;base64,${btoa(logo.svg)}`}
                  alt={`${logo.name} preview`}
                  className="max-h-44 max-w-full"
                />
              </div>

              {/* Size buttons */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                {logo.sizes.map((size) => {
                  const key = `${logo.name}-${size.width}`;
                  const isDownloading = downloading === key;
                  const isDone = done === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => handleDownload(logo, size)}
                      disabled={isDownloading}
                      className="inline-flex h-9 items-center gap-2 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 px-4 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-0.5 disabled:opacity-50"
                    >
                      {isDownloading ? (
                        <Loader2 className="size-4 animate-spin" />
                      ) : isDone ? (
                        <Check className="size-4" />
                      ) : (
                        <Download className="size-4" />
                      )}
                      PNG {size.width}
                    </button>
                  );
                })}
              </div>

              {/* Download all */}
              <button
                type="button"
                onClick={() => handleDownloadAll(logo)}
                disabled={downloading === `${logo.name}-all`}
                className="inline-flex h-9 w-full items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 text-sm font-semibold text-foreground transition-all hover:border-orange-500/50 disabled:opacity-50"
              >
                {downloading === `${logo.name}-all` ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : done === `${logo.name}-all` ? (
                  <Check className="size-4" />
                ) : (
                  <Download className="size-4" />
                )}
                Download All Sizes
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Back to CMF.digital
          </a>
        </div>
      </div>
    </div>
  );
}
