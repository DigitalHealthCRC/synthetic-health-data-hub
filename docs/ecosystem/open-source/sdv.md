# SDV (Synthetic Data Vault)

# SDV (Synthetic Data Vault)

The Synthetic Data Vault (SDV) is a Python library for generating synthetic data for tabular, relational, and time series data.

## Overview

<div class="tool-comparison-table">

| Feature | Details |
|---------|---------|
| **License** | MIT |
| **Language** | Python |
| **Maintainer** | DataCebo (MIT spin-off) |
| **Stars** | 2.1k+ |
| **First Release** | 2018 |
| **Latest Version** | 1.7.0 |

</div>

## Key Features

- **Multiple Data Types**: Supports single table, multi-table, and time series
- **Multiple Algorithms**: CTGAN, TVAE, Copulas, and more
- **Constraints**: Define business rules and relationships
- **Privacy Metrics**: Built-in privacy evaluation
- **Easy Integration**: Pandas-compatible interface

## Installation

```bash
pip install sdv
```

## Quick Start

```python
from sdv.datasets.demo import download_demo
from sdv.metadata import SingleTableMetadata
from sdv.single_table import GaussianCopulaSynthesizer

# Load demo data
data, metadata = download_demo(
    modality='single_table',
    dataset_name='fake_hotel_guests'
)

# Create synthesizer
synthesizer = GaussianCopulaSynthesizer(metadata)

# Fit the model
synthesizer.fit(data)

# Generate synthetic data
synthetic_data = synthesizer.sample(num_rows=1000)
```

## Supported Synthesizers

### Single Table
- **GaussianCopula**: Fast, good for numerical data
- **CTGAN**: Best quality, handles complex distributions
- **TVAE**: Faster than CTGAN, good quality
- **CopulaGAN**: Hybrid approach

### Multi-Table
- **HMA**: Hierarchical Modeling Algorithm
- **SDV-Relational**: Preserves referential integrity

### Time Series
- **PAR**: Probabilistic AutoRegressive model
- **TimeGAN**: GAN-based time series synthesis

## Evaluation Metrics

SDV includes comprehensive evaluation tools:

```python
from sdv.evaluation import evaluate_quality

# Evaluate synthetic data quality
quality_report = evaluate_quality(
    real_data,
    synthetic_data,
    metadata
)
```

## Integration with Healthcare Data

### FHIR Compatibility
```python
# Example: Synthetic patient records
from sdv.constraints import FixedCombinations

constraint = FixedCombinations(
    column_names=['diagnosis_code', 'procedure_code']
)
synthesizer.add_constraints([constraint])
```

### Privacy Guarantees
- Statistical similarity metrics
- Privacy risk assessment
- Differential privacy (experimental)

## Community & Support

- **Documentation**: [docs.sdv.dev](https://docs.sdv.dev)
- **GitHub**: [github.com/sdv-dev/SDV](https://github.com/sdv-dev/SDV)
- **Slack Community**: 500+ members
- **Enterprise Support**: Available through DataCebo

## Comparison with Other Tools

<div class="tool-comparison-table">

| Feature | SDV | Synthea | Gretel | DataSynthesizer |
|---------|-----|---------|--------|-----------------|
| Tabular Data | ✓ | ✗ | ✓ | ✓ |
| Relational Data | ✓ | ✗ | ✓ | ✗ |
| Time Series | ✓ | ✓ | ✓ | ✗ |
| Healthcare Focus | ✗ | ✓ | ✗ | ✗ |
| Cloud Native | ✗ | ✗ | ✓ | ✗ |

</div>

## Recent Updates

- **v1.7.0** (Jan 2024): Improved constraint handling
- **v1.6.0** (Dec 2023): New privacy metrics
- **v1.5.0** (Nov 2023): Performance optimizations

## Resources

- [The Synthetic Data Vault](https://sdv.dev/)
- [Documentation](https://docs.sdv.dev/sdv)
- [Example Notebooks & Demos](https://docs.sdv.dev/sdv/tutorials)