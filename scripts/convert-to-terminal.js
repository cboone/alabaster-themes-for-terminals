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

// Formats supported by termcolors
// macOS-only terminals use spaces in filenames
const termcolorsFormats = [
  { name: 'alacritty', extension: '.toml', directory: 'alacritty' },
  { name: 'iterm', extension: '.itermcolors', directory: 'iterm2', useSpaces: true },
  { name: 'kitty', extension: '.conf', directory: 'kitty' },
  { name: 'konsole', extension: '.colorscheme', directory: 'konsole' },
  { name: 'mintty', extension: '.minttyrc', directory: 'mintty' },
  { name: 'putty', extension: '.reg', directory: 'putty' },
  { name: 'terminalapp', extension: '.terminal', directory: 'terminal-app', useSpaces: true },
  { name: 'tilix', extension: '.json', directory: 'tilix' },
  { name: 'windowsTerminal', extension: '.json', directory: 'windows-terminal' },
];

// Custom formats not supported by termcolors
const customFormats = [
  { name: 'contour', extension: '.yml', directory: 'contour' },
  { name: 'foot', extension: '.ini', directory: 'foot' },
  { name: 'ghostty', extension: '', directory: 'ghostty' },
  { name: 'warp', extension: '.yaml', directory: 'warp' },
  { name: 'wezterm', extension: '.toml', directory: 'wezterm' },
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
      output = output.replace('<string>terminal.sexy</string>', `<string>${themeName}</string>`);
      output = output.replace(
        /(\t<key>type<\/key>\n\t<string>Window Settings<\/string>\n<\/dict>)/,
        '\t<key>TerminalType</key>\n\t<string>xterm-256color</string>\n\t<key>UseBrightBold</key>\n\t<false/>\n$1'
      );
      break;
    case 'putty':
      output = output.replace(/Default%20Settings/g, themeName.replace(/ /g, '%20'));
      break;
    case 'windowsTerminal':
      const windowsJson = JSON.parse(output);
      windowsJson.name = themeName;
      output = JSON.stringify({ name: windowsJson.name, ...windowsJson }, null, 2);
      break;
    case 'tilix':
      const tilixJson = JSON.parse(output);
      tilixJson.name = themeName;
      output = JSON.stringify({ name: tilixJson.name, ...tilixJson }, null, 2);
      break;
    case 'konsole':
      output = output.replace(/Description=.*/, `Description=${themeName}`);
      break;
  }
  return output;
}

// Custom format generators

function generateGhostty(themeName, colors) {
  const lines = [
    `# ${themeName} theme for Ghostty`,
    ``,
    `background = ${colors.background}`,
    `foreground = ${colors.foreground}`,
    `cursor-color = ${colors.foreground}`,
    `cursor-text = ${colors.background}`,
    `selection-background = ${colors[4]}`,
    `selection-foreground = ${colors.foreground}`,
    ``,
  ];

  for (let index = 0; index < 16; index++) {
    lines.push(`palette = ${index}=${colors[index]}`);
  }

  return lines.join('\n') + '\n';
}

function generateFoot(themeName, colors) {
  // foot uses RRGGBB without # prefix
  const strip = (hex) => hex.replace('#', '');

  return `# ${themeName} theme for foot

[colors]
foreground = ${strip(colors.foreground)}
background = ${strip(colors.background)}

# Normal colors
regular0 = ${strip(colors[0])}
regular1 = ${strip(colors[1])}
regular2 = ${strip(colors[2])}
regular3 = ${strip(colors[3])}
regular4 = ${strip(colors[4])}
regular5 = ${strip(colors[5])}
regular6 = ${strip(colors[6])}
regular7 = ${strip(colors[7])}

# Bright colors
bright0 = ${strip(colors[8])}
bright1 = ${strip(colors[9])}
bright2 = ${strip(colors[10])}
bright3 = ${strip(colors[11])}
bright4 = ${strip(colors[12])}
bright5 = ${strip(colors[13])}
bright6 = ${strip(colors[14])}
bright7 = ${strip(colors[15])}
`;
}

function generateWezterm(themeName, colors) {
  const ansi = [
    colors[0], colors[1], colors[2], colors[3],
    colors[4], colors[5], colors[6], colors[7],
  ];
  const brights = [
    colors[8], colors[9], colors[10], colors[11],
    colors[12], colors[13], colors[14], colors[15],
  ];

  return `# ${themeName} theme for WezTerm

[colors]
ansi = [${ansi.map(c => `'${c}'`).join(', ')}]
brights = [${brights.map(c => `'${c}'`).join(', ')}]
background = '${colors.background}'
foreground = '${colors.foreground}'
cursor_bg = '${colors.foreground}'
cursor_border = '${colors.foreground}'
cursor_fg = '${colors.background}'
selection_bg = '${colors[4]}'
selection_fg = '${colors.foreground}'

[colors.indexed]

[metadata]
name = '${themeName}'
`;
}

function generateWarp(themeName, colors) {
  return `# ${themeName} theme for Warp
name: '${themeName}'
accent: '${colors[4]}'
background: '${colors.background}'
foreground: '${colors.foreground}'
details: darker
terminal_colors:
  normal:
    black: '${colors[0]}'
    red: '${colors[1]}'
    green: '${colors[2]}'
    yellow: '${colors[3]}'
    blue: '${colors[4]}'
    magenta: '${colors[5]}'
    cyan: '${colors[6]}'
    white: '${colors[7]}'
  bright:
    black: '${colors[8]}'
    red: '${colors[9]}'
    green: '${colors[10]}'
    yellow: '${colors[11]}'
    blue: '${colors[12]}'
    magenta: '${colors[13]}'
    cyan: '${colors[14]}'
    white: '${colors[15]}'
`;
}

function generateContour(themeName, colors) {
  return `# ${themeName} theme for Contour
# Add this to your contour.yml under color_schemes:

${themeName.toLowerCase().replace(/ /g, '_')}:
  default:
    background: '${colors.background}'
    foreground: '${colors.foreground}'
  cursor:
    default: '${colors.foreground}'
    text: '${colors.background}'
  selection:
    background: '${colors[4]}'
    foreground: '${colors.foreground}'
  normal:
    black: '${colors[0]}'
    red: '${colors[1]}'
    green: '${colors[2]}'
    yellow: '${colors[3]}'
    blue: '${colors[4]}'
    magenta: '${colors[5]}'
    cyan: '${colors[6]}'
    white: '${colors[7]}'
  bright:
    black: '${colors[8]}'
    red: '${colors[9]}'
    green: '${colors[10]}'
    yellow: '${colors[11]}'
    blue: '${colors[12]}'
    magenta: '${colors[13]}'
    cyan: '${colors[14]}'
    white: '${colors[15]}'
`;
}

function generateCustomFormat(formatName, themeName, hexColors) {
  switch (formatName) {
    case 'contour':
      return generateContour(themeName, hexColors);
    case 'foot':
      return generateFoot(themeName, hexColors);
    case 'ghostty':
      return generateGhostty(themeName, hexColors);
    case 'warp':
      return generateWarp(themeName, hexColors);
    case 'wezterm':
      return generateWezterm(themeName, hexColors);
    default:
      throw new Error(`Unknown custom format: ${formatName}`);
  }
}

// Generate themes
for (const [themeName, hexColors] of Object.entries(themes)) {
  const colors = parseColors(hexColors);
  const hyphenatedFilename = themeName.replace(/ /g, '-');

  // Generate termcolors formats
  for (const format of termcolorsFormats) {
    const directoryPath = path.join('themes', format.directory);
    ensureDirectory(directoryPath);

    const filename = format.useSpaces ? themeName : hyphenatedFilename;

    let output = termcolors[format.name].export(colors);
    output = postProcess(format.name, output, themeName);

    const filePath = path.join(directoryPath, filename + format.extension);
    fs.writeFileSync(filePath, output);
    console.log(`Generated: ${filePath}`);
  }

  // Generate custom formats
  for (const format of customFormats) {
    const directoryPath = path.join('themes', format.directory);
    ensureDirectory(directoryPath);

    const filename = format.useSpaces ? themeName : hyphenatedFilename;
    const output = generateCustomFormat(format.name, themeName, hexColors);

    const filePath = path.join(directoryPath, filename + format.extension);
    fs.writeFileSync(filePath, output);
    console.log(`Generated: ${filePath}`);
  }
}

console.log('\nDone!');
