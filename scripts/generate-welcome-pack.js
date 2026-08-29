const fs = require('fs');
const path = require('path');

const lines = [
  'Morecambe Girls FC',
  'Welcome Pack',
  '',
  'Welcome to Morecambe Girls FC!',
  '',
  'We are delighted you are interested in joining our club.',
  'Proudly part of the Morecambe FC family.',
  '',
  'CONTENTS',
  '- About the Club',
  '- Age Groups and Teams',
  '- Wild Cats Programme',
  '- What to Bring',
  '- Kit Information',
  '- Training and Fixtures',
  '- Fees and Payment',
  '- Contact Details',
  '',
  'ABOUT THE CLUB',
  'Morecambe Girls FC provides a pathway for girls aged 5-16,',
  'from Wild Cats fun sessions through to competitive league football.',
  '',
  'AGE GROUPS',
  'Wild Cats (5-11), U7, U8, U9, U10, U11, U12, U13, U14, U15, U16',
  '',
  'WHAT TO BRING',
  '- Football boots (moulded studs or trainers)',
  '- Shin pads',
  '- Water bottle',
  '- Suitable training clothing',
  '',
  'CONTACT',
  'Email: morecambegirlsfc@gmail.com',
  'Website: www.morecambegirlsfc.co.uk',
  '',
  'Replace this placeholder with your official welcome pack.',
];

function escapePdfText(text) {
  return text.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
}

let stream = 'BT /F1 11 Tf 72 750 Td ';
lines.forEach((line, index) => {
  stream += `(${escapePdfText(line)}) Tj `;
  if (index < lines.length - 1) {
    stream += '0 -14 Td ';
  }
});
stream += 'ET';

const len = Buffer.byteLength(stream);
const pdf = `%PDF-1.4
1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj
2 0 obj<</Type/Pages/Kids[3 0 R]/Count 1>>endobj
3 0 obj<</Type/Page/MediaBox[0 0 612 792]/Parent 2 0 R/Resources<</Font<</F1 4 0 R>>>>/Contents 5 0 R>>endobj
4 0 obj<</Type/Font/Subtype/Type1/BaseFont/Helvetica>>endobj
5 0 obj<</Length ${len}>>stream
${stream}
endstream
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000243 00000 n 
0000000312 00000 n 
trailer<</Size 6/Root 1 0 R>>
startxref
${400 + len}
%%EOF`;

const outputPath = path.join(__dirname, '..', 'public', 'welcome-pack.pdf');
fs.writeFileSync(outputPath, pdf);
console.log('Created', outputPath);
