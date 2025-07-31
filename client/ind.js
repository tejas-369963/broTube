import fs from 'fs'
import path from 'path'

const outputDir = './src/icons'; // your icons directory

const files = fs.readdirSync(outputDir);

const exportStatements = files
  .filter((file) => path.extname(file) === '.jsx')
  .map((file) => {
    const name = path.basename(file, '.jsx');
    return `export { default as ${name} } from './${name}';`;
  })
  .join('\n');

fs.writeFileSync(path.join(outputDir, 'index.js'), exportStatements, 'utf8');
console.log('✅ icons/index.js generated!');
