# MkDocs Migration Guide

This repository has been migrated from Jekyll to MkDocs Material for better documentation features and easier maintenance.

## Local Development

### Prerequisites

- Python 3.8 or higher
- pip

### Setup

1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

2. Run local development server:
   ```bash
   mkdocs serve
   ```
   
   The site will be available at http://localhost:8000

### Building the Site

To build the static site:
```bash
mkdocs build
```

The built site will be in the `site/` directory.

## Project Structure

```
.
├── docs/                   # All documentation content
│   ├── index.md           # Homepage
│   ├── technical/         # Technical documentation
│   ├── ecosystem/         # Tools and ecosystem
│   ├── regulatory/        # Compliance guides
│   ├── community/         # Community resources
│   └── resources/         # Guides and best practices
├── mkdocs.yml             # MkDocs configuration
├── requirements.txt       # Python dependencies
├── overrides/             # Theme customizations
│   └── assets/
│       └── stylesheets/
│           └── extra.css  # Custom CSS
└── includes/              # Reusable content
    └── abbreviations.md   # Common abbreviations
```

## Key Features

- **Built-in Search**: Full-text search works offline
- **Mobile Responsive**: Optimized for all devices
- **Dark Mode**: Automatic theme switching
- **Code Highlighting**: Enhanced code blocks with copy button
- **Navigation**: Hierarchical navigation with breadcrumbs
- **Abbreviations**: Hover over acronyms for definitions

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. The GitHub Actions workflow handles:

1. Building the MkDocs site
2. Running link checks (on PRs)
3. Deploying to GitHub Pages

## Adding Content

1. Create a new markdown file in the appropriate `docs/` subdirectory
2. Add the page to the navigation in `mkdocs.yml`
3. Commit and push your changes

## Customization

- **Theme Colors**: Edit CSS variables in `overrides/assets/stylesheets/extra.css`
- **Navigation**: Update the `nav` section in `mkdocs.yml`
- **Features**: Toggle theme features in `mkdocs.yml`

## Migration Notes

This site was migrated from Jekyll. Key changes:

- Jekyll collections → MkDocs directories
- Front matter removed from markdown files
- Custom CSS preserved and adapted
- GitHub Actions updated for MkDocs deployment

## Troubleshooting

### Common Issues

1. **Build Errors**: Run `mkdocs build --strict` to see detailed errors
2. **Missing Dependencies**: Ensure all packages in `requirements.txt` are installed
3. **Navigation Issues**: Check that all pages in `nav` exist in `docs/`

### Getting Help

- [MkDocs Documentation](https://www.mkdocs.org/)
- [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
- Open an issue in this repository