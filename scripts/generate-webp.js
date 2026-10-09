import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const TARGET_DIRS = [
  path.resolve("public/gallery"),
];

async function generateWebpFolder(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) continue;

    const ext = path.extname(file).toLowerCase();
    if (ext === ".jpg" || ext === ".jpeg") {
      const baseName = path.basename(file, ext);
      const webpPath = path.join(dir, `${baseName}.webp`);

      try {
        const buffer = fs.readFileSync(fullPath);
        const webpBuffer = await sharp(buffer)
          .webp({ quality: 78, effort: 4 })
          .toBuffer();

        fs.writeFileSync(webpPath, webpBuffer);
        console.log(`[WEBP] ${baseName}.webp: ${Math.round(webpBuffer.length / 1024)}KB (Original: ${Math.round(stat.size / 1024)}KB)`);
      } catch (err) {
        console.error(`Error generating webp for ${file}:`, err.message);
      }
    }
  }
}

async function run() {
  for (const dir of TARGET_DIRS) {
    await generateWebpFolder(dir);
  }
  console.log("WebP generation completed!");
}

run();
