# Jekyll Archive

This directory contains all files from the previous Jekyll-based implementation of the Synthetic Health Data Hub.

## Migration Status
- **From**: Jekyll with Just the Docs theme
- **To**: MkDocs with Material theme
- **Migration Date**: July 2024

## Archive Contents

### `/config/`
- `_config.yml` - Jekyll site configuration
- `Gemfile` - Ruby gem dependencies
- `_data/` - Jekyll data files (regulations.yml)

### `/collections/`
Jekyll collections (underscore-prefixed directories):
- `_technical/` - Technical documentation
- `_ecosystem/` - Software ecosystem
- `_regulatory/` - Regulatory compliance
- `_community/` - Community profiles
- `_education/` - Education resources
- `_use_cases/` - Use cases
- `_privacy_security/` - Privacy and security
- `_benchmarks/` - Benchmarks

### `/templates/`
- `_layouts/` - Jekyll layout templates
- `_layouts.backup/` - Backup layouts
- `_includes/` - Jekyll include files

### `/assets/`
- `css/` - Jekyll CSS files
- `js/` - Jekyll JavaScript files
- `js.backup/` - Backup JavaScript files

### `/sass/`
- `_sass.backup/` - Jekyll Sass files

### `/pages/`
Jekyll root page files:
- `index.md` - Homepage
- `technical-resources.md` - Technical section
- `ecosystem.md` - Ecosystem section
- `regulatory.md` - Regulatory section
- `community.md` - Community section
- `education.md` - Education section
- `use-cases.md` - Use cases section
- `privacy-security.md` - Privacy & security section
- `benchmarks.md` - Benchmarks section

## Current Implementation
The current site uses MkDocs with content in `/docs/` directory. All Jekyll content has been migrated to the MkDocs structure.

## Note
These files are archived for reference only. The active site uses MkDocs configuration and content structure.