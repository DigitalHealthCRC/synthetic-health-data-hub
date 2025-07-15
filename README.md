# Synthetic Health Data Hub

[![Deploy to GitHub Pages](https://github.com/DigitalHealthCRCLimited/synthetic-health-data-hub/actions/workflows/deploy.yml/badge.svg)](https://github.com/DigitalHealthCRCLimited/synthetic-health-data-hub/actions/workflows/deploy.yml)
[![Validate Content](https://github.com/DigitalHealthCRCLimited/synthetic-health-data-hub/actions/workflows/validate-content.yml/badge.svg)](https://github.com/DigitalHealthCRCLimited/synthetic-health-data-hub/actions/workflows/validate-content.yml)

The definitive resource hub for tabular synthetic health data, covering algorithms, tools, regulations, and community resources.

## 🌐 Visit the Site

[https://DigitalHealthCRCLimited.github.io/synthetic-health-data-hub/](https://DigitalHealthCRCLimited.github.io/synthetic-health-data-hub/)

## 📚 Repository Structure

```
.
├── _technical/          # Algorithms, evaluation metrics, data types
├── _ecosystem/          # Open source tools and commercial platforms
├── _regulatory/         # Compliance guides and regulations
├── _community/          # Leader profiles and organizations
├── _education/          # Courses, papers, and tutorials
├── _use_cases/          # Real-world applications
├── _privacy_security/   # Privacy methods and security practices
├── _benchmarks/         # Datasets and evaluation suites
├── _layouts/            # Jekyll layouts
├── _sass/               # Custom styles
├── assets/              # JavaScript, CSS, images
└── index.md             # Homepage
```

## 🚀 Local Development

### Prerequisites
- Ruby 3.0+
- Bundler
- Git

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/DigitalHealthCRCLimited/synthetic-health-data-hub.git
   cd synthetic-health-data-hub
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Run locally:
   ```bash
   bundle exec jekyll serve
   ```

4. Visit `http://localhost:4000`

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
- **Community**: Researcher profiles, organizations, events
- **Education**: Courses, tutorials, academic papers
- **Use Cases**: Industry implementations, case studies
- **Privacy & Security**: Best practices, privacy methods
- **Benchmarks**: Standard datasets, evaluation suites

## 🛠️ Technology Stack

- **Static Site Generator**: Jekyll 4.3
- **Theme**: Just the Docs
- **Search**: Lunr.js
- **Deployment**: GitHub Pages with Actions
- **Monitoring**: GitHub Actions for link checking and validation

## 📊 Site Features

- 🔍 Full-text search across all content
- 📱 Mobile-responsive design
- 🎨 Custom styling for data visualizations
- 🔗 Automatic link validation
- 📈 Network visualizations for community connections
- 🏷️ Tag-based content discovery

## 🧪 Testing

Run tests locally:

```bash
# Check links
bundle exec htmlproofer ./_site --disable-external

# Validate front matter
npm test

# Spell check
npx cspell "**/*.md"
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- All contributors and community members
- Organizations providing open data and tools
- Researchers advancing the field

## 📞 Contact

- **GitHub Issues**: For bugs and feature requests
- **Discussions**: For questions and ideas
- **Email**: [contact email]

---

<p align="center">
  Made with ❤️ by the Synthetic Health Data Community
</p>