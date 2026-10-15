import { useEffect } from "react";

// Retain the existing progressive-enhancement scripts, in their original order.
// Native anchors intentionally load a new document so every page gets clean
// listeners, observers and animation timelines. Do not replace with next/link
// until these scripts have explicit per-route teardown and reinitialization.
let initialized: Promise<void> | undefined;
export default function Runtime({ scripts }: { scripts: string[] }) {
  useEffect(() => {
    initialized ??= (async () => {
      for (const src of scripts) {
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement("script");
          script.src = src;
          script.async = false;
          script.onload = () => resolve();
          script.onerror = () => reject(new Error(`Unable to load ${src}`));
          document.body.appendChild(script);
        });
      }
      document.documentElement.dataset.runtimeReady = "true";
    })();
    initialized.catch((error) =>
      console.error("VizeDraw interactions:", error),
    );
  }, [scripts]);
  return null;
}
