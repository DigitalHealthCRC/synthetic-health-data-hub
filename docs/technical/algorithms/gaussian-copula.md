# Gaussian Copula

## Overview

The Gaussian Copula is a statistical method for modeling multivariate distributions by separating marginal distributions from their dependence structure. In synthetic data generation, it's particularly effective for capturing complex relationships between variables while maintaining individual variable distributions.

## Key Features

- **Mathematical foundation**: Based on copula theory from probability
- **Flexibility**: Handles mixed data types (continuous, discrete, categorical)
- **Correlation preservation**: Maintains complex dependency structures
- **Fast generation**: Computationally efficient compared to deep learning
- **Interpretability**: Clear statistical interpretation

## Technical Details

### How It Works

The Gaussian Copula method works in three main steps:

1. **Marginal fitting**: Fit distributions to each variable independently
2. **Correlation extraction**: Transform data to normal and compute correlations
3. **Synthesis**: Sample from multivariate normal and transform back

### Mathematical Foundation

```
For variables X₁, X₂, ..., Xₙ:
1. Transform each Xᵢ to uniform: Uᵢ = Fᵢ(Xᵢ)
2. Transform to normal: Zᵢ = Φ⁻¹(Uᵢ)
3. Compute correlation matrix Σ of Z
4. Sample Z* from N(0, Σ)
5. Transform back: X*ᵢ = Fᵢ⁻¹(Φ(Z*ᵢ))
```

### Architecture

```
Original Data → Marginal Distributions → Copula Transform → Correlation Matrix
                       ↓                        ↓                    ↓
                  Fit CDFs              Normal Transform      Covariance
                       ↓                        ↓                    ↓
Synthetic Data ← Inverse Transform ← Sample Normal ← Multivariate Normal
```

## When to Use

Gaussian Copula is ideal for:
- Datasets with complex correlations but known marginals
- Mixed data types (continuous and discrete)
- Need for fast synthetic data generation
- Financial and insurance applications
- When interpretability is important

## Limitations

- Assumes Gaussian dependence structure
- May not capture tail dependencies well
- Less effective for highly non-linear relationships
- Cannot model conditional dependencies directly

## Implementation

### Using SDV (Python)

```python
from sdv.single_table import GaussianCopulaSynthesizer
import pandas as pd

# Load your data
data = pd.read_csv('health_records.csv')

# Create and train synthesizer
synthesizer = GaussianCopulaSynthesizer()
synthesizer.fit(data)

# Generate synthetic data
synthetic_data = synthesizer.sample(num_rows=1000)
```

### Advanced Configuration

```python
from sdv.single_table import GaussianCopulaSynthesizer
from sdv.metadata import SingleTableMetadata

# Define metadata
metadata = SingleTableMetadata()
metadata.detect_from_dataframe(data)

# Configure specific columns
metadata.update_column(
    column_name='age',
    sdtype='numerical',
    computer_representation='Int64'
)

# Create synthesizer with custom settings
synthesizer = GaussianCopulaSynthesizer(
    metadata=metadata,
    enforce_min_max_values=True,
    default_distribution='gaussian_kde'  # or 'uniform', 'truncnorm'
)

# Fit with constraints
synthesizer.fit(data)
```

### Using Copulas Library

```python
from copulas.multivariate import GaussianMultivariate
import pandas as pd

# Direct copula usage
copula = GaussianMultivariate()
copula.fit(data)

# Sample synthetic data
synthetic = copula.sample(1000)

# Get fitted parameters
params = copula.to_dict()
```

### R Implementation

```r
library(copula)
library(VineCopula)

# Fit marginals and copula
margins <- apply(data, 2, function(x) fitdistr(x, "normal"))
u <- pobs(data)  # Pseudo-observations
cop <- normalCopula(dim = ncol(data))
fit <- fitCopula(cop, u)

# Generate synthetic data
u_syn <- rCopula(1000, fit@copula)
synthetic <- qnorm(u_syn, 
                  mean = sapply(margins, function(m) m$estimate[1]),
                  sd = sapply(margins, function(m) m$estimate[2]))
```

## Handling Different Data Types

### Continuous Variables

```python
# Automatic handling in SDV
metadata.update_column(
    column_name='blood_pressure',
    sdtype='numerical',
    computer_representation='Float'
)
```

### Categorical Variables

```python
# Categorical encoding
metadata.update_column(
    column_name='diagnosis',
    sdtype='categorical'
)
```

### Mixed Types Example

```python
# Healthcare dataset with mixed types
data = pd.DataFrame({
    'age': [25, 30, 45, 50, 65],  # Continuous
    'gender': ['M', 'F', 'M', 'F', 'M'],  # Categorical
    'bp_systolic': [120, 110, 140, 130, 150],  # Continuous
    'diagnosis': ['A', 'B', 'A', 'C', 'B']  # Categorical
})

synthesizer = GaussianCopulaSynthesizer()
synthesizer.fit(data)
synthetic = synthesizer.sample(1000)
```

## Performance

### Typical Metrics

Performance characteristics:
- **Speed**: Very fast (seconds for most datasets)
- **Memory**: Linear with data size
- **Scalability**: Good up to millions of records
- **Accuracy**: 85-95% correlation preservation

### Benchmark Results

| Dataset Size | Generation Time | Memory Usage | Correlation Fidelity |
|--------------|----------------|--------------|---------------------|
| 10K rows | <1 second | 50 MB | 0.95 |
| 100K rows | 3-5 seconds | 500 MB | 0.93 |
| 1M rows | 30-60 seconds | 5 GB | 0.91 |

## Best Practices

1. **Data Preprocessing**
   ```python
   # Handle missing values appropriately
   data = data.fillna(data.median())
   
   # Check for constant columns
   constant_cols = [col for col in data.columns if data[col].nunique() == 1]
   data = data.drop(columns=constant_cols)
   ```

2. **Distribution Selection**
   - Use kernel density estimation for complex distributions
   - Parametric distributions for known forms
   - Uniform for bounded variables

3. **Validation**
   ```python
   from sdv.evaluation.single_table import evaluate_quality
   
   quality_report = evaluate_quality(
       real_data=data,
       synthetic_data=synthetic_data,
       metadata=metadata
   )
   ```

4. **Handling Constraints**
   ```python
   from sdv.constraints import FixedCombinations
   
   constraint = FixedCombinations(
       column_names=['diagnosis', 'treatment']
   )
   synthesizer.add_constraints([constraint])
   ```

## Comparison with Other Methods

| Feature | Gaussian Copula | CTGAN | TVAE |
|---------|----------------|--------|------|
| Speed | Very Fast | Slow | Moderate |
| Theory | Statistical | Deep Learning | Deep Learning |
| Interpretability | High | Low | Low |
| Non-linear relations | Limited | Excellent | Good |
| Training stability | Excellent | Variable | Good |

## Resources

- [Copula Theory Introduction](https://en.wikipedia.org/wiki/Copula_(probability_theory))
- [SDV Gaussian Copula Docs](https://docs.sdv.dev/sdv/single-table-data/modeling/synthesizers/gaussiancopulasynthesizer)
- [Python Copulas Library](https://github.com/sdv-dev/Copulas)
- [R Copula Package](https://cran.r-project.org/package=copula)

## Citation

```bibtex
@article{nelsen2006introduction,
  title={An introduction to copulas},
  author={Nelsen, Roger B},
  journal={Springer series in statistics},
  year={2006},
  publisher={Springer}
}

@inproceedings{patki2016synthetic,
  title={The synthetic data vault},
  author={Patki, Neha and Wedge, Roy and Veeramachaneni, Kalyan},
  booktitle={2016 IEEE International Conference on Data Science and Advanced Analytics},
  pages={399--410},
  year={2016}
}
```

## Related Methods

- [TVAE](tvae.md) - VAE-based alternative
- [CTGAN](ctgan.md) - GAN-based approach
- [Synthpop](synthpop.md) - R-based statistical synthesis
- [Vine Copulas](https://vinecopulib.github.io/) - More flexible copula structures

---
*Last updated: July 2024*