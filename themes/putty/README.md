# Alabaster Themes for PuTTY

## Installation

### Method 1: Registry import

1. Double-click the `.reg` file
2. Confirm the registry import
3. The theme will be applied to the session named in the file

### Method 2: Manual import

1. Open Registry Editor (`regedit`)
2. Navigate to `HKEY_CURRENT_USER\Software\SimonTatham\PuTTY\Sessions\`
3. Import the `.reg` file

### Applying to existing sessions

Edit the `.reg` file and change the session name in:

```
[HKEY_CURRENT_USER\Software\SimonTatham\PuTTY\Sessions\YOUR_SESSION_NAME]
```

## Files

- `Alabaster-Dark.reg` - Dark theme
- `Alabaster-Light.reg` - Light theme

## Links

- [PuTTY Documentation](https://www.chiark.greenend.org.uk/~sgtatham/putty/docs.html)
- [PuTTY Color Themes](https://github.com/AlexAkulov/putty-color-themes)
