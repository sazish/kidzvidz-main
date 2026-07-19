const sharp = require('sharp');

const svgIcon = `
<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bgGradient" cx="50%" cy="30%" r="70%">
      <stop offset="0%" style="stop-color:#d0d0d0;stop-opacity:1" />
      <stop offset="35%" style="stop-color:#e8f4f8;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0099cc;stop-opacity:1" />
    </radialGradient>
  </defs>

  <!-- Background circle -->
  <circle cx="256" cy="256" r="256" fill="url(#bgGradient)"/>

  <!-- Large play button (triangle) -->
  <polygon points="320,180 320,332 420,256" fill="white"/>
</svg>
`;

sharp(Buffer.from(svgIcon))
  .resize(512, 512)
  .png()
  .toFile('/Users/nickazish/kidzvidz_main/assets/icon.png')
  .then(() => {
    console.log('✓ Icon created with large play button and gradient background');
  })
  .catch(err => {
    console.error('Error creating icon:', err);
    process.exit(1);
  });
