---
layout: default
title: DataSynthesizer
permalink: /technical/algorithms/datasynthesizer/
---

# DataSynthesizer

## Overview

DataSynthesizer is a privacy-preserving synthetic data generator that uses a combination of statistical methods and differential privacy to create synthetic datasets. Developed by researchers at University of Washington, it provides three different modes of operation with increasing levels of privacy protection.

## Key Features

- **Three Privacy Modes**: Independent, Correlated, and Private
- **Differential Privacy**: Built-in ε-differential privacy support
- **Bayesian Networks**: Captures attribute dependencies
- **User-Friendly**: Simple API with minimal configuration
- **Lightweight**: No deep learning dependencies required

## Technical Details

### How It Works

DataSynthesizer offers three modes with different privacy-utility trade-offs:

1. **Independent Mode**: 
   - Treats each attribute independently
   - Fastest but ignores correlations
   - Good for initial exploration

2. **Correlated Mode**:
   - Learns a Bayesian network to capture dependencies
   - Balances utility and efficiency
   - Most commonly used mode

3. **Private Mode**:
   - Adds differential privacy to correlated mode
   - Provides formal privacy guarantees
   - Adjustable privacy budget (ε)

### Architecture

```
Input Data → Attribute Analysis → Mode Selection → Synthesis
                    ↓                    ↓              ↓
              Data Types          Independent    Synthetic Data
              Distributions       Correlated
              Correlations        Private (DP)
```

### When to Use

DataSynthesizer is ideal for:
- Quick synthetic data generation with privacy concerns
- Datasets where statistical relationships are important
- Scenarios requiring differential privacy guarantees
- Limited computational resources (no GPU required)
- Educational and research purposes

### Limitations

- Less effective for complex, non-linear relationships
- Limited support for time series data
- May struggle with high-dimensional datasets
- Not optimized for image or text data

## Implementation

### Installation

```bash
pip install DataSynthesizer
```

### Code Example

```python
from DataSynthesizer.DataDescriber import DataDescriber
from DataSynthesizer.DataGenerator import DataGenerator
import pandas as pd

# Load your data
input_data = 'health_records.csv'
synthetic_data = 'synthetic_health_records.csv'

# Step 1: Describe the data
describer = DataDescriber(category_threshold=10)

# Mode 1: Independent Attribute Mode
describer.describe_dataset_in_independent_attribute_mode(
    dataset_file=input_data
)
describer.save_dataset_description_to_file('description.json')

# Mode 2: Correlated Attribute Mode
describer.describe_dataset_in_correlated_attribute_mode(
    dataset_file=input_data,
    k=2,  # Maximum parent count in Bayesian network
    epsilon=0  # No differential privacy
)

# Mode 3: Private Mode (Differential Privacy)
describer.describe_dataset_in_correlated_attribute_mode(
    dataset_file=input_data,
    epsilon=1.0,  # Privacy budget
    k=2
)

# Step 2: Generate synthetic data
generator = DataGenerator()
generator.generate_dataset_in_correlated_attribute_mode(
    num_rows=1000,
    description_file='description.json'
)
generator.save_synthetic_data('synthetic_data.csv')
```

### Advanced Configuration

```python
# Custom attribute handling
describer = DataDescriber(
    category_threshold=15,  # Threshold for categorical detection
    histogram_bins=20,      # Number of bins for numerical attributes
    null_values=['NA', 'null', 'None']  # Custom null value indicators
)

# Specify attribute types manually
attribute_types = {
    'age': 'Integer',
    'diagnosis': 'String',
    'test_result': 'Float',
    'admission_date': 'DateTime'
}

describer.describe_dataset_in_correlated_attribute_mode(
    dataset_file=input_data,
    attribute_types=attribute_types,
    k=3,
    epsilon=0.5
)
```

## Performance

### Typical Metrics

Performance on healthcare datasets:
- **Statistical Similarity**: 0.75-0.85
- **Correlation Preservation**: 0.80-0.90
- **Privacy Guarantee**: ε-differential privacy (configurable)
- **Generation Time**: Seconds to minutes (depending on size)

### Mode Comparison

| Mode | Privacy | Utility | Speed | Use Case |
|------|---------|---------|-------|----------|
| Independent | Low | Low | Very Fast | Quick exploration |
| Correlated | Medium | High | Fast | General purpose |
| Private | High | Medium | Fast | Sensitive data |

## Best Practices

1. **Mode Selection**
   - Start with correlated mode for most use cases
   - Use private mode for sensitive health data
   - Independent mode only for initial testing

2. **Privacy Budget (ε)**
   - Lower ε = stronger privacy (typically 0.1-1.0)
   - Higher ε = better utility (typically 1.0-10.0)
   - Consider data sensitivity when choosing

3. **Bayesian Network Configuration**
   - k=2 or k=3 usually sufficient
   - Higher k captures more complex relationships
   - But increases computational cost and privacy risk

4. **Data Preprocessing**
   - Handle missing values appropriately
   - Consider binning continuous variables
   - Remove identifiers before synthesis

## Comparison with Other Methods

| Feature | DataSynthesizer | CTGAN | SDV |
|---------|-----------------|--------|-----|
| Approach | Statistical | Deep Learning | Multiple |
| Privacy | Built-in DP | Optional | Optional |
| Speed | Fast | Moderate | Varies |
| Dependencies | Minimal | Heavy | Moderate |
| Ease of Use | High | Moderate | High |

## Resources

- [Original Paper](https://arxiv.org/abs/1705.03442) - Ping et al. (2017)
- [GitHub Repository](https://github.com/DataResponsibly/DataSynthesizer)
- [Documentation](https://github.com/DataResponsibly/DataSynthesizer/tree/master/docs)
- [Tutorial Examples](https://github.com/DataResponsibly/DataSynthesizer/tree/master/examples)
- [Privacy Analysis](https://arxiv.org/abs/1705.03442) - Formal privacy proofs

## Citation

```bibtex
@inproceedings{ping2017datasynthesizer,
  title={DataSynthesizer: Privacy-preserving synthetic datasets},
  author={Ping, Haoyue and Stoyanovich, Julia and Howe, Bill},
  booktitle={Proceedings of the 29th International Conference on Scientific and Statistical Database Management},
  pages={1--5},
  year={2017}
}
```

## Related Tools

- [SDV](/ecosystem/open-source/sdv/) - Comprehensive synthetic data library
- [synthpop](/technical/algorithms/synthpop/) - R-based alternative
- [CTGAN](/technical/algorithms/ctgan/) - Deep learning approach
- [DP-SGD](/technical/algorithms/dp-sgd/) - Differential privacy for deep learning

---
*Last updated: July 2024*