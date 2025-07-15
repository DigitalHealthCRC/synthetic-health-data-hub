---
layout: default
title: CTGAN
permalink: /technical/algorithms/ctgan/
---

# CTGAN: Conditional Tabular GAN

## Overview

CTGAN (Conditional Tabular Generative Adversarial Network) is a state-of-the-art deep learning model specifically designed for generating synthetic tabular data. It addresses unique challenges in tabular data synthesis including mixed data types, non-Gaussian distributions, and imbalanced categories.

## Key Features

- **Mixed Data Types**: Handles both continuous and discrete columns
- **Mode-Specific Normalization**: Addresses non-Gaussian distributions
- **Conditional Generator**: Prevents mode collapse for discrete columns
- **Training by Sampling**: Ensures all categories are represented

## Technical Details

### Architecture

The CTGAN architecture consists of:
1. **Generator**: Produces synthetic samples from random noise
2. **Discriminator**: Distinguishes real from synthetic data
3. **Conditional Vector**: Ensures categorical coverage
4. **Mode-Specific Networks**: Handle different data distributions

### Implementation

```python
from sdv.single_table import CTGANSynthesizer

# Initialize synthesizer
synthesizer = CTGANSynthesizer(
    epochs=300,
    batch_size=500,
    discriminator_dim=(256, 256),
    generator_dim=(256, 256)
)

# Fit to real data
synthesizer.fit(real_data)

# Generate synthetic data
synthetic_data = synthesizer.sample(num_rows=1000)
```

## Use Cases

CTGAN is particularly effective for:
- Electronic Health Records (EHR)
- Clinical trial data
- Healthcare claims data
- Patient demographic data

## Performance Metrics

Typical performance on healthcare datasets:
- **Statistical Similarity**: 0.85-0.95
- **ML Utility**: 0.80-0.90
- **Privacy Risk**: < 0.01
- **Generation Time**: 10-30 minutes for 100K rows

## Best Practices

1. **Data Preprocessing**: Ensure proper handling of missing values
2. **Hyperparameter Tuning**: Adjust epochs and batch size based on data size
3. **Validation**: Always validate synthetic data quality
4. **Privacy Assessment**: Evaluate re-identification risk

## Resources

- [Original Paper](https://arxiv.org/abs/1907.00503)
- [GitHub Repository](https://github.com/sdv-dev/CTGAN)
- [Tutorial Notebook](/education/tutorials/ctgan-tutorial/)
- [API Documentation](https://docs.sdv.dev/sdv/)