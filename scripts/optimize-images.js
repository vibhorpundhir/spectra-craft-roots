import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const TARGET_DIRS = [
  path.resolve("src/assets/real"),
  path.resolve("src/assets"),
  path.resolve("public/gallery"),
];

async function optimizeFolder(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) continue;

    const ext = path.extname(file).toLowerCase();
    if (ext === ".jpg" || ext === ".jpeg") {
      const originalSize = stat.size;
      const buffer = fs.readFileSync(fullPath);

      try {
        // Optimize JPEG in place with max dimensions 1400px and progressive encoding
        const image = sharp(buffer);
        const metadata = await image.metadata();

        const shouldResize = metadata.width > 1600 || metadata.height > 1600;
        let pipeline = sharp(buffer);
        if (shouldResize) {
          pipeline = pipeline.resize({
            width: 1400,
            height: 1400,
            fit: "inside",
            withoutEnlargement: true,
          });
        }

        const optimizedBuffer = await pipeline
          .jpeg({
            quality: 78,
            progressive: true,
            mozjpeg: true,
          })
          .toBuffer();

        if (optimizedBuffer.length < originalSize) {
          fs.writeFileSync(fullPath, optimizedBuffer);
          const savedKb = Math.round((originalSize - optimizedBuffer.length) / 1024);
          console.log(`[OPTIMIZED] ${file}: ${Math.round(originalSize / 1024)}KB -> ${Math.round(optimizedBuffer.length / 1024)}KB (-${savedKb}KB)`);
        }
      } catch (err) {
        console.error(`Error processing ${file}:`, err.message);
      }
    }
  }
}

async function run() {
  console.log("Starting image optimization...");
  for (const dir of TARGET_DIRS) {
    console.log(`\nScanning ${dir}...`);
    await optimizeFolder(dir);
  }
  console.log("\nImage optimization completed!");
}

run();
