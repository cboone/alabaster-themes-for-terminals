# Plano: Converter Temas VS Code para Terminal.app

## Objetivo

Converter os temas Alabaster Dark e Alabaster Light de VS Code para o formato Terminal.app.

## Sobre Cores no Terminal.app

O Terminal.app suporta **256 cores** quando configurado com `xterm-256color` (Preferencias > Perfis > Avancado > «Declare terminal as»). Contudo, os ficheiros `.terminal` apenas definem **16 cores ANSI** base + cores de UI. A paleta de 256 cores e calculada matematicamente a partir destas 16 cores base.

**Cores definidas nos ficheiros .terminal:**

- 16 cores ANSI (0-15): black, red, green, yellow, blue, magenta, cyan, white (normal + bright)
- BackgroundColor, TextColor, TextBoldColor, CursorColor, SelectionColor

## Mapeamento de Cores

### Alabaster Dark

| Propriedade            | Cor     | Origem               |
| ---------------------- | ------- | -------------------- |
| BackgroundColor        | #202020 | editor.background    |
| TextColor              | #e7e7e7 | editor.foreground    |
| CursorColor            | #e7e7e7 | editor.foreground    |
| ANSIBlackColor         | #202020 | editor.background    |
| ANSIRedColor           | #ff7171 | comment              |
| ANSIGreenColor         | #C3E88D | string               |
| ANSIYellowColor        | #ffb45e | constant.numeric     |
| ANSIBlueColor          | #5f9dff | entity.name          |
| ANSIMagentaColor       | #C792EA | markup.changed       |
| ANSICyanColor          | #89DDFF | string.regexp        |
| ANSIWhiteColor         | #e7e7e7 | editor.foreground    |
| ANSIBrightBlackColor   | #474747 | statusBar.background |
| ANSIBrightRedColor     | #FF5370 | invalid              |
| ANSIBrightGreenColor   | #C3E88D | string               |
| ANSIBrightYellowColor  | #FFCB6B | HTML attributes      |
| ANSIBrightBlueColor    | #82AAFF | entity.name.method   |
| ANSIBrightMagentaColor | #C792EA | markup.changed       |
| ANSIBrightCyanColor    | #89DDFF | string.regexp        |
| ANSIBrightWhiteColor   | #ffffff | bright white         |

### Alabaster Light

| Propriedade            | Cor     | Origem                         |
| ---------------------- | ------- | ------------------------------ |
| BackgroundColor        | #f5f5f5 | editor.background              |
| TextColor              | #000000 | editor.foreground              |
| CursorColor            | #000000 | editor.foreground              |
| ANSIBlackColor         | #000000 | editor.foreground              |
| ANSIRedColor           | #AA3731 | comment                        |
| ANSIGreenColor         | #448C27 | string                         |
| ANSIYellowColor        | #9A6515 | derivado (amarelo-acastanhado) |
| ANSIBlueColor          | #325CC0 | entity.name                    |
| ANSIMagentaColor       | #811abc | constant.numeric               |
| ANSICyanColor          | #4078a0 | derivado                       |
| ANSIWhiteColor         | #f5f5f5 | editor.background              |
| ANSIBrightBlackColor   | #777777 | punctuation                    |
| ANSIBrightRedColor     | #c04038 | bright red                     |
| ANSIBrightGreenColor   | #5da03a | bright green                   |
| ANSIBrightYellowColor  | #b8860b | bright yellow                  |
| ANSIBrightBlueColor    | #4a78d0 | bright blue                    |
| ANSIBrightMagentaColor | #9932cc | bright magenta                 |
| ANSIBrightCyanColor    | #5090b0 | bright cyan                    |
| ANSIBrightWhiteColor   | #ffffff | bright white                   |

## Implementacao

### Passo 1: Instalar termcolors

```bash
yarn add termcolors
```

### Passo 2: Criar script de conversao

Criar `scripts/convert-to-terminal.js`:

```javascript
const termcolors = require('termcolors');
const fs = require('fs');
const path = require('path');

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

for (const [name, colors] of Object.entries(themes)) {
  const output = termcolors['terminal-app'].export(colors);
  const filename = name.replace(/ /g, '-') + '.terminal';
  fs.writeFileSync(path.join('themes', filename), output);
  console.log(`Gerado: themes/${filename}`);
}
```

### Passo 3: Executar conversao

```bash
node scripts/convert-to-terminal.js
```

## Ficheiros a Criar/Modificar

1. `package.json` - Adicionar dependencia termcolors
2. `scripts/convert-to-terminal.js` - Script de conversao
3. `themes/Alabaster-Dark.terminal` - Tema escuro (gerado)
4. `themes/Alabaster-Light.terminal` - Tema claro (gerado)

## Verificacao

1. No Terminal.app: Preferencias > Perfis
2. Clicar no icone de engrenagem > Importar
3. Selecionar os ficheiros .terminal gerados
4. Verificar que as cores correspondem ao esperado
