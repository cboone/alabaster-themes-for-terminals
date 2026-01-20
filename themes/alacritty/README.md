# Alabaster Themes for Alacritty

## Installation

### Alacritty 0.13+ (TOML config)

The theme files are in YAML format. Convert to TOML using:

```bash
alacritty migrate --config-file Alabaster-Dark.toml
```

Then add to your `~/.config/alacritty/alacritty.toml`:

```toml
import = ["~/.config/alacritty/themes/Alabaster-Dark.toml"]
```

### Alacritty 0.12 and earlier (YAML config)

Copy the contents of the theme file into your `~/.config/alacritty/alacritty.yml`.

## Files

- `Alabaster-Dark.toml` - Dark theme
- `Alabaster-Light.toml` - Light theme

## Links

- [Alacritty Configuration](https://alacritty.org/config-alacritty.html)
- [Alacritty Themes Collection](https://github.com/alacritty/alacritty-theme)
