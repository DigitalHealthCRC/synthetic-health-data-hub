# Contributing to Synthetic Health Data Hub

Thank you for your interest in contributing to the Synthetic Health Data Hub! This resource thrives on community contributions, and we welcome input from researchers, practitioners, policymakers, and anyone passionate about synthetic health data.

## 🤝 Ways to Contribute

### 1. Content Contributions
- **Technical Resources**: Add new algorithms, evaluation methods, or implementation guides
- **Tool Reviews**: Share experiences with synthetic data tools and platforms
- **Regulatory Updates**: Help keep compliance information current
- **Community Profiles**: Nominate leaders or add organisation information
- **Educational Resources**: Share courses, papers, or tutorials

### 2. Improvements
- Fix typos or broken links
- Improve existing documentation
- Add examples or clarifications
- Update outdated information

### 3. Community Building
- Share the resource with colleagues
- Participate in discussions
- Help review pull requests
- Suggest new features or sections

## 📝 Contribution Process

1. **Fork the Repository**
   ```bash
   git clone https://github.com/DigitalHealthCRCLimited/synthetic-health-data-hub.git
   cd synthetic-health-data-hub
   ```

2. **Create a Branch**
   ```bash
   git checkout -b feature/your-contribution-name
   ```

3. **Make Your Changes**
   - Follow the templates and style guides below
   - Test your changes locally if possible
   - Ensure links work correctly

4. **Submit a Pull Request**
   - Provide a clear description of your changes
   - Reference any related issues
   - Follow the PR template

## 📋 Content Templates

### Algorithm/Tool Page Template

Create in `_technical/algorithms/[name].md` or `_ecosystem/open_source/[name].md`:

```markdown
---
layout: default
title: [Algorithm/Tool Name]
permalink: /technical/algorithms/[name]/
---

# [Algorithm/Tool Name]

## Overview
Brief description of the algorithm/tool and its purpose.

## Key Features
- Feature 1
- Feature 2
- Feature 3

## Technical Details
### How It Works
Explanation of the methodology.

### When to Use
Appropriate use cases and scenarios.

### Limitations
Known limitations or considerations.

## Implementation
### Code Example
```python
# Example code snippet
```

### Available Implementations
- [GitHub Repository](link)
- [PyPI Package](link)
- [Documentation](link)

## Performance
Typical performance metrics or benchmarks.

## Resources
- [Original Paper](link) - Authors (Year)
- [Tutorial](link)
- [Community Discussion](link)

## Citation
```bibtex
@article{key,
  title={Title},
  author={Authors},
  journal={Journal},
  year={Year}
}
```
```

### Community Profile Template

Create in `_community/leaders/[lastname-firstname].md`:

```markdown
---
layout: default
title: [Full Name]
permalink: /community/leaders/[lastname-firstname]/
---

# [Full Name]

## Overview
- **Current Role**: [Title, organisation]
- **Location**: [City, Country]
- **Expertise**: [Key areas - e.g., differential privacy, clinical applications]
- **Active Since**: [Year entered synthetic data field]

## Contributions to Synthetic Health Data
Brief paragraph about their impact on the field.

### Key Innovations
- **[Innovation Name]** - Brief description
- **[Innovation Name]** - Brief description

### Notable Publications
1. **[Paper Title]** (Year) - [Journal/Conference] - [Link/DOI]
2. **[Paper Title]** (Year) - [Journal/Conference] - [Link/DOI]
3. **[Paper Title]** (Year) - [Journal/Conference] - [Link/DOI]

### Tools & Software
- **[Tool Name]** - Role (creator/maintainer) - [Link]
- **[Tool Name]** - Role (creator/maintainer) - [Link]

## Community Engagement
- **Speaking**: Recent conferences/talks
- **Advisory Roles**: Boards, committees
- **Mentorship**: Students, programs
- **Awards**: Recognition received

## Connect
- **Website**: [Personal/Lab Website]
- **GitHub**: [@username]
- **Google Scholar**: [Profile Link]
- **Twitter/X**: [@handle]
- **LinkedIn**: [Profile]
- **Email**: [If publicly available]

## Recent Activity
- [Latest publication or project]
- [Recent talk or presentation]
- [Current research focus]

## Collaboration Interests
- Open to: [research collaboration/consulting/speaking]
- Looking for: [partners/funding/students]

---
*Last updated: [Date]*
*Verified: [✓ Self-verified / Community verified]*
```

### organisation Profile Template

Create in `_community/organisations/[org-name].md`:

```markdown
---
layout: default
title: [organisation Name]
permalink: /community/organisations/[org-name]/
---

# [organisation Name]

## Overview
- **Type**: [Academic/Commercial/Government/NGO]
- **Founded**: [Year]
- **Headquarters**: [Location]
- **Focus**: [Primary synthetic data focus]

## Synthetic Data Activities
Brief description of their work in synthetic health data.

### Key Projects
- **[Project Name]** - Description
- **[Project Name]** - Description

### Tools & Products
- **[Tool/Product]** - Description - [Link]
- **[Tool/Product]** - Description - [Link]

### Research Output
- [Number] publications on synthetic data
- Key areas: [List main research themes]

## Leadership
- **Director/CEO**: [Name]
- **Synthetic Data Lead**: [Name]
- **Key Researchers**: [Names]

## Collaboration
- **Partnerships**: [List key partners]
- **Open to**: [Types of collaboration]
- **Contact**: [How to reach them]

## Resources
- **Website**: [URL]
- **GitHub**: [organisation URL]
- **Publications**: [Link to list]

---
*Last updated: [Date]*
```

### Regulatory Guide Template

Create in `_regulatory/[region]/[name].md`:

```markdown
---
layout: default
title: [Regulation Name]
permalink: /regulatory/[region]/[name]/
---

# [Regulation Full Name] ([Acronym])

## Overview
- **Region**: [Geographic scope]
- **Enacted**: [Year]
- **Last Updated**: [Date]
- **Authority**: [Regulatory body]
- **Scope**: [What it covers]

## Quick Reference
| Aspect | Requirement |
|--------|------------|
| Data Type | [What's covered] |
| Key Requirement | [Main requirement] |
| Penalties | [Enforcement] |

## Key Requirements

### For Synthetic Data
1. **Requirement 1** - Explanation
2. **Requirement 2** - Explanation
3. **Requirement 3** - Explanation

### Compliance Checklist
- [ ] Step 1: [Action item]
- [ ] Step 2: [Action item]
- [ ] Step 3: [Action item]
- [ ] Step 4: [Action item]

## Detailed Analysis

### Applicability to Synthetic Health Data
Detailed explanation of how this regulation affects synthetic data generation and use.

### Key Definitions
- **Term 1**: Definition as per regulation
- **Term 2**: Definition as per regulation

### Exemptions
- Research exemption: [Details]
- Public interest: [Details]

## Best Practices
1. **Practice 1** - How to implement
2. **Practice 2** - How to implement
3. **Practice 3** - How to implement

## Case Examples

### Compliant Approach
```
Scenario: [Description]
Approach: [How to comply]
Outcome: [Result]
```

### Non-Compliant Risk
```
Scenario: [Description]
Issue: [What went wrong]
Consequence: [Result]
```

## Resources
- **Official Text**: [Link to regulation]
- **Guidance Documents**: [Link]
- **FAQ**: [Link]
- **Enforcement Actions**: [Link]

## Expert Commentary
*Optional: Insights from legal experts or practitioners*

> "Quote from expert about this regulation's impact on synthetic data" - Expert Name, Title

---
*Disclaimer: This is for informational purposes only and does not constitute legal advice. Consult with legal professionals for specific compliance questions.*
*Last updated: [Date]*
```

## 🎨 Style Guide

### Writing Style
- **Clear and Concise**: Use simple language, avoid unnecessary jargon
- **Objective**: Present information neutrally and factually
- **Practical**: Include actionable information and real examples
- **Accessible**: Write for a diverse audience (researchers to policymakers)

### Formatting
- Use headers to organise content hierarchically (##, ###, ####)
- Include a table of contents for pages longer than 500 words
- Use bullet points for lists of 3 or more items
- Add code blocks with appropriate syntax highlighting
- Include relevant links and proper citations
- Use tables for comparing multiple items

### File Naming
- Use lowercase with hyphens: `algorithm-name.md`
- Be descriptive but concise
- Follow existing patterns in each section
- For people: `lastname-firstname.md`
- For organisations: `organisation-name.md`

### Commit Messages
Follow conventional commits:
- `feat:` New features or content
- `fix:` Corrections to existing content
- `docs:` Documentation updates
- `style:` Formatting changes
- `chore:` Maintenance tasks

Examples:
- `feat: add TVAE algorithm documentation`
- `fix: update broken link in GDPR guide`
- `docs: improve installation instructions for SDV`

## ✅ Quality Checklist

Before submitting:
- [ ] Content is accurate and up-to-date
- [ ] All links work correctly (test them!)
- [ ] Follows the appropriate template
- [ ] Includes proper citations/references
- [ ] No spelling or grammar errors (use a spell checker)
- [ ] File is in the correct directory
- [ ] Front matter (metadata) is complete and correct
- [ ] Images have alt text (if applicable)
- [ ] Code examples are tested and working
- [ ] Sensitive information is not included

## 🚧 Priority Areas

Currently seeking contributions in:

### 🔴 High Priority
- Algorithm implementation guides (TVAE, DataSynthesizer, Synthpop)
- Evaluation metrics documentation
- HIPAA and PIPEDA regulatory guides
- Tool comparison matrices
- Recent paper summaries (2023-2024)

### 🟡 Medium Priority
- Community leader profiles
- organisation profiles
- Use case studies
- Tutorial content
- Regional regulatory guides

### 🟢 Always Welcome
- Typo and grammar fixes
- Broken link updates
- Clarifications and improvements
- Translation help

## 🚀 Getting Help

- **Questions**: Open an issue with the "question" label
- **Discussions**: Use GitHub Discussions for broader topics
- **Bugs**: Open an issue with the "bug" label
- **Ideas**: Start a discussion in the "Ideas" category
- **Contact**: Reach out to maintainers via @mentions in issues

## 📜 Code of Conduct

We are committed to providing a welcoming and inclusive environment. Please:
- Be respectful and considerate
- Welcome newcomers and help them get started
- Focus on constructive criticism
- Respect differing viewpoints and experiences
- Use inclusive language

## 🙏 Recognition

All contributors will be recognized in:
- Contributors list (automated via GitHub)
- Monthly spotlights (for significant contributions)
- Annual contributor recognition post
- Conference acknowledgments where appropriate

Your contributions help make synthetic health data more accessible and understandable to the global community. Thank you!

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---
*This contributing guide is adapted from best practices in open source documentation projects.*