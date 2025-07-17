---
layout: default
title: SDV (Synthetic Data Vault)
permalink: /ecosystem/open-source/sdv/
---

# SDV: Synthetic Data Vault

## Overview

The Synthetic Data Vault (SDV) is a comprehensive Python library for synthetic data generation. It provides multiple algorithms and a unified API for generating synthetic versions of tabular, relational, and time series data.

## Features

### Core Capabilities
- **Multiple Data Types**: Single table, multi-table, and time series
- **Algorithm Selection**: CTGAN, TVAE, Copula, and more
- **Metadata Management**: Automatic schema detection
- **Constraints**: Business rules and relationships
- **Privacy Controls**: Built-in privacy metrics

### Supported Algorithms
- **CTGAN**: Deep learning for complex distributions
- **TVAE**: Variational autoencoder approach
- **GaussianCopula**: Statistical correlation preservation
- **CopulaGAN**: Hybrid statistical-deep learning

## Installation

```bash
pip install sdv
```

For healthcare-specific features:
```bash
pip install sdv[healthcare]
```

## Quick Start

```python
from sdv.single_table import GaussianCopulaSynthesizer
from sdv.metadata import SingleTableMetadata
import pandas as pd

# Load your data
data = pd.read_csv('patient_data.csv')

# Create metadata
metadata = SingleTableMetadata()
metadata.detect_from_dataframe(data)

# Initialize synthesizer
synthesizer = GaussianCopulaSynthesizer(metadata)

# Fit the model
synthesizer.fit(data)

# Generate synthetic data
synthetic_data = synthesizer.sample(num_rows=1000)
```

## Healthcare Applications

### Common Use Cases
1. **Patient Record Generation**: Create realistic EHR data
2. **Clinical Trial Simulation**: Generate trial populations
3. **Research Data Sharing**: Privacy-preserving datasets
4. **ML Model Development**: Training data augmentation

### Example: Healthcare Data

```python
# Define healthcare-specific constraints
from sdv.constraints import FixedCombinations

# Age and diagnosis code relationships
age_diagnosis_constraint = FixedCombinations(
    column_names=['age_group', 'diagnosis_code']
)

synthesizer.add_constraints([age_diagnosis_constraint])
```

## Evaluation Tools

SDV includes comprehensive evaluation metrics:
- **Quality Report**: Statistical similarity assessment
- **Diagnostic Report**: Detailed column analysis
- **Privacy Metrics**: Re-identification risk

## Integration

### With ML Pipelines
```python
# Use with scikit-learn
from sklearn.model_selection import train_test_split

synthetic_data = synthesizer.sample(num_rows=10000)
X_train, X_test, y_train, y_test = train_test_split(
    synthetic_data.drop('outcome', axis=1),
    synthetic_data['outcome']
)
```

### With Data Platforms
- **Apache Spark**: Distributed generation
- **Dask**: Parallel processing
- **Ray**: Scalable workflows

## Community & Support

- **GitHub**: [github.com/sdv-dev/SDV](https://github.com/sdv-dev/SDV)
- **Documentation**: [docs.sdv.dev](https://docs.sdv.dev)
- **Slack Community**: Active user community
- **Office Hours**: Weekly support sessions

## Limitations & Considerations

1. **Scalability**: Performance on very large datasets
2. **Complex Relationships**: Limited support for highly complex schemas
3. **Streaming Data**: Batch processing only
4. **GPU Support**: Limited GPU acceleration

## Version Information

- **Current Version**: 1.9.0
- **Python Support**: 3.8+
- **License**: MIT