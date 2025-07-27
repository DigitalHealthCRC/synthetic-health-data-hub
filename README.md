# Synthetic Health Data Hub

[![Deploy to GitHub Pages](https://github.com/DigitalHealthCRC/synthetic-health-data-hub/actions/workflows/deploy.yml/badge.svg)](https://github.com/DigitalHealthCRC/synthetic-health-data-hub/actions/workflows/deploy.yml)

The definitive resource hub for tabular synthetic health data, covering algorithms, tools, regulations, and community resources.

## 🌐 Visit the Site

[https://DigitalHealthCRCLimited.github.io/synthetic-health-data-hub/](https://DigitalHealthCRC.github.io/synthetic-health-data-hub/)

## 📚 Repository Structure

```
.
├── docs/                    # MkDocs content
│   ├── technical/          # Algorithms, evaluation metrics
│   ├── ecosystem/          # Open source tools and commercial platforms
│   ├── regulatory/         # Compliance guides and regulations
│   ├── community/          # Leader profiles and organisations
│   └── resources/          # Getting started guides and best practices
├── overrides/              # MkDocs theme customisations
├── includes/               # Reusable content (abbreviations)
├── jekyll-archive/         # Archived Jekyll files
├── mkdocs.yml             # MkDocs configuration
├── requirements.txt       # Python dependencies
└── README.md              # This file
```

## 🚀 Local Development

### Prerequisites
- Python 3.8 or higher
- pip
- Git

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/DigitalHealthCRCLimited/synthetic-health-data-hub.git
   cd synthetic-health-data-hub
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Run local development server:
   ```bash
   mkdocs serve
   ```

4. Visit `http://localhost:8000`

### Building the Site

```bash
# Build the site
mkdocs build

# Deploy to GitHub Pages (maintainers only)
mkdocs gh-deploy
```

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Quick Contribution Guide

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📋 Content Categories

- **Technical Resources**: Generation algorithms, evaluation metrics
- **Software Ecosystem**: Open source tools, commercial platforms
- **Regulatory Compliance**: GDPR, HIPAA, regional regulations
- **Community**: Researcher profiles, organisations, events
- **Resources**: Getting started guides, best practices

## 🛠️ Technology Stack

- **Static Site Generator**: MkDocs with Material theme
- **Search**: Built-in MkDocs search
- **Deployment**: GitHub Pages with Actions
- **Monitoring**: Automated link checking and validation

## 📊 Site Features

- 🔍 Full-text search across all content
- 📱 Mobile-responsive design
- 🎨 Material Design theming
- 🔗 Automatic link validation
- 🌙 Dark mode support
- 📱 Progressive Web App features

## 🧪 Testing

The site includes automated testing for:
- Link validation
- Content structure
- Build process

Tests run automatically on pull requests and deployments.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- All contributors and community members
- Organisations providing open data and tools  
- Researchers advancing the field

## 📞 Contact

- **GitHub Issues**: For bugs and feature requests
- **Discussions**: For questions and ideas
- **SynD Community**: [Digital Health CRC](https://digitalhealthcrc.com/synthetic-data-community-of-practice-synd/)

---

<p align="center">
  Made with ❤️ by the Synthetic Health Data Community
</p>
