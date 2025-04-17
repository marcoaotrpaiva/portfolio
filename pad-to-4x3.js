const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputFolder = './oldpics';    // pasta com imagens originais
const outputFolder = './output';   // pasta para guardar as ajustadas

if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

const targetWidth = 1200;
const targetHeight = 900; // 4:3

fs.readdirSync(inputFolder).forEach(async (file) => {
  const inputPath = path.join(inputFolder, file);
  const outputPath = path.join(outputFolder, file);

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // Só aplica scale se imagem for maior, caso contrário mantém
const scale = Math.min(
    targetWidth / metadata.width,
    targetHeight / metadata.height,
    1 // evita upscale
  );
  

    const resizedWidth = Math.round(metadata.width * scale);
    const resizedHeight = Math.round(metadata.height * scale);

    const buffer = await image
      .resize(resizedWidth, resizedHeight)
      .toBuffer();

    await sharp({
      create: {
        width: targetWidth,
        height: targetHeight,
        channels: 3,
        background: { r: 0, g: 0, b: 0 }, // fundo preto
      },
    })
      .composite([{ input: buffer, top: Math.floor((targetHeight - resizedHeight) / 2), left: Math.floor((targetWidth - resizedWidth) / 2) }])
      .toFile(outputPath);

    console.log(`✔ Processed: ${file}`);
  } catch (err) {
    console.error(`✖ Failed to process ${file}:`, err.message);
  }
});
