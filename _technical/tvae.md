---
layout: default
title: TVAE
permalink: /technical/algorithms/tvae/
---

# TVAE: Tabular Variational Autoencoder

## Overview

TVAE (Tabular Variational Autoencoder) is a deep learning model designed specifically for generating synthetic tabular data. It uses a variational autoencoder architecture adapted to handle the unique challenges of tabular data, including mixed data types and complex distributions.

## Key Features

- **Mixed Data Types**: Handles both numerical and categorical columns
- **Distribution Learning**: Captures complex, non-Gaussian distributions
- **Latent Space Representation**: Creates meaningful embeddings of tabular data
- **Scalability**: Efficient training on large datasets
- **Privacy**: Can be combined with differential privacy mechanisms

## Technical Details

### How It Works

TVAE consists of two main components:

1. **Encoder**: Transforms input data into a latent space representation
   - Applies mode-specific normalization for numerical columns
   - Uses embeddings for categorical columns
   - Produces mean and variance for latent distribution

2. **Decoder**: Reconstructs data from latent space
   - Generates synthetic samples from random latent vectors
   - Applies inverse transformations to restore original data format

### Architecture

```
Input Data → Preprocessing → Encoder → Latent Space → Decoder → Synthetic Data
                ↓                           ↓
        Mode-Specific Normalization    Sampling (μ, σ)
```

### When to Use

TVAE is particularly effective for:
- Datasets with complex numerical distributions
- Mixed numerical and categorical data
- When you need a balance between quality and training speed
- Scenarios requiring privacy guarantees (with DP-TVAE variant)

### Limitations

- May struggle with very high cardinality categorical columns
- Less effective on highly imbalanced datasets without preprocessing
- Requires careful hyperparameter tuning for optimal results

## Implementation

### Code Example

```python
from sdv.single_table import TVAESynthesizer
import pandas as pd

# Load your data
data = pd.read_csv('health_records.csv')

# Initialize TVAE synthesizer
synthesizer = TVAESynthesizer(
    epochs=300,
    batch_size=500,
    embedding_dim=128,
    compress_dims=(128, 128),
    decompress_dims=(128, 128)
)

# Fit the model
synthesizer.fit(data)

# Generate synthetic data
synthetic_data = synthesizer.sample(num_rows=1000)
```

### Available Implementations

- [SDV Library](https://github.com/sdv-dev/SDV) - Most popular implementation
- [PyPI Package](https://pypi.org/project/sdv/) - `pip install sdv`
- [Documentation](https://docs.sdv.dev/sdv/single-table-data/modeling/synthesizers/tvae)

### Advanced Configuration

```python
# Advanced hyperparameter tuning
synthesizer = TVAESynthesizer(
    epochs=500,
    batch_size=1000,
    embedding_dim=256,
    compress_dims=(256, 256, 256),
    decompress_dims=(256, 256, 256),
    l2_scale=1e-5,
    learning_rate=0.001,
    cuda=True  # Use GPU if available
)
```

## Performance

### Typical Metrics

On healthcare datasets, TVAE typically achieves:
- **Statistical Similarity**: 0.82-0.92
- **ML Utility**: 0.78-0.88 (downstream task performance)
- **Privacy Risk**: < 0.01 (with appropriate configuration)
- **Training Time**: 5-20 minutes for 100K rows (CPU)

### Comparison with Other Methods

| Metric | TVAE | CTGAN | GaussianCopula |
|--------|------|-------|----------------|
| Training Speed | Fast | Moderate | Very Fast |
| Quality | High | Very High | Moderate |
| Categorical Handling | Good | Excellent | Limited |
| Numerical Distributions | Excellent | Excellent | Good |

## Best Practices

1. **Data Preprocessing**
   - Handle missing values before training
   - Consider log transformation for highly skewed numerical columns
   - Encode high-cardinality categoricals appropriately

2. **Hyperparameter Tuning**
   - Start with default parameters
   - Increase epochs if quality is insufficient
   - Adjust embedding dimension based on data complexity

3. **Validation**
   - Use multiple evaluation metrics
   - Compare statistical properties
   - Test downstream task performance

4. **Privacy Considerations**
   - Consider DP-TVAE for sensitive data
   - Evaluate membership inference risk
   - Document privacy guarantees

## Resources

- [SDV Documentation](https://docs.sdv.dev/) - Official documentation
- [GitHub Repository](https://github.com/sdv-dev/SDV) - Source code and examples
- [TVAE Paper](https://arxiv.org/abs/1907.00503) - Technical details
- [Community Discussion](https://github.com/sdv-dev/SDV/discussions) - Q&A and tips

## Citation

```bibtex
@inproceedings{xu2019modeling,
  title={Modeling tabular data using conditional gan},
  author={Xu, Lei and Skoularidou, Maria and Cuesta-Infante, Alfredo and Veeramachaneni, Kalyan},
  booktitle={Advances in neural information processing systems},
  volume={32},
  year={2019}
}
```

## Related Algorithms

- [CTGAN](/technical/algorithms/ctgan/) - GAN-based alternative
- [GaussianCopula](/technical/algorithms/gaussian-copula/) - Statistical approach
- [DP-TVAE](/technical/algorithms/dp-tvae/) - Differentially private variant

---
*Last updated: July 2024*