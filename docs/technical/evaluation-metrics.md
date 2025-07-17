# Evaluation Metrics

# Evaluation Metrics for Synthetic Health Data

## Overview

Evaluating synthetic health data quality is crucial for ensuring the generated data is both useful and safe. This comprehensive guide covers the key metrics and methods used to assess synthetic data across three critical dimensions: utility, privacy, and fidelity.

## Core Evaluation Dimensions

### 1. Utility Metrics
Measure how well synthetic data preserves the statistical properties and usefulness of the original data.

### 2. Privacy Metrics
Assess the risk of revealing sensitive information about individuals in the original dataset.

### 3. Fidelity Metrics
Evaluate how closely synthetic data resembles real data at various levels of granularity.

## Utility Metrics

### Statistical Similarity

#### Univariate Statistics
Compare distributions of individual columns:
```python
# Kolmogorov-Smirnov Test
from scipy.stats import ks_2samp

def compare_distributions(real_col, synth_col):
    statistic, p_value = ks_2samp(real_col, synth_col)
    return p_value > 0.05  # Similar if p > 0.05
```

**Metrics:**
- Mean Absolute Error (MAE)
- Standard deviation comparison
- Skewness and kurtosis differences
- Quantile-quantile (Q-Q) plots

#### Multivariate Statistics
Assess relationships between columns:
```python
# Correlation matrix comparison
import numpy as np

def correlation_similarity(real_df, synth_df):
    real_corr = real_df.corr()
    synth_corr = synth_df.corr()
    
    # Frobenius norm of difference
    diff = np.linalg.norm(real_corr - synth_corr, 'fro')
    return diff
```

**Metrics:**
- Correlation matrix difference
- Covariance matrix comparison
- Mutual information preservation
- Principal Component Analysis (PCA) similarity

### Machine Learning Efficacy

#### Train on Synthetic, Test on Real (TSTR)
```python
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

def tstr_score(real_train, real_test, synth_train, target_col):
    # Train on synthetic
    model = RandomForestClassifier()
    model.fit(synth_train.drop(target_col, axis=1), 
              synth_train[target_col])
    
    # Test on real
    predictions = model.predict(real_test.drop(target_col, axis=1))
    return accuracy_score(real_test[target_col], predictions)
```

#### Train on Real, Test on Synthetic (TRTS)
Complementary approach to validate synthetic data patterns.

### Domain-Specific Utility

#### Clinical Validity
For healthcare data specifically:
- **Diagnostic code co-occurrence**: Preserve disease comorbidities
- **Temporal patterns**: Maintain progression sequences
- **Clinical ranges**: Ensure values within medically plausible ranges

```python
def check_clinical_validity(synth_data):
    validity_checks = {
        'heart_rate': (40, 200),
        'systolic_bp': (70, 200),
        'age': (0, 120),
        'bmi': (10, 70)
    }
    
    for col, (min_val, max_val) in validity_checks.items():
        if col in synth_data.columns:
            out_of_range = (synth_data[col] < min_val) | (synth_data[col] > max_val)
            if out_of_range.any():
                print(f"Warning: {col} has {out_of_range.sum()} out-of-range values")
```

## Privacy Metrics

### Re-identification Risk

#### Nearest Neighbor Distance
```python
from sklearn.neighbors import NearestNeighbors

def nearest_neighbor_distance(real_data, synth_data):
    # Fit on real data
    nn = NearestNeighbors(n_neighbors=1)
    nn.fit(real_data)
    
    # Find distances to nearest real record for each synthetic record
    distances, indices = nn.kneighbors(synth_data)
    
    # Higher average distance = better privacy
    return distances.mean()
```

#### Membership Inference Attack
Test if an attacker can determine if a record was in the training data:
```python
def membership_inference_risk(model, real_train, real_holdout, synth_data):
    # Train shadow models to distinguish train vs non-train
    # Return attack success rate (lower is better)
    pass
```

### Differential Privacy Metrics

#### Epsilon (ε) Budget
- Formal privacy guarantee
- Lower ε = stronger privacy
- Typical healthcare range: 0.1 - 2.0

#### Delta (δ) Parameter
- Probability of privacy failure
- Usually set very small (e.g., 1e-5)

### Attribute Disclosure Risk

```python
def attribute_disclosure_risk(real_data, synth_data, 
                            quasi_identifiers, sensitive_attr):
    # Group by quasi-identifiers
    real_groups = real_data.groupby(quasi_identifiers)[sensitive_attr]
    synth_groups = synth_data.groupby(quasi_identifiers)[sensitive_attr]
    
    # Calculate disclosure risk for each group
    risks = []
    for group_key in real_groups.groups:
        if group_key in synth_groups.groups:
            real_values = set(real_groups.get_group(group_key))
            synth_values = set(synth_groups.get_group(group_key))
            
            # Risk = probability of correct guess
            risk = len(real_values & synth_values) / len(real_values)
            risks.append(risk)
    
    return np.mean(risks)
```

## Fidelity Metrics

### Record-Level Fidelity

#### Propensity Score
Distinguish real from synthetic records:
```python
from sklearn.ensemble import RandomForestClassifier

def propensity_score(real_data, synth_data):
    # Label real as 1, synthetic as 0
    real_data['is_real'] = 1
    synth_data['is_real'] = 0
    
    combined = pd.concat([real_data, synth_data])
    
    # Train classifier
    X = combined.drop('is_real', axis=1)
    y = combined['is_real']
    
    model = RandomForestClassifier()
    scores = cross_val_score(model, X, y, cv=5, scoring='roc_auc')
    
    # Score close to 0.5 = good (indistinguishable)
    return scores.mean()
```

### Column-Level Fidelity

#### Jensen-Shannon Divergence
```python
from scipy.spatial.distance import jensenshannon

def js_divergence(real_col, synth_col, bins=50):
    # Create histograms
    real_hist, edges = np.histogram(real_col, bins=bins, density=True)
    synth_hist, _ = np.histogram(synth_col, bins=edges, density=True)
    
    # Normalize
    real_hist = real_hist / real_hist.sum()
    synth_hist = synth_hist / synth_hist.sum()
    
    # Calculate JS divergence (0 = identical, 1 = completely different)
    return jensenshannon(real_hist, synth_hist)
```

### Dataset-Level Fidelity

#### Maximum Mean Discrepancy (MMD)
```python
def mmd_score(real_data, synth_data, kernel='rbf'):
    # Measures difference between distributions
    # Lower = more similar
    pass
```

## Evaluation Framework

### Comprehensive Evaluation Pipeline

```python
class SyntheticDataEvaluator:
    def __init__(self, real_data, synth_data, 
                 sensitive_columns=None,
                 quasi_identifiers=None):
        self.real_data = real_data
        self.synth_data = synth_data
        self.sensitive_columns = sensitive_columns or []
        self.quasi_identifiers = quasi_identifiers or []
        
    def evaluate_all(self):
        results = {
            'utility': self.evaluate_utility(),
            'privacy': self.evaluate_privacy(),
            'fidelity': self.evaluate_fidelity()
        }
        return results
    
    def evaluate_utility(self):
        return {
            'statistical_similarity': self.statistical_similarity(),
            'ml_efficacy': self.ml_efficacy(),
            'clinical_validity': self.clinical_validity()
        }
    
    def evaluate_privacy(self):
        return {
            'nn_distance': self.nearest_neighbor_distance(),
            'attribute_disclosure': self.attribute_disclosure_risk(),
            'reidentification_risk': self.reidentification_risk()
        }
    
    def evaluate_fidelity(self):
        return {
            'propensity_score': self.propensity_score(),
            'js_divergence': self.column_divergences(),
            'correlation_diff': self.correlation_difference()
        }
```

## Metric Selection Guide

### By Use Case

| Use Case | Primary Metrics | Secondary Metrics |
|----------|----------------|-------------------|
| Research | Statistical similarity, ML efficacy | Clinical validity |
| Data Sharing | Privacy metrics, Re-identification risk | Utility preservation |
| Model Development | ML efficacy, Feature distributions | Correlation preservation |
| Regulatory Compliance | Differential privacy, Disclosure risk | Documentation |

### By Data Sensitivity

| Sensitivity Level | Required Privacy Metrics | Acceptable Utility Loss |
|-------------------|-------------------------|------------------------|
| Public | Basic anonymization | < 5% |
| Moderate | k-anonymity ≥ 5 | < 10% |
| Sensitive | ε-DP with ε ≤ 2.0 | < 20% |
| Highly Sensitive | ε-DP with ε ≤ 0.5 | < 30% |

## Best Practices

1. **Multi-Metric Evaluation**
   - Never rely on a single metric
   - Balance utility and privacy
   - Consider domain-specific requirements

2. **Baseline Comparisons**
   - Random data baseline
   - Simple sampling methods
   - Previous synthetic data versions

3. **Iterative Improvement**
   - Start with utility metrics
   - Add privacy constraints
   - Fine-tune parameters

4. **Documentation**
   - Record all metrics used
   - Justify metric choices
   - Track improvements over time

## Tools and Libraries

### SDV Metrics
```python
from sdv.evaluation.single_table import evaluate_quality, evaluate_privacy

quality_report = evaluate_quality(real_data, synthetic_data, metadata)
privacy_report = evaluate_privacy(real_data, synthetic_data, metadata)
```

### Synthcity
```python
from synthcity.metrics import Metrics

evaluator = Metrics()
results = evaluator.evaluate(
    X_real=real_data,
    X_syn=synthetic_data,
    metrics=['detection', 'privacy', 'stats']
)
```

### Custom Implementation
See examples throughout this guide for implementing specific metrics.

## References

1. [Synthetic Data Evaluation Survey](https://arxiv.org/abs/2109.12717) - Comprehensive overview
2. [SDMetrics Documentation](https://docs.sdv.dev/sdmetrics/) - Practical implementation
3. [Privacy Metrics for Synthetic Data](https://arxiv.org/abs/2103.14455) - Privacy focus
4. [Clinical Validity Assessment](https://www.nature.com/articles/s41746-021-00549-7) - Healthcare specific

---
*Last updated: July 2024*