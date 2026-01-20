const colr = require('colr');
const fs = require('fs');
const path = require('path');
const termcolors = require('termcolors');

const themes = {
  'Alabaster Dark': {
    0: '#202020',  // black
    1: '#ff7171',  // red
    2: '#C3E88D',  // green
    3: '#ffb45e',  // yellow
    4: '#5f9dff',  // blue
    5: '#C792EA',  // magenta
    6: '#89DDFF',  // cyan
    7: '#e7e7e7',  // white
    8: '#474747',  // bright black
    9: '#FF5370',  // bright red
    10: '#C3E88D', // bright green
    11: '#FFCB6B', // bright yellow
    12: '#82AAFF', // bright blue
    13: '#C792EA', // bright magenta
    14: '#89DDFF', // bright cyan
    15: '#ffffff', // bright white
    background: '#202020',
    foreground: '#e7e7e7',
  },
  'Alabaster Light': {
    0: '#000000',  // black
    1: '#AA3731',  // red
    2: '#448C27',  // green
    3: '#9A6515',  // yellow
    4: '#325CC0',  // blue
    5: '#811abc',  // magenta
    6: '#4078a0',  // cyan
    7: '#f5f5f5',  // white
    8: '#777777',  // bright black
    9: '#c04038',  // bright red
    10: '#5da03a', // bright green
    11: '#b8860b', // bright yellow
    12: '#4a78d0', // bright blue
    13: '#9932cc', // bright magenta
    14: '#5090b0', // bright cyan
    15: '#ffffff', // bright white
    background: '#f5f5f5',
    foreground: '#000000',
  }
};

// Formats that produce standalone importable files
const formats = [
  { name: 'alacritty', extension: '.toml', directory: 'alacritty' },
  { name: 'iterm', extension: '.itermcolors', directory: 'iterm2' },
  { name: 'kitty', extension: '.conf', directory: 'kitty' },
  { name: 'konsole', extension: '.colorscheme', directory: 'konsole' },
  { name: 'mintty', extension: '.minttyrc', directory: 'mintty' },
  { name: 'putty', extension: '.reg', directory: 'putty' },
  { name: 'terminalapp', extension: '.terminal', directory: 'terminal-app' },
  { name: 'tilix', extension: '.json', directory: 'tilix' },
  { name: 'windowsTerminal', extension: '.json', directory: 'windows-terminal' },
];

function parseColors(hexColors) {
  const parsed = {};
  for (const [key, value] of Object.entries(hexColors)) {
    parsed[key] = colr.fromHex(value);
  }
  return parsed;
}

function ensureDirectory(directoryPath) {
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
  }
}

function postProcess(format, output, themeName) {
  switch (format) {
    case 'terminalapp':
      // Replace default name and add Terminal.app-specific settings
      output = output.replace('<string>terminal.sexy</string>', `<string>${themeName}</string>`);
      // Add TerminalType and UseBrightBold before closing </dict>
      output = output.replace(
        /(\t<key>type<\/key>\n\t<string>Window Settings<\/string>\n<\/dict>)/,
        '\t<key>TerminalType</key>\n\t<string>xterm-256color</string>\n\t<key>UseBrightBold</key>\n\t<false/>\n$1'
      );
      break;
    case 'putty':
      // Replace default session name with theme name
      output = output.replace(/Default%20Settings/g, themeName.replace(/ /g, '%20'));
      break;
    case 'windowsTerminal':
      // Add name field to the JSON
      const windowsJson = JSON.parse(output);
      windowsJson.name = themeName;
      // Reorder to put name first
      output = JSON.stringify({ name: windowsJson.name, ...windowsJson }, null, 2);
      break;
    case 'tilix':
      // Add name field to the JSON
      const tilixJson = JSON.parse(output);
      tilixJson.name = themeName;
      output = JSON.stringify({ name: tilixJson.name, ...tilixJson }, null, 2);
      break;
    case 'konsole':
      // Replace default description
      output = output.replace(/Description=.*/, `Description=${themeName}`);
      break;
  }
  return output;
}

// Generate themes
for (const [themeName, hexColors] of Object.entries(themes)) {
  const colors = parseColors(hexColors);
  const filename = themeName.replace(/ /g, '-');

  for (const format of formats) {
    const directoryPath = path.join('themes', format.directory);
    ensureDirectory(directoryPath);

    let output = termcolors[format.name].export(colors);
    output = postProcess(format.name, output, themeName);

    const filePath = path.join(directoryPath, filename + format.extension);
    fs.writeFileSync(filePath, output);
    console.log(`Generated: ${filePath}`);
  }
}

console.log('\nDone!');
