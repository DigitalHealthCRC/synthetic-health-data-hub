#!/bin/bash

# Setup script for Synthetic Health Data Hub

echo "🚀 Setting up Synthetic Health Data Hub..."

# Check if Ruby is installed
if ! command -v ruby &> /dev/null; then
    echo "❌ Ruby is not installed. Please install Ruby 3.0+ first."
    exit 1
fi

# Check if Bundler is installed
if ! command -v bundle &> /dev/null; then
    echo "📦 Installing Bundler..."
    gem install bundler
fi

# Install dependencies
echo "📚 Installing dependencies..."
bundle install

# Create example environment file
if [ ! -f .env.example ]; then
    cat > .env.example << EOF
# GitHub Pages Configuration
GITHUB_USERNAME=DigitalHealthCRCLimited
GITHUB_REPOSITORY=synthetic-health-data-hub

# Optional: Analytics
# GA_TRACKING_ID=UA-XXXXXXXXX-X
EOF
    echo "✅ Created .env.example file"
fi

echo ""
echo "✨ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Update _config.yml with your GitHub username"
echo "2. Run 'bundle exec jekyll serve' to start local development"
echo "3. Visit http://localhost:4000"
echo ""
echo "To deploy to GitHub Pages:"
echo "1. Create a new repository on GitHub"
echo "2. Push this code to the repository"
echo "3. Enable GitHub Pages in repository settings"
echo ""