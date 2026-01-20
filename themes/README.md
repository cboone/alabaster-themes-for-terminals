# Alabaster Variant Themes

Terminal color schemes for Alabaster Dark and Alabaster Light themes.

## Available Formats

| Terminal | Directory | Files |
|----------|-----------|-------|
| [Alacritty](https://alacritty.org/) | `alacritty/` | `.toml` |
| [iTerm2](https://iterm2.com/) | `iterm2/` | `.itermcolors` |
| [Kitty](https://sw.kovidgoyal.net/kitty/) | `kitty/` | `.conf` |
| [Konsole](https://konsole.kde.org/) | `konsole/` | `.colorscheme` |
| [mintty](https://mintty.github.io/) | `mintty/` | `.minttyrc` |
| [PuTTY](https://www.putty.org/) | `putty/` | `.reg` |
| [Terminal.app](https://support.apple.com/guide/terminal/welcome/mac) | `terminal-app/` | `.terminal` |
| [Tilix](https://gnunn1.github.io/tilix-web/) | `tilix/` | `.json` |
| [Windows Terminal](https://github.com/microsoft/terminal) | `windows-terminal/` | `.json` |

## Quick Start

See the README in each subdirectory for terminal-specific installation instructions.

## Color Palette

### Alabaster Dark

| Color | Hex | Usage |
|-------|-----|-------|
| Background | `#202020` | Terminal background |
| Foreground | `#e7e7e7` | Default text |
| Black | `#202020` | ANSI black |
| Red | `#ff7171` | ANSI red |
| Green | `#C3E88D` | ANSI green |
| Yellow | `#ffb45e` | ANSI yellow |
| Blue | `#5f9dff` | ANSI blue |
| Magenta | `#C792EA` | ANSI magenta |
| Cyan | `#89DDFF` | ANSI cyan |
| White | `#e7e7e7` | ANSI white |

### Alabaster Light

| Color | Hex | Usage |
|-------|-----|-------|
| Background | `#f5f5f5` | Terminal background |
| Foreground | `#000000` | Default text |
| Black | `#000000` | ANSI black |
| Red | `#AA3731` | ANSI red |
| Green | `#448C27` | ANSI green |
| Yellow | `#9A6515` | ANSI yellow |
| Blue | `#325CC0` | ANSI blue |
| Magenta | `#811abc` | ANSI magenta |
| Cyan | `#4078a0` | ANSI cyan |
| White | `#f5f5f5` | ANSI white |

## Regenerating Themes

To regenerate all theme files from the source colors:

```bash
yarn install
yarn node scripts/convert-to-terminal.js
```
