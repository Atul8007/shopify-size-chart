const fs = require('fs-extra');
const path = require('path');

const sourceFile = path.join(__dirname, 'src/sections/size-chart.liquid');
const destinationDir = path.join(process.cwd(), 'sections');
const destinationFile = path.join(destinationDir, 'size-chart.liquid');

try {
  // Ensure the destination 'sections' directory exists
  fs.ensureDirSync(destinationDir);

  // Copy the size-chart.liquid file to the Shopify theme's sections directory
  fs.copySync(sourceFile, destinationFile, { overwrite: true });

  console.log('Successfully installed size-chart.liquid to the sections directory.');
} catch (err) {
  console.error('Error installing size chart section:', err);
}