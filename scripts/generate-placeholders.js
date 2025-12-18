const fs = require('fs');
const path = require('path');

// Placeholder images to generate with their labels
const placeholders = [
  { name: 'placeholder-dashboard', label: 'Dashboard Overview' },
  { name: 'placeholder-event-catalog', label: 'Event Catalog' },
  { name: 'placeholder-waves', label: 'P & S Waves Diagram' },
  { name: 'placeholder-grillo-one', label: 'Grillo One' },
  { name: 'placeholder-grillo-pulse', label: 'Grillo Pulse' },
  { name: 'placeholder-network-settings', label: 'Network Settings' },
  { name: 'placeholder-event-details', label: 'Event Details' },
  { name: 'placeholder-pulse-orientation', label: 'Pulse Orientation' },
  { name: 'placeholder-create-network', label: 'Create Network' },
  { name: 'placeholder-unboxing-pulse', label: 'Pulse Unboxing' },
  { name: 'placeholder-pulse-diagram', label: 'Pulse Diagram' },
  { name: 'placeholder-api-key', label: 'API Key' },
  { name: 'placeholder-sim-install', label: 'SIM Installation' },
  { name: 'placeholder-invite-email', label: 'Invitation Email' },
  { name: 'placeholder-google-signup', label: 'Google Sign Up' },
  { name: 'placeholder-ms-signup', label: 'Microsoft Sign Up' },
  { name: 'placeholder-add-sensor', label: 'Add Sensor' },
  { name: 'placeholder-create-org', label: 'Create Organization' },
  { name: 'placeholder-member-list', label: 'Member List' },
  { name: 'placeholder-invite-member', label: 'Invite Member' },
  { name: 'placeholder-orientation', label: 'Sensor Orientation' },
  { name: 'placeholder-profile-settings', label: 'Profile Settings' },
  { name: 'placeholder-location-map', label: 'Location Map' },
  { name: 'placeholder-sensor-config', label: 'Sensor Config' },
  { name: 'placeholder-map-view', label: 'Map View' },
  { name: 'placeholder-sensor-detail', label: 'Sensor Details' },
  { name: 'placeholder-unboxing-one', label: 'One Unboxing' },
  { name: 'placeholder-one-diagram', label: 'One Diagram' },
  { name: 'placeholder-table-view', label: 'Table View' },
];

// Generate SVG placeholder
function generateSVG(label, width = 800, height = 400) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1a1a2e;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#16213e;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bg)"/>
  <rect x="20" y="20" width="${width-40}" height="${height-40}" fill="none" stroke="#00d4aa" stroke-width="2" stroke-dasharray="10,5" rx="8"/>
  <text x="${width/2}" y="${height/2 - 20}" font-family="system-ui, -apple-system, sans-serif" font-size="24" fill="#00d4aa" text-anchor="middle" font-weight="600">${label}</text>
  <text x="${width/2}" y="${height/2 + 20}" font-family="system-ui, -apple-system, sans-serif" font-size="16" fill="#666" text-anchor="middle">${width} × ${height}</text>
  <text x="${width/2}" y="${height/2 + 50}" font-family="system-ui, -apple-system, sans-serif" font-size="14" fill="#444" text-anchor="middle">Placeholder Image</text>
</svg>`;
}

// Create output directory
const outputDir = path.join(__dirname, '..', 'static', 'img');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate all placeholders
placeholders.forEach(({ name, label }) => {
  const svg = generateSVG(label);
  const outputPath = path.join(outputDir, `${name}.svg`);
  fs.writeFileSync(outputPath, svg);
  console.log(`Created: ${name}.svg`);
});

console.log(`\nGenerated ${placeholders.length} placeholder images in ${outputDir}`);
