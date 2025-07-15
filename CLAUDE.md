# Claude Context for Synthetic Health Data Hub

## Project Overview
This is a Jekyll-based documentation site for synthetic health data resources. The site aims to be the definitive resource hub for tabular synthetic health data, covering algorithms, tools, regulations, and community resources.

## Current Setup
- **Jekyll Theme**: Currently using `just-the-docs` but experiencing deployment issues
- **Base URL**: `/synthetic-health-data-hub`
- **URL**: `https://digitalhealthcrclimited.github.io`
- **Repository**: `DigitalHealthCRCLimited/synthetic-health-data-hub`

## Known Issues
1. The `just-the-docs` theme (v0.10.1) is causing deployment problems on GitHub Pages
2. Need to switch to a stable, officially supported GitHub Pages theme

## Project Structure
```
/
├── _config.yml              # Jekyll configuration
├── index.md                # Home page
├── technical-resources.md  # Technical section landing
├── ecosystem.md            # Software ecosystem landing
├── regulatory.md           # Regulatory compliance landing
├── community.md            # Community section landing
├── education.md            # Education resources landing
├── use-cases.md            # Use cases landing
├── privacy-security.md     # Privacy & security landing
├── benchmarks.md           # Benchmarks landing
├── _technical/             # Technical content collection
├── _ecosystem/             # Software ecosystem collection
├── _regulatory/            # Regulatory content collection
├── _community/             # Community profiles collection
├── _education/             # Education content collection
├── _use_cases/             # Use cases collection
├── _privacy_security/      # Privacy content collection
├── _benchmarks/            # Benchmarks collection
└── .github/workflows/      # GitHub Actions for deployment
```

## Key Tasks
1. Switch from `just-the-docs` to a stable GitHub Pages supported theme
2. Ensure navigation works properly with collections
3. Maintain the hierarchical navigation structure
4. Keep the professional documentation site appearance

## Navigation Structure
The site has 9 main sections:
1. Home (nav_order: 1)
2. Technical Resources (nav_order: 2)
3. Software Ecosystem (nav_order: 3)
4. Regulatory & Compliance (nav_order: 4)
5. Community (nav_order: 5)
6. Education (nav_order: 6)
7. Use Cases (nav_order: 7)
8. Privacy & Security (nav_order: 8)
9. Benchmarks (nav_order: 9)

Each section has child pages organized in Jekyll collections.

## Deployment
- Uses GitHub Actions workflow (`.github/workflows/deploy.yml`)
- Builds with Jekyll and deploys to GitHub Pages
- Includes link checking

## Important Commands
```bash
# Local development (if Jekyll is installed)
bundle exec jekyll serve

# Build site
bundle exec jekyll build
```

## Contact
This is maintained by the Digital Health CRC Limited team working on synthetic health data resources.