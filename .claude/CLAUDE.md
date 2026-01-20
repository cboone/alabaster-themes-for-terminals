# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains terminal color schemes for Alabaster Dark and Alabaster Light themes, inspired by Tonsky's Alabaster. The themes are available for 14 different terminal emulators.

## Project Structure

- `themes/` - Terminal color scheme files organized by terminal emulator
  - `alacritty/` - Alacritty themes (.toml)
  - `contour/` - Contour themes (.yml)
  - `foot/` - foot themes (.ini)
  - `ghostty/` - Ghostty themes (no extension)
  - `iterm2/` - iTerm2 themes (.itermcolors)
  - `kitty/` - Kitty themes (.conf)
  - `konsole/` - Konsole themes (.colorscheme)
  - `mintty/` - mintty themes (.minttyrc)
  - `putty/` - PuTTY themes (.reg)
  - `terminal-app/` - Terminal.app themes (.terminal)
  - `tilix/` - Tilix themes (.json)
  - `warp/` - Warp themes (.yaml)
  - `wezterm/` - WezTerm themes (.toml)
  - `windows-terminal/` - Windows Terminal themes (.json)

## Design Philosophy

The themes avoid "flattening" (where UI elements share background colors) and avoid "tinted" themes (non-gray base colors). UI elements should be visually separated with distinct shades of gray.
