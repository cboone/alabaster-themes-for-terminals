# Alabaster Themes for Windows Terminal

## Installation

1. Open Windows Terminal
2. Open Settings (Ctrl+,)
3. Click **Open JSON file** in the bottom left
4. Add the theme to the `schemes` array:

```json
{
  "schemes": [
    // ... existing schemes ...
    // Paste the contents of Alabaster-Dark.json or Alabaster-Light.json here
  ]
}
```

5. Apply the theme to a profile by setting `colorScheme`:

```json
{
  "profiles": {
    "defaults": {
      "colorScheme": "Alabaster Dark"
    }
  }
}
```

## Files

- `Alabaster-Dark.json` - Dark theme
- `Alabaster-Light.json` - Light theme

## Links

- [Windows Terminal Documentation](https://docs.microsoft.com/en-us/windows/terminal/)
- [Windows Terminal Color Schemes](https://docs.microsoft.com/en-us/windows/terminal/customize-settings/color-schemes)
- [Windows Terminal Themes](https://windowsterminalthemes.dev/)
