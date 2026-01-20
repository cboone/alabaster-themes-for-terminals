# Alabaster Themes for WezTerm

## Installation

### Option 1: Load from file

Place the theme file in a known location and load it in your `~/.wezterm.lua`:

```lua
local wezterm = require 'wezterm'

local scheme = wezterm.color.load_scheme(wezterm.home_dir .. '/.config/wezterm/colors/Alabaster-Dark.toml')

return {
  colors = scheme.colors,
}
```

### Option 2: Define in config

Copy the color values directly into your `~/.wezterm.lua`:

```lua
return {
  color_scheme = 'Alabaster Dark',
  color_schemes = {
    ['Alabaster Dark'] = {
      -- paste colors here
    },
  },
}
```

## Files

- `Alabaster-Dark.toml` - Dark theme
- `Alabaster-Light.toml` - Light theme

## Links

- [WezTerm Documentation](https://wezterm.org/docs.html)
- [WezTerm Color Schemes](https://wezterm.org/config/appearance.html)
- [WezTerm load_scheme](https://wezterm.org/config/lua/wezterm.color/load_scheme.html)
