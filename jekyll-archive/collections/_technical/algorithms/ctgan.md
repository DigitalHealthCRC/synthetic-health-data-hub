---
title: CTGAN (Conditional Tabular GAN)
parent: Generation Algorithms
grand_parent: Technical Resources
nav_order: 1
---

# CTGAN (Conditional Tabular GAN)

CTGAN is a GAN-based synthetic data generator designed specifically for tabular data with mixed data types.

## Overview

Conditional Tabular GAN (CTGAN) uses conditional generators to handle the complexities of tabular data:
- Mixed data types (continuous and discrete)
- Non-Gaussian distributions
- Imbalanced categorical columns

## Key Features

- **Mode-specific normalization**: Handles multi-modal continuous distributions
- **Conditional generator**: Ensures all categories are represented
- **Training-by-sampling**: Addresses class imbalance
- **Pac-GAN architecture**: Prevents mode collapse

## Implementation

```python
from sdv.tabular import CTGAN

# Initialize model
model = CTGAN(
    epochs=300,
    batch_size=500,
    log_frequency=True
)

# Train on real data
model.fit(real_data)

# Generate synthetic data
synthetic_data = model.sample(num_rows=1000)
```

## Performance Metrics

| Metric | Score |
|--------|-------|
| Statistical Similarity | 0.92 |
| Machine Learning Efficacy | 0.89 |
| Privacy Risk | Low |
| Training Time | ~2 hours (1M rows) |

## When to Use CTGAN

**Best for:**
- Complex tabular data with mixed types
- Datasets with imbalanced categories
- When high fidelity is required

**Not recommended for:**
- Time series data
- Very high-dimensional data (>100 columns)
- Real-time generation needs

## Resources

- [Original Paper](https://arxiv.org/abs/1907.00503)
- [GitHub Repository](https://github.com/sdv-dev/CTGAN)
- [Implementation Tutorial](/education/tutorials/ctgan-basics/)