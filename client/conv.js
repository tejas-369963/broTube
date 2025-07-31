import fs from 'fs'
import path from 'path'

const inputDir = './icons/raw'; // Folder with .svg files
const outputDir = './src/icons'; // Where React components will go

// Capitalize first letter and append "Icon"
const toPascalCase = (str) =>
  str.replace(/(^\w|-\w)/g, (s) => s.replace('-', '').toUpperCase()) + 'Icon';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach((file) => {
  if (path.extname(file) !== '.svg') return;

  const svg = fs.readFileSync(path.join(inputDir, file), 'utf8');

  // Basic cleaning
  const componentName = toPascalCase(path.basename(file, '.svg'));

  const cleanedSvg = svg
    .replace(/<\?xml.*?\?>/, '')
    .replace(/<!DOCTYPE.*?>/, '')
    .replace(/fill=".*?"/g, '') // remove hardcoded fills
    .replace(/stroke=".*?"/g, '') // remove hardcoded strokes
    .replace(/class=".*?"/g, '') // remove classes
    .replace(/<svg/, `<svg {...props} className={className} fill={fill} stroke={stroke}`)
    .replace(/(class|fill|stroke)=["'].*?["']/g, '') // fallback cleanup
    .replace(/ +>/g, '>');

  const component = `
// Auto-generated from ${file}
import React from "react";

const ${componentName} = ({ className = "", fill = "none", stroke = "currentColor", ...props }) => (
  ${cleanedSvg.trim()}
);

export default ${componentName};
`;

  fs.writeFileSync(path.join(outputDir, `${componentName}.jsx`), component, 'utf8');
  console.log(`✅ Created: ${componentName}.jsx`);
});
