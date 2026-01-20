# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a VS Code color theme extension called "Alabaster Variant Theme", inspired by Tonsky's Alabaster. It provides both light and dark variants with consistent styling and non-tinted, non-flattened UI design.

## Project Structure

- `package.json` - Extension manifest defining theme contributions
- `themes/Alabaster Dark-color-theme.json` - Dark theme definition (JSON with comments)
- `themes/Alabaster Light-color-theme.json` - Light theme definition (JSON with comments)

## Development

### Testing Themes

To test theme changes in VS Code:

1. Open this folder in VS Code
2. Press F5 to launch Extension Development Host
3. In the new window, select the theme via Command Palette > "Preferences: Color Theme"

### Publishing

The extension is published to the VS Code Marketplace under publisher "NicolaiVerbaarschot".

## Theme Files

The theme JSON files use VS Code's color theme format with:

- `colors` object for UI element colors (editor, sidebar, status bar, etc.)
- `tokenColors` array for syntax highlighting rules using TextMate scopes

Note: These JSON files contain JavaScript-style comments (`//`) which VS Code's theme parser accepts.

## Design Philosophy

From README: The themes avoid "flattening" (where UI elements share background colors) and avoid "tinted" themes (non-gray base colors). UI elements should be visually separated with distinct shades of gray.
