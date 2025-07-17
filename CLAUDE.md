# Claude Context for Synthetic Health Data Hub
USE AUSTRALIAN ENGLISH SPELLING
AVOID TITLE_CASE, Only Captalize the first letter of each sentence, or specific names or accronyms.
## Project Overview
This is a MkDocs Material-based documentation site for synthetic health data resources. The site aims to be the definitive resource hub for tabular synthetic health data, covering algorithms, tools, regulations, and community resources.

## Current Setup (MIGRATED TO MKDOCS)
- **Framework**: MkDocs with Material theme
- **Base URL**: `/synthetic-health-data-hub`
- **URL**: `https://digitalhealthcrclimited.github.io`
- **Repository**: `DigitalHealthCRCLimited/synthetic-health-data-hub`
- **Logo**: SynD logo (https://digitalhealthcrc.com/wp-content/uploads/2024/07/SynD-logo-transparent-200x117.png.webp)
- **Branch**: main (migration complete)

## Recent Updates
1. **MAJOR UPDATE**: Migrated from Jekyll to MkDocs Material ✅
   - Better search functionality
   - Modern UI with Material Design
   - Faster build times
   - Python-based (easier maintenance)
2. Migrated all content to MkDocs structure ✅
3. Set up GitHub Actions for automated deployment ✅
4. Created comprehensive documentation:
   - Technical content (TVAE, DataSynthesizer, SDV, CTGAN, Evaluation metrics)
   - Community profiles (6 leaders)
   - Regulatory guides (GDPR, HIPAA, PIPEDA)
   - Getting started guide
   - Best practices guide
5. Added custom styling to match branding ✅
6. Implemented abbreviations for technical terms ✅
7. **UI Improvements** (July 17, 2024):
   - Added dark blue to dark pink gradient header
   - Made all text left-aligned
   - Fixed button text visibility
   - Increased logo size
8. **Fixed broken links**:
   - Updated Google Scholar IDs for all profiles
   - Fixed DataSynthesizer GitHub links (master branch)
   - Corrected SDV documentation URLs

## Project Structure (MkDocs)
```
/
├── mkdocs.yml              # MkDocs configuration
├── requirements.txt        # Python dependencies
├── docs/                   # All documentation content
│   ├── index.md           # Homepage
│   ├── technical/         # Technical documentation
│   ├── ecosystem/         # Tools and ecosystem
│   ├── regulatory/        # Compliance guides
│   ├── community/         # Community resources
│   └── resources/         # Guides and best practices
├── overrides/             # Theme customizations
│   └── assets/
│       └── stylesheets/
│           └── extra.css  # Custom CSS
├── includes/              # Reusable content
│   └── abbreviations.md   # Common abbreviations
└── .github/workflows/     # GitHub Actions
    └── mkdocs.yml        # MkDocs deployment workflow
```

## Design System
- **Primary Color**: #0051ff (blue) - Updated to match branding
- **Secondary Color**: #e100ff (purple) 
- **Typography**: Inter font family
- **Code Font**: JetBrains Mono
- **Theme**: Material Design with custom overrides
- **Features**: Dark mode, search, navigation tabs

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
- Uses GitHub Actions workflow (`.github/workflows/mkdocs.yml`)
- Builds with MkDocs and deploys to GitHub Pages
- Includes automatic link checking on PRs
- Python-based build process

## Important Commands
```bash
# Install dependencies
pip install -r requirements.txt

# Local development
mkdocs serve

# Build site
mkdocs build --strict

# Deploy to GitHub Pages (manual)
mkdocs gh-deploy
```

## Progress Summary

### ✅ Completed (Phase 1)
- Repository structure with Jekyll collections
- Navigation system with clean UI
- Mobile-responsive design
- Main landing pages for all sections
- CONTRIBUTING.md with templates
- Technical documentation (3 algorithms + evaluation metrics)
- Community profiles (5 leaders)
- Regulatory guides (GDPR, HIPAA, PIPEDA)

### 📊 Content Count (Post-Migration)
- **Technical Pages**: 8 (CTGAN, TVAE, DataSynthesizer, SDV Overview, Evaluation Metrics, Synthpop, Gaussian Copula, TimeGAN)
- **Community Profiles**: 6 (including Cynthia Dwork)
- **Regulatory Guides**: 3 (GDPR, HIPAA, PIPEDA)
- **Resources**: 2 (Getting Started, Best Practices)
- **Main Section Pages**: 9
- **Total Content Pages**: 28+

### 🎯 Next Steps (Phase 2)
1. **Technical Content** (Priority: High) ✅
   - ✅ Add Synthpop algorithm page
   - ✅ Add GaussianCopula algorithm page
   - ✅ Add TimeGAN algorithm page
   - Create tool comparison matrices

2. **Community Content** (Priority: Medium)
   - Create organization profiles (Digital Health CRC, MIT DAI Lab, etc.)
   - Add more community leader profiles
   - Document upcoming events and workshops

3. **Educational Resources** (Priority: Medium)
   - Add online courses and tutorials
   - Create reading lists (key papers)
   - Add video resources
   - Create hands-on notebooks

4. **Use Cases** (Priority: Medium)
   - Healthcare analytics case studies
   - Research applications
   - Industry implementations
   - Success stories

5. **Benchmarks & Datasets** (Priority: Low)
   - Standard benchmark datasets
   - Evaluation frameworks
   - Performance comparisons
   - Dataset registry

## Contact
This is maintained by the Digital Health CRC Limited team working on synthetic health data resources.