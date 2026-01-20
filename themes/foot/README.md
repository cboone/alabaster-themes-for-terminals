# Alabaster Themes for foot

## Installation

### Option 1: Include in config

Copy the theme file to `~/.config/foot/` and add to your `foot.ini`:

```ini
[main]
include = ~/.config/foot/Alabaster-Dark.ini
```

### Option 2: System themes

Copy to `/usr/share/foot/themes/` for system-wide availability.

### Option 3: Direct copy

Copy the `[colors]` section directly into your `~/.config/foot/foot.ini`.

## Theme Switching

foot supports switching between two themes at runtime using signals:

- `SIGUSR1` - Switch to `[colors]` (theme 1)
- `SIGUSR2` - Switch to `[colors2]` (theme 2)

## Files

- `Alabaster-Dark.ini` - Dark theme
- `Alabaster-Light.ini` - Light theme

## Links

- [foot Wiki](https://codeberg.org/dnkl/foot/wiki)
- [foot.ini Manual](https://man.archlinux.org/man/foot.ini.5.en)
