# SDV: Synthetic Data Vault Overview

## Overview

The Synthetic Data Vault (SDV) is a comprehensive Python ecosystem for synthetic data generation. Rather than a single algorithm, SDV provides a unified framework that includes multiple state-of-the-art algorithms and tools for generating synthetic versions of tabular, relational, and time series data.

## Key Components

### 1. Single Table Synthesis
- **GaussianCopula**: Statistical method using copulas
- **CTGAN**: Conditional GAN for complex distributions
- **TVAE**: Variational autoencoder for tabular data
- **CopulaGAN**: Hybrid statistical-deep learning approach

### 2. Multi-Table Synthesis
- **HMA1**: Hierarchical Modeling Algorithm
- **PAR**: Sequential data synthesis
- **Independent**: Table-by-table generation

### 3. Time Series Synthesis
- **PARSynthesizer**: Probabilistic AutoRegressive model
- **TimeGAN**: GAN-based time series generation

## Architecture Overview

```
SDV Ecosystem
├── Metadata System
│   ├── SingleTableMetadata
│   ├── MultiTableMetadata
│   └── Constraints & Relationships
├── Synthesizers
│   ├── Single Table (GaussianCopula, CTGAN, TVAE, CopulaGAN)
│   ├── Multi Table (HMA1, Independent)
│   └── Time Series (PAR)
├── Evaluation Framework
│   ├── Quality Report
│   ├── Diagnostic Report
│   └── Privacy Metrics
└── Utilities
    ├── Constraints
    ├── Transformers
    └── Sampling
```

## When to Use SDV

SDV is ideal when you need:
- **Flexibility**: Multiple algorithms to choose from
- **Complex Data**: Support for relational and time series data
- **Production Ready**: Well-tested, maintained library
- **Constraints**: Business rules and referential integrity
- **Evaluation**: Built-in quality and privacy metrics

## Core Concepts

### 1. Metadata
SDV uses metadata to understand your data structure:
```python
from sdv.metadata import SingleTableMetadata

metadata = SingleTableMetadata()
metadata.detect_from_dataframe(data)
metadata.update_column(
    column_name='patient_id',
    sdtype='id'
)
metadata.set_primary_key('patient_id')
```

### 2. Constraints
Enforce business rules in synthetic data:
```python
from sdv.constraints import FixedCombinations, Inequality

# Ensure age groups match diagnosis patterns
age_diagnosis = FixedCombinations(
    column_names=['age_group', 'diagnosis_category']
)

# Ensure admission < discharge
date_constraint = Inequality(
    low_column_name='admission_date',
    high_column_name='discharge_date'
)
```

### 3. Synthesizers
Choose the right algorithm for your needs:
```python
# Statistical approach (fast, good quality)
from sdv.single_table import GaussianCopulaSynthesizer

# Deep learning (best quality, slower)
from sdv.single_table import CTGANSynthesizer

# Balanced approach
from sdv.single_table import TVAESynthesizer
```

## Algorithm Selection Guide

### Single Table Data

| Use Case | Recommended Algorithm | Why |
|----------|---------------------|-----|
| Quick prototype | GaussianCopula | Fast, decent quality |
| Complex distributions | CTGAN | Handles multi-modal data |
| Balanced needs | TVAE | Good quality, faster than CTGAN |
| Privacy focus | CopulaGAN | Better privacy properties |

### Multi-Table Data

| Scenario | Algorithm | Key Feature |
|----------|-----------|-------------|
| Parent-child relationships | HMA1 | Maintains referential integrity |
| Independent tables | Independent | Simple, fast |
| Complex schemas | HMA1 + constraints | Full relationship modeling |

### Time Series

| Data Type | Algorithm | Strength |
|-----------|-----------|----------|
| Regular intervals | PAR | Captures temporal patterns |
| Irregular/complex | TimeGAN | Handles complex dynamics |

## Implementation Examples

### Basic Single Table
```python
from sdv.single_table import GaussianCopulaSynthesizer
from sdv.metadata import SingleTableMetadata

# Load and prepare metadata
metadata = SingleTableMetadata()
metadata.detect_from_dataframe(data)

# Create and train synthesizer
synthesizer = GaussianCopulaSynthesizer(metadata)
synthesizer.fit(data)

# Generate synthetic data
synthetic_data = synthesizer.sample(num_rows=1000)
```

### Multi-Table with Relationships
```python
from sdv.multi_table import HMA1Synthesizer
from sdv.metadata import MultiTableMetadata

# Define metadata with relationships
metadata = MultiTableMetadata()
metadata.detect_from_dataframes(
    data={'patients': patients_df, 'visits': visits_df}
)
metadata.update_relationship(
    parent_table_name='patients',
    child_table_name='visits',
    parent_primary_key='patient_id',
    child_foreign_key='patient_id'
)

# Train and generate
synthesizer = HMA1Synthesizer(metadata)
synthesizer.fit(data)
synthetic_data = synthesizer.sample(scale=1.5)
```

### With Privacy Guarantees
```python
# Add differential privacy
synthesizer = CTGANSynthesizer(
    metadata,
    epsilon=1.0  # Differential privacy parameter
)
```

## Evaluation Framework

### Quality Metrics
```python
from sdv.evaluation.single_table import evaluate_quality

quality_report = evaluate_quality(
    real_data,
    synthetic_data,
    metadata
)
# Returns scores for:
# - Column Shapes
# - Column Pair Trends
# - Overall Quality Score
```

### Privacy Assessment
```python
from sdv.evaluation.single_table import evaluate_privacy

privacy_report = evaluate_privacy(
    real_data,
    synthetic_data,
    metadata,
    model=synthesizer
)
```

## Best Practices

1. **Start Simple**
   - Begin with GaussianCopula
   - Move to CTGAN/TVAE if quality insufficient
   - Add constraints incrementally

2. **Metadata is Key**
   - Properly define column types
   - Specify primary/foreign keys
   - Document constraints

3. **Iterative Refinement**
   - Generate small samples first
   - Evaluate quality metrics
   - Adjust parameters based on results

4. **Production Deployment**
   - Save trained models
   - Version control metadata
   - Monitor generation quality

## Resources

- [Official Documentation](https://docs.sdv.dev/)
- [GitHub Repository](https://github.com/sdv-dev/SDV)
- [Research Papers](https://github.com/sdv-dev/SDV#citing-sdv)
- [Community Discussions](https://github.com/sdv-dev/SDV/discussions)
- [SDV Blog](https://sdv.dev/blog)

## Related Pages

- [CTGAN Details](ctgan.md)
- [TVAE Details](tvae.md)
- [Evaluation Metrics](../evaluation-metrics.md)
- [SDV Tool Page](../../ecosystem/open-source/sdv.md)

---
*Last updated: July 2024*