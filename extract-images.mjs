import { createCanvas, Image } from "canvas";
import { readFileSync, existsSync, writeFileSync } from "fs";
import pkg from "pdfjs-dist/legacy/build/pdf.js";

const { getDocument, GlobalWorkerOptions } = pkg;

// v3 Node.js — disable worker entirely
GlobalWorkerOptions.workerSrc = "";

class NodeCanvasFactory {
  create(width, height) {
    const canvas = createCanvas(width, height);
    return { canvas, context: canvas.getContext("2d") };
  }
  reset(canvasAndCtx, width, height) {
    canvasAndCtx.canvas.width = width;
    canvasAndCtx.canvas.height = height;
  }
  destroy(canvasAndCtx) {
    canvasAndCtx.canvas.width = 0;
    canvasAndCtx.canvas.height = 0;
  }
}

class NodeImageDecodeFactory {
  createDecoder({ isCompressed, isMask, type, data, width, height }) {
    const canvas = createCanvas(width, height);
    const ctx    = canvas.getContext("2d");
    const imgData = ctx.createImageData(width, height);
    imgData.data.set(data);
    ctx.putImageData(imgData, 0, 0);
    return canvas;
  }
}

async function renderPage(pdfPath, pageNum, outPath, scale = 2.5) {
  if (!existsSync(pdfPath)) {
    console.error(`  ✗ PDF not found: ${pdfPath}`);
    return false;
  }

  const data = new Uint8Array(readFileSync(pdfPath));
  const canvasFactory      = new NodeCanvasFactory();

  const pdf = await getDocument({
    data,
    canvasFactory,
    useWorkerFetch: false,
    isEvalSupported: false,
    useSystemFonts: true,
  }).promise;

  console.log(`  PDF loaded — ${pdf.numPages} pages`);

  const page     = await pdf.getPage(pageNum);
  const viewport = page.getViewport({ scale });

  const { canvas, context } = canvasFactory.create(
    Math.round(viewport.width),
    Math.round(viewport.height)
  );

  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, canvas.width, canvas.height);

  await page.render({ canvasContext: context, viewport, canvasFactory }).promise;

  writeFileSync(outPath, canvas.toBuffer("image/png"));
  console.log(`  ✓ Saved: ${outPath}  (${canvas.width}×${canvas.height}px)`);
  return true;
}

const OUT = "public/images/claude-code";
const PDF = "Claude_Code_Bootcamp-2.pdf";

console.log("\nExtracting PDF pages as images...\n");

await renderPage(PDF, 1, `${OUT}/installation-output.png`);
await renderPage(PDF, 2, `${OUT}/getting-started-screen.png`);
await renderPage(PDF, 3, `${OUT}/demo-codebase-overview.png`);

console.log("\nDone!\n");
