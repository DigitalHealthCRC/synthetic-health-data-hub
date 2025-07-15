# Contributing to Synthetic Health Data Hub

Thank you for your interest in contributing to the Synthetic Health Data Hub! This document provides guidelines for contributing to this repository.

## How to Contribute

### 1. Adding New Content

#### Tools and Software
To add a new tool or platform:
1. Create a new file in the appropriate collection (`_ecosystem/open_source/` or `_ecosystem/commercial/`)
2. Use the following template:

```markdown
---
title: Tool Name
parent: Open Source Tools  # or Commercial Platforms
grand_parent: Software Ecosystem
nav_order: 10
---

# Tool Name

Brief description of the tool.

## Overview

| Feature | Details |
|---------|---------|
| **License** | MIT/Apache/Commercial |
| **Language** | Python/R/Java |
| **Maintainer** | Organization name |
| **Website** | [link](url) |

## Key Features
- Feature 1
- Feature 2

## Installation
```bash
# Installation commands
```

## Quick Start
```language
# Code example
```
```

#### Leader Profiles
To add a community leader:
1. Create a file in `_community/leaders/firstname-lastname.md`
2. Follow the profile template in the repository

### 2. Updating Existing Content

- Check for outdated information monthly
- Update version numbers, links, and descriptions
- Add new sections as features are released

### 3. Code Style Guidelines

#### Markdown
- Use ATX-style headers (`#` not underlines)
- Include a TOC for long documents
- Use fenced code blocks with language specification
- Keep lines under 120 characters when possible

#### Front Matter
All content files must include:
```yaml
---
title: Page Title
parent: Parent Page  # Optional
nav_order: 1  # For ordering in navigation
---
```

### 4. Commit Messages

Follow conventional commits:
- `feat:` New features or content
- `fix:` Corrections to existing content
- `docs:` Documentation updates
- `style:` Formatting changes
- `chore:` Maintenance tasks

Example: `feat: add Gretel.ai to commercial platforms`

## Review Process

1. **Self-Review**: Check your changes against this guide
2. **Automated Checks**: Ensure CI passes
3. **Peer Review**: At least one maintainer review
4. **Merge**: Maintainers will merge approved PRs

## Content Standards

### Accuracy
- Verify all technical information
- Include publication dates for time-sensitive content
- Link to primary sources

### Neutrality
- Maintain objective tone
- Present balanced comparisons
- Disclose conflicts of interest

### Accessibility
- Use clear, concise language
- Define technical terms
- Provide examples

## Types of Contributions

### Priority Contributions
- 🔴 **High Priority**
  - New algorithm implementations
  - Regulatory updates
  - Security advisories
  
- 🟡 **Medium Priority**
  - Tool comparisons
  - Tutorial content
  - Case studies

- 🟢 **Always Welcome**
  - Typo fixes
  - Link updates
  - Clarifications

### Special Considerations

#### Adding Organizations
Requirements:
- Active in synthetic data space
- Publicly available information
- Significant contributions or products

#### Adding Research Papers
Include:
- Full citation
- DOI or stable URL
- Brief summary
- Relevance to synthetic health data

## Getting Help

- **Questions**: Open a discussion
- **Bugs**: Open an issue
- **Ideas**: Start a discussion
- **Support**: Email [support email]

## Recognition

Contributors are recognized in:
- Monthly spotlight features
- Annual contributor report
- Conference acknowledgments

## License

By contributing, you agree that your contributions will be licensed under the MIT License.