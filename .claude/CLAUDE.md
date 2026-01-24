# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains terminal color themes for **Alabaster Dark** and **Alabaster Light**, adapted for 14 different terminal emulators. This is a static assets repository with no build system, tests, or runtime code.

The themes follow the Alabaster philosophy of minimal, intentional syntax highlighting, adapted for the 16 ANSI color constraints of terminal emulators.

## Repository Structure

- `themes/` - Contains subdirectories for each terminal emulator
  - Each subdirectory has theme files in the terminal's native format plus a README with installation instructions
- `screenshots/` - Theme preview images
- `docs/` - Additional documentation

## Color Palettes

When modifying or adding themes, use these canonical hex values:

### Alabaster Dark
| Color | Hex |
|-------|-----|
| Background/Black | `#202020` |
| Foreground/White | `#e7e7e7` |
| Red | `#ff7171` |
| Green | `#C3E88D` |
| Yellow | `#ffb45e` |
| Blue | `#5f9dff` |
| Magenta | `#C792EA` |
| Cyan | `#89DDFF` |
| Bright Black | `#777777` |
| Bright Red | `#ff8a8a` |
| Bright Green | `#d5f0a2` |
| Bright Yellow | `#ffc880` |
| Bright Blue | `#85b5ff` |
| Bright Magenta | `#d9b3f0` |
| Bright Cyan | `#b0e8ff` |
| Bright White | `#ffffff` |

### Alabaster Light
| Color | Hex |
|-------|-----|
| Background/White | `#f5f5f5` |
| Foreground/Black | `#000000` |
| Red | `#AA3731` |
| Green | `#448C27` |
| Yellow | `#9A6515` |
| Blue | `#325CC0` |
| Magenta | `#811abc` |
| Cyan | `#4078a0` |
| Bright Black | `#777777` |
| Bright Red | `#c04038` |
| Bright Green | `#5da03a` |
| Bright Yellow | `#b8860b` |
| Bright Blue | `#4a78d0` |
| Bright Magenta | `#9932cc` |
| Bright Cyan | `#5090b0` |
| Bright White | `#ffffff` |

## Adding a New Terminal

1. Create a new directory under `themes/` named after the terminal (lowercase, hyphenated)
2. Add theme files in the terminal's native format (both Dark and Light variants)
3. Add a `README.md` with installation instructions following the pattern of existing READMEs
4. Update the supported terminals table in the root `README.md`
5. Update the table in `themes/README.md`
