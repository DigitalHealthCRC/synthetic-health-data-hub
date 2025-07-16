# Claude Context for Synthetic Health Data Hub
USE AUSTRALIAN ENGLISH SPELLING
AVOID TITLE_CASE, Only Captalize the first letter of each sentence, or specific names or accronyms.
## Project Overview
This is a Jekyll-based documentation site for synthetic health data resources. The site aims to be the definitive resource hub for tabular synthetic health data, covering algorithms, tools, regulations, and community resources.

## Current Setup
- **Jekyll Theme**: 
` (stable GitHub Pages theme)
- **Base URL**: `/synthetic-health-data-hub`
- **URL**: `https://digitalhealthcrclimited.github.io`
- **Repository**: `DigitalHealthCRCLimited/synthetic-health-data-hub`
- **Logo**: SynD logo (https://digitalhealthcrc.com/wp-content/uploads/2024/07/SynD-logo-transparent-200x117.png.webp)

## Recent Updates
1. Switched from `just-the-docs` to `jekyll-theme-minimal` for better GitHub Pages compatibility
2. Implemented clean, modern design with custom CSS
3. Added mobile-responsive navigation with hamburger menu
4. Created Jekyll data files for regulations
5. Fixed all build errors and broken links
6. Created comprehensive CONTRIBUTING.md with templates
7. Added technical content:
   - TVAE algorithm documentation
   - DataSynthesizer algorithm documentation
   - SDV overview page
   - Evaluation metrics comprehensive guide
8. Added community profiles:
   - Prof. Mihaela van der Schaar
   - Dr. Khaled El Emam
   - Dr. Kalyan Veeramachaneni
   - Dr. Brett Beaulieu-Jones
   - Craig Jordan
9. Added regulatory guides:
   - HIPAA compliance guide
   - PIPEDA compliance guide

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

## Design System
- **Primary Color**: #2563eb (blue)
- **Secondary Color**: #e100ff (purple) 
- **Typography**: Inter font family
- **CSS Variables**: Modern approach using CSS custom properties
- **Mobile First**: Responsive design with hamburger menu

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

### 📊 Content Count
- **Technical Pages**: 5 (CTGAN, TVAE, DataSynthesizer, SDV Overview, Evaluation Metrics)
- **Community Profiles**: 6 (including Cynthia Dwork)
- **Regulatory Guides**: 3 (GDPR, HIPAA, PIPEDA)
- **Main Section Pages**: 9
- **Total Content Pages**: 23

### 🎯 Next Steps
1. Add more algorithm pages (Synthpop, GaussianCopula, TimeGAN)
2. Create organization profiles
3. Add educational resources (courses, papers)
4. Implement use case studies
5. Set up GitHub Actions for automated link checking
6. Create tool comparison matrices
7. Add benchmarks and datasets

## Contact
This is maintained by the Digital Health CRC Limited team working on synthetic health data resources.