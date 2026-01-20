# Alabaster Variant Terminal Themes

Terminal color schemes for Alabaster Dark and Alabaster Light themes, available for 14 different terminal emulators.

## Background

These terminal themes are inspired by [Nikita Prokopov's (Tonsky) Alabaster](https://github.com/tonsky/sublime-scheme-alabaster) color scheme and the philosophy outlined in his blog post [A case against syntax highlighting](https://tonsky.me/blog/syntax-highlighting/).

The core insight: "If everything is highlighted, nothing is highlighted." Tonsky advocates for minimal, purposeful highlighting that reserves color for truly meaningful elements rather than saturating code with rainbow colors that become visual noise.

In IDE themes, Alabaster highlights only four syntax classes: strings, constants, comments, and global definitions. Terminal themes are more limited (16 ANSI colors), but the same principle applies: use color sparingly and intentionally.

## Design Philosophy

> I'm not generally a fan of "flattening" the UI scheme; where many UI elements have the same background color. Nor am I a fan of "tinted" themes, where the base colors are something other than shades of gray. The themes provided here have non-tinted themes, where the elements are separated rather than flattened.

## Supported Terminals

| Terminal | Directory | Format |
|----------|-----------|--------|
| [Alacritty](https://alacritty.org/) | [`themes/alacritty/`](themes/alacritty/) | `.toml` |
| [Contour](https://contour-terminal.org/) | [`themes/contour/`](themes/contour/) | `.yml` |
| [foot](https://codeberg.org/dnkl/foot) | [`themes/foot/`](themes/foot/) | `.ini` |
| [Ghostty](https://ghostty.org/) | [`themes/ghostty/`](themes/ghostty/) | (no extension) |
| [iTerm2](https://iterm2.com/) | [`themes/iterm2/`](themes/iterm2/) | `.itermcolors` |
| [Kitty](https://sw.kovidgoyal.net/kitty/) | [`themes/kitty/`](themes/kitty/) | `.conf` |
| [Konsole](https://konsole.kde.org/) | [`themes/konsole/`](themes/konsole/) | `.colorscheme` |
| [mintty](https://mintty.github.io/) | [`themes/mintty/`](themes/mintty/) | `.minttyrc` |
| [PuTTY](https://www.putty.org/) | [`themes/putty/`](themes/putty/) | `.reg` |
| [Terminal.app](https://support.apple.com/guide/terminal/welcome/mac) | [`themes/terminal-app/`](themes/terminal-app/) | `.terminal` |
| [Tilix](https://gnunn1.github.io/tilix-web/) | [`themes/tilix/`](themes/tilix/) | `.json` |
| [Warp](https://www.warp.dev/) | [`themes/warp/`](themes/warp/) | `.yaml` |
| [WezTerm](https://wezterm.org/) | [`themes/wezterm/`](themes/wezterm/) | `.toml` |
| [Windows Terminal](https://github.com/microsoft/terminal) | [`themes/windows-terminal/`](themes/windows-terminal/) | `.json` |

See the README in each subdirectory for terminal-specific installation instructions.

## Color Palette

### Alabaster Dark

| Color | Swatch | Hex | Usage |
|-------|--------|-----|-------|
| Background | ![#202020](https://placehold.co/20x20/202020/202020.png) | `#202020` | Terminal background |
| Foreground | ![#e7e7e7](https://placehold.co/20x20/e7e7e7/e7e7e7.png) | `#e7e7e7` | Default text |
| Black | ![#202020](https://placehold.co/20x20/202020/202020.png) | `#202020` | ANSI black |
| Red | ![#ff7171](https://placehold.co/20x20/ff7171/ff7171.png) | `#ff7171` | ANSI red |
| Green | ![#C3E88D](https://placehold.co/20x20/C3E88D/C3E88D.png) | `#C3E88D` | ANSI green |
| Yellow | ![#ffb45e](https://placehold.co/20x20/ffb45e/ffb45e.png) | `#ffb45e` | ANSI yellow |
| Blue | ![#5f9dff](https://placehold.co/20x20/5f9dff/5f9dff.png) | `#5f9dff` | ANSI blue |
| Magenta | ![#C792EA](https://placehold.co/20x20/C792EA/C792EA.png) | `#C792EA` | ANSI magenta |
| Cyan | ![#89DDFF](https://placehold.co/20x20/89DDFF/89DDFF.png) | `#89DDFF` | ANSI cyan |
| White | ![#e7e7e7](https://placehold.co/20x20/e7e7e7/e7e7e7.png) | `#e7e7e7` | ANSI white |
| Bright Black | ![#777777](https://placehold.co/20x20/777777/777777.png) | `#777777` | ANSI bright black |
| Bright Red | ![#ff8a8a](https://placehold.co/20x20/ff8a8a/ff8a8a.png) | `#ff8a8a` | ANSI bright red |
| Bright Green | ![#d5f0a2](https://placehold.co/20x20/d5f0a2/d5f0a2.png) | `#d5f0a2` | ANSI bright green |
| Bright Yellow | ![#ffc880](https://placehold.co/20x20/ffc880/ffc880.png) | `#ffc880` | ANSI bright yellow |
| Bright Blue | ![#85b5ff](https://placehold.co/20x20/85b5ff/85b5ff.png) | `#85b5ff` | ANSI bright blue |
| Bright Magenta | ![#d9b3f0](https://placehold.co/20x20/d9b3f0/d9b3f0.png) | `#d9b3f0` | ANSI bright magenta |
| Bright Cyan | ![#b0e8ff](https://placehold.co/20x20/b0e8ff/b0e8ff.png) | `#b0e8ff` | ANSI bright cyan |
| Bright White | ![#ffffff](https://placehold.co/20x20/ffffff/ffffff.png) | `#ffffff` | ANSI bright white |

### Alabaster Light

| Color | Swatch | Hex | Usage |
|-------|--------|-----|-------|
| Background | ![#f5f5f5](https://placehold.co/20x20/f5f5f5/f5f5f5.png) | `#f5f5f5` | Terminal background |
| Foreground | ![#000000](https://placehold.co/20x20/000000/000000.png) | `#000000` | Default text |
| Black | ![#000000](https://placehold.co/20x20/000000/000000.png) | `#000000` | ANSI black |
| Red | ![#AA3731](https://placehold.co/20x20/AA3731/AA3731.png) | `#AA3731` | ANSI red |
| Green | ![#448C27](https://placehold.co/20x20/448C27/448C27.png) | `#448C27` | ANSI green |
| Yellow | ![#9A6515](https://placehold.co/20x20/9A6515/9A6515.png) | `#9A6515` | ANSI yellow |
| Blue | ![#325CC0](https://placehold.co/20x20/325CC0/325CC0.png) | `#325CC0` | ANSI blue |
| Magenta | ![#811abc](https://placehold.co/20x20/811abc/811abc.png) | `#811abc` | ANSI magenta |
| Cyan | ![#4078a0](https://placehold.co/20x20/4078a0/4078a0.png) | `#4078a0` | ANSI cyan |
| White | ![#f5f5f5](https://placehold.co/20x20/f5f5f5/f5f5f5.png) | `#f5f5f5` | ANSI white |
| Bright Black | ![#777777](https://placehold.co/20x20/777777/777777.png) | `#777777` | ANSI bright black |
| Bright Red | ![#c04038](https://placehold.co/20x20/c04038/c04038.png) | `#c04038` | ANSI bright red |
| Bright Green | ![#5da03a](https://placehold.co/20x20/5da03a/5da03a.png) | `#5da03a` | ANSI bright green |
| Bright Yellow | ![#b8860b](https://placehold.co/20x20/b8860b/b8860b.png) | `#b8860b` | ANSI bright yellow |
| Bright Blue | ![#4a78d0](https://placehold.co/20x20/4a78d0/4a78d0.png) | `#4a78d0` | ANSI bright blue |
| Bright Magenta | ![#9932cc](https://placehold.co/20x20/9932cc/9932cc.png) | `#9932cc` | ANSI bright magenta |
| Bright Cyan | ![#5090b0](https://placehold.co/20x20/5090b0/5090b0.png) | `#5090b0` | ANSI bright cyan |
| Bright White | ![#ffffff](https://placehold.co/20x20/ffffff/ffffff.png) | `#ffffff` | ANSI bright white |

## Related Themes

The Alabaster family of themes spans many editors and tools. Here is a comprehensive list:

### Original

| Theme | Author | Description |
|-------|--------|-------------|
| [sublime-scheme-alabaster](https://github.com/tonsky/sublime-scheme-alabaster) | Tonsky | The original Alabaster theme for Sublime Text 3. |
| [alabaster-lighttable-skin](https://github.com/tonsky/alabaster-lighttable-skin) | Tonsky | The original LightTable skin where the concept began. |

### Code Editors

| Theme | Author | Description |
|-------|--------|-------------|
| [vscode-theme-alabaster](https://github.com/tonsky/vscode-theme-alabaster) | Tonsky | Official VS Code port with light theme. |
| [vscode-theme-alabaster-dark](https://github.com/gargakshit/vscode-theme-alabaster-dark) | gargakshit | Dark variant for VS Code based on the Sublime version. |
| [vscode-rubber-theme](https://github.com/apust/vscode-rubber-theme) | apust | Dark VS Code variant using colors from the Plastic theme. |
| [intellij-alabaster](https://github.com/tonsky/intellij-alabaster) | Tonsky | Official port for JetBrains IDEs. |
| [alabaster-themes](https://github.com/nabato/alabaster-themes) | nabato | Light and dark themes for JetBrains IDEs as a plugin. |
| [alabaster-android](https://github.com/chrisetheridge/alabaster-android) | chrisetheridge | Port for Android Studio. |
| [Travertine](https://github.com/freetonik/Travertine) | freetonik | Alternative minimal theme for Sublime Text 2 and TextMate. |
| [zed-theme-alabaster](https://github.com/tsimoshka/zed-theme-alabaster) | tsimoshka | Port for the Zed editor. |
| CudaText | (bundled) | [Bundled theme](https://sourceforge.net/projects/cudatext/files/addons/themes/theme.Alabaster.zip/download) for CudaText editor. |

### Vim and Neovim

| Theme | Author | Description |
|-------|--------|-------------|
| [vim-colors-alabaster](https://github.com/agudulin/vim-colors-alabaster) | agudulin | Vim port of the original theme. |
| [alabaster.vim](https://github.com/sderev/alabaster.vim) | sderev | Vim colorschemes with five variants: light, dark, background-highlighted, and monochrome. |
| [alabaster.nvim](https://github.com/p00f/alabaster.nvim) | p00f | Neovim port with Treesitter support. |

### Emacs

| Theme | Author | Description |
|-------|--------|-------------|
| [alabaster-emacs](https://github.com/uzhne/alabaster-emacs) | uzhne | Emacs port. |
| [alabaster-themes](https://github.com/vedang/alabaster-themes) | vedang | Emacs package with light and dark variants. |

### Terminal Emulators

| Theme | Author | Description |
|-------|--------|-------------|
| [iterm2-theme-alabaster](https://github.com/mkaschenko/iterm2-theme-alabaster) | mkaschenko | iTerm2 theme. |
| [kitty-alabaster](https://github.com/anmolmathias/kitty-alabaster) | anmolmathias | Kitty theme. |
| [warp-alabaster-theme](https://github.com/arsenydubrovin/warp-alabaster-theme) | arsenydubrovin | Warp terminal theme. |
| [alabaster.nvim gists](https://gist.github.com/p00f) | p00f | Config snippets for WezTerm, Kitty, Alacritty, zathura, wofi, and fzf. |

## References

- [A case against syntax highlighting](https://tonsky.me/blog/syntax-highlighting/) - Tonsky's blog post explaining the philosophy behind minimal highlighting.
- [sublime-scheme-alabaster](https://github.com/tonsky/sublime-scheme-alabaster) - The original Alabaster theme repository with design rationale.

## License

MIT
