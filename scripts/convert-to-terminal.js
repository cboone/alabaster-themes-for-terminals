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

function parseColors(hexColors) {
  const parsed = {};
  for (const [key, value] of Object.entries(hexColors)) {
    parsed[key] = colr.fromHex(value);
  }
  return parsed;
}

for (const [name, hexColors] of Object.entries(themes)) {
  const colors = parseColors(hexColors);
  let output = termcolors.terminalapp.export(colors);
  // Replace default name with actual theme name
  output = output.replace('<string>terminal.sexy</string>', `<string>${name}</string>`);
  const filename = name.replace(/ /g, '-') + '.terminal';
  fs.writeFileSync(path.join('themes', filename), output);
  console.log(`Generated: themes/${filename}`);
}
