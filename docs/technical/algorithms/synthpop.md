# Synthpop

## Overview

Synthpop is an R package for generating synthetic versions of microdata containing confidential information. Developed at the University of Edinburgh, it uses statistical models to create synthetic data that preserves the relationships and patterns in the original data while protecting privacy.

## Key Features

- **R-based**: Native R implementation with extensive documentation
- **Multiple synthesis methods**: Parametric, CART, Random Forest, and more
- **Sequential synthesis**: Preserves complex relationships between variables
- **Utility evaluation**: Built-in tools for assessing synthetic data quality
- **Privacy metrics**: Disclosure risk assessment tools

## Technical Details

### How It Works

Synthpop uses a sequential synthesis approach:

1. **Variable ordering**: Orders variables by missingness and correlation
2. **Sequential modeling**: Each variable is synthesised conditional on previous ones
3. **Multiple methods**: Different synthesis methods for different data types
4. **Iterative refinement**: Can generate multiple synthetic datasets

### Available Methods

- **Parametric**: Normal, logistic regression, polytomous regression
- **Non-parametric**: CART (Classification and Regression Trees)
- **Semi-parametric**: Predictive mean matching
- **Special methods**: For specific data types (dates, sequences, etc.)

### Architecture

```
Original Data → Variable Selection → Sequential Synthesis → Synthetic Data
                      ↓                     ↓                    ↓
                 Ordering           Method Selection        Validation
                 Missing Data       Model Fitting          Utility Metrics
                 Dependencies       Prediction             Privacy Checks
```

## When to Use

Synthpop is ideal for:
- R users comfortable with statistical programming
- Datasets with complex missing data patterns
- Need for interpretable synthesis methods
- Government and official statistics
- Teaching and demonstration purposes

## Limitations

- R-only (no Python interface)
- Less effective for very high-dimensional data
- Limited deep learning capabilities
- May struggle with complex temporal dependencies

## Implementation

### Installation

```r
# From CRAN
install.packages("synthpop")

# Development version
devtools::install_github("synthpop-dev/synthpop")
```

### Basic Example

```r
library(synthpop)

# Load example data
data(SD2011, package = "synthpop")

# Simple synthesis with defaults
synth_data <- syn(SD2011)

# View synthesis summary
summary(synth_data)

# Extract synthetic data
synthetic_df <- synth_data$syn
```

### Advanced Configuration

```r
# Specify synthesis methods for each variable
my_methods <- c(
  age = "norm",          # Normal distribution
  sex = "logreg",        # Logistic regression
  income = "cart",       # CART
  education = "polyreg"  # Polytomous regression
)

# Custom synthesis with specific methods
synth_custom <- syn(
  SD2011,
  method = my_methods,
  seed = 12345,
  m = 5  # Generate 5 synthetic datasets
)

# Control visit sequence
visit_sequence <- c("age", "sex", "education", "income")
synth_ordered <- syn(
  SD2011,
  visit.sequence = visit_sequence
)
```

### Privacy Controls

```r
# Add smoothing for additional privacy
synth_smooth <- syn(
  SD2011,
  smoothing = "density",  # Kernel density smoothing
  k = 5  # Minimum k observations for synthesis
)

# Exclude rare categories
synth_private <- syn(
  SD2011,
  rareaction = "exclude",  # Exclude rare values
  rareval = 10  # Threshold for rare
)
```

## Evaluation

### Utility Assessment

```r
# Compare univariate distributions
compare(synth_data, SD2011, vars = c("age", "income"))

# Multivariate comparisons
utility.tab(synth_data, SD2011, 
           tabs = c("age:sex", "income:education"))

# Regression comparison
lm_original <- lm(income ~ age + sex + education, data = SD2011)
lm_synthetic <- lm.synds(income ~ age + sex + education, data = synth_data)
compare(lm_synthetic, SD2011)
```

### Disclosure Risk

```r
# Calculate disclosure risk measures
disclosure <- disclosure(synth_data, SD2011)

# Replicated uniques
print(disclosure$repU)

# Identity disclosure risk
print(disclosure$TDID)
```

## Performance

### Typical Metrics

Performance on standard datasets:
- **Generation time**: Seconds to minutes (depending on size)
- **Utility preservation**: Generally 80-95% for main statistics
- **Privacy protection**: Configurable through parameters
- **Scalability**: Good for datasets up to ~100,000 records

### Method Comparison

| Method | Speed | Utility | Privacy | Use Case |
|--------|-------|---------|---------|----------|
| norm | Very Fast | Medium | Low | Continuous variables |
| cart | Fast | High | Medium | General purpose |
| rf | Slow | Very High | Low | Complex relationships |
| sample | Very Fast | Low | High | Categorical with many levels |

## Best Practices

1. **Data Preparation**
   ```r
   # Check variable types
   str(data)
   
   # Handle special values
   data <- recode(data, missings = list(income = c(0, 99999)))
   ```

2. **Method Selection**
   - Use CART for general purpose synthesis
   - Use parametric methods when assumptions hold
   - Combine methods based on variable types

3. **Validation**
   - Always compare distributions
   - Test key relationships
   - Check for attribute disclosure
   - Validate with domain experts

4. **Multiple Synthetic Datasets**
   ```r
   # Generate multiple for better inference
   synth_multi <- syn(data, m = 10)
   
   # Combine results properly
   results <- with(synth_multi, lm(y ~ x1 + x2))
   pool_results <- pool(results)
   ```

## Comparison with Other Methods

| Feature | Synthpop | CTGAN | DataSynthesizer |
|---------|----------|--------|-----------------|
| Language | R | Python | Python |
| Approach | Statistical | Deep Learning | Statistical/DP |
| Ease of use | High | Moderate | High |
| Speed | Fast | Slow | Fast |
| Interpretability | High | Low | Medium |

## Resources

- [Official Documentation](https://www.synthpop.org.uk/)
- [CRAN Package](https://cran.r-project.org/package=synthpop)
- [GitHub Repository](https://github.com/cran/synthpop)
- [Tutorial Vignettes](https://cran.r-project.org/web/packages/synthpop/vignettes/)
- [JSS Paper](https://www.jstatsoft.org/article/view/v074i11) - Software and implementation details

## Citation

```bibtex
@article{nowok2016synthpop,
  title={synthpop: Bespoke creation of synthetic data in R},
  author={Nowok, Beata and Raab, Gillian M and Dibben, Chris},
  journal={Journal of Statistical Software},
  volume={74},
  number={11},
  pages={1--26},
  year={2016}
}
```

## Related Tools

- [DataSynthesizer](datasynthesizer.md) - Privacy-focused alternative
- [simPop](https://cran.r-project.org/package=simPop) - R package for population synthesis
- [CTGAN](ctgan.md) - Deep learning approach

---
*Last updated: July 2024*