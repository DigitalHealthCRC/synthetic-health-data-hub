# TimeGAN

## Overview

TimeGAN (Time-series Generative Adversarial Networks) is a framework for generating realistic time-series data that preserves temporal dynamics. Developed by researchers at UCLA and Google, it combines the flexibility of GANs with a learned embedding space specifically designed for temporal data.

## Key Features

- **Temporal dynamics**: Explicitly models time dependencies
- **Flexible architecture**: Handles various time-series types
- **Unsupervised learning**: No need for paired data
- **Embedding space**: Learns meaningful temporal representations
- **Adversarial + supervised**: Combines multiple training objectives

## Technical Details

### How It Works

TimeGAN introduces a novel framework with four components:

1. **Embedding Function**: Maps features to latent representations
2. **Recovery Function**: Reconstructs features from latent space
3. **Sequence Generator**: Generates synthetic sequences in latent space
4. **Sequence Discriminator**: Distinguishes real from synthetic sequences

### Architecture

```
Original Time Series → Embedding → Latent Space → Recovery → Reconstructed
                          ↓            ↓              ↑
                    Discriminator  Generator    Synthetic Latent
                          ↓            ↓              ↑
                    Real/Fake    Random Noise   Generated Series
```

### Training Process

TimeGAN uses a stepwise training approach:

1. **Embedding Network Training**: Learn reversible mapping to latent space
2. **Supervised Loss**: Train generator on real sequence transitions
3. **Joint Training**: Combine adversarial and supervised objectives

### Loss Functions

```python
# Reconstruction Loss
L_R = ||X - Recovery(Embedding(X))||²

# Supervised Loss
L_S = ||Embedding(X_{t+1}) - Generator(Embedding(X_t))||²

# Adversarial Loss
L_U = E[log D(Embedding(X))] + E[log(1 - D(Generator(Z)))]

# Total Loss
L_total = L_R + λ₁L_S + λ₂L_U
```

## When to Use

TimeGAN is ideal for:
- Complex time-series with long-term dependencies
- Multivariate temporal data
- Healthcare monitoring data (ECG, vital signs)
- Financial time series
- Irregular sampling intervals
- When preserving temporal correlations is critical

## Limitations

- Computationally intensive training
- Requires careful hyperparameter tuning
- May struggle with very long sequences
- Limited to continuous-valued time series
- Requires substantial training data

## Implementation

### Basic Usage

```python
from ydata_synthetic.synthesizers.timeseries import TimeGAN
import pandas as pd
import numpy as np

# Prepare your time series data
# Shape: (n_samples, n_timesteps, n_features)
data = np.random.randn(1000, 24, 5)  # Example: 1000 samples, 24 timesteps, 5 features

# Create and train TimeGAN
synth = TimeGAN(
    n_steps=24,
    n_features=5,
    hidden_dim=24,
    gamma=1,
    noise_dim=32,
    dim=128,
    batch_size=128,
    log_step=100,
    learning_rate=5e-4
)

# Train the model
synth.train(data, train_steps=5000)

# Generate synthetic data
synthetic_data = synth.sample(n_samples=1000)
```

### Healthcare Example

```python
# Example: Generating synthetic patient vital signs
import pandas as pd
import numpy as np

# Load patient monitoring data
# Columns: heart_rate, blood_pressure, temperature, respiratory_rate, oxygen_saturation
vitals_data = pd.read_csv('patient_vitals.csv')

# Reshape for TimeGAN (assuming hourly readings for 48 hours)
n_patients = len(vitals_data) // 48
n_features = 5
data = vitals_data.values.reshape(n_patients, 48, n_features)

# Configure TimeGAN for medical data
medical_gan = TimeGAN(
    n_steps=48,
    n_features=n_features,
    hidden_dim=48,
    gamma=1,
    noise_dim=32,
    dim=256,
    batch_size=64,
    log_step=50,
    learning_rate=1e-4,
    beta_1=0.5,
    beta_2=0.999
)

# Train with early stopping
medical_gan.train(
    data, 
    train_steps=10000,
    early_stopping_patience=500
)

# Generate synthetic patient data
synthetic_vitals = medical_gan.sample(n_samples=500)
```

### Advanced Configuration

```python
# Custom architecture
class CustomTimeGAN(TimeGAN):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        
    def build_embedder(self):
        # Custom embedding network
        return tf.keras.Sequential([
            tf.keras.layers.LSTM(self.hidden_dim, return_sequences=True),
            tf.keras.layers.LSTM(self.hidden_dim, return_sequences=True),
            tf.keras.layers.Dense(self.dim, activation='sigmoid')
        ])
    
    def build_generator(self):
        # Custom generator network
        return tf.keras.Sequential([
            tf.keras.layers.LSTM(self.dim, return_sequences=True),
            tf.keras.layers.LSTM(self.dim, return_sequences=True),
            tf.keras.layers.Dense(self.n_features)
        ])
```

### Handling Variable Length Sequences

```python
# Padding sequences to same length
from tensorflow.keras.preprocessing.sequence import pad_sequences

sequences = [seq1, seq2, seq3]  # Variable length sequences
padded = pad_sequences(sequences, padding='post', dtype='float32')

# Masking for variable lengths
mask = tf.keras.layers.Masking(mask_value=0.0)
```

## Evaluation

### Temporal Metrics

```python
# Discriminative score
def discriminative_score(real_data, synthetic_data):
    """Train classifier to distinguish real vs synthetic"""
    from sklearn.ensemble import RandomForestClassifier
    
    X = np.vstack([real_data.reshape(-1, real_data.shape[-1]), 
                   synthetic_data.reshape(-1, synthetic_data.shape[-1])])
    y = np.hstack([np.ones(len(real_data)), np.zeros(len(synthetic_data))])
    
    clf = RandomForestClassifier()
    scores = cross_val_score(clf, X, y, cv=5)
    return np.abs(0.5 - scores.mean())  # Best score is 0

# Predictive score
def predictive_score(real_data, synthetic_data):
    """Test if synthetic data preserves temporal relationships"""
    # Train on synthetic, test on real
    model = train_predictor(synthetic_data)
    score = evaluate_predictor(model, real_data)
    return score
```

### Visual Inspection

```python
import matplotlib.pyplot as plt

# Compare distributions
fig, axes = plt.subplots(2, 2, figsize=(12, 8))

# Original data
axes[0, 0].plot(real_data[0, :, 0])
axes[0, 0].set_title('Real Time Series (Sample 1)')

# Synthetic data
axes[0, 1].plot(synthetic_data[0, :, 0])
axes[0, 1].set_title('Synthetic Time Series (Sample 1)')

# PCA visualization
from sklearn.decomposition import PCA
pca = PCA(n_components=2)

real_pca = pca.fit_transform(real_data.reshape(-1, n_features))
synth_pca = pca.transform(synthetic_data.reshape(-1, n_features))

axes[1, 0].scatter(real_pca[:, 0], real_pca[:, 1], alpha=0.5, label='Real')
axes[1, 0].scatter(synth_pca[:, 0], synth_pca[:, 1], alpha=0.5, label='Synthetic')
axes[1, 0].legend()
```

## Performance

### Typical Metrics

Performance characteristics:
- **Training time**: Hours to days (GPU recommended)
- **Generation speed**: Real-time after training
- **Memory usage**: Scales with sequence length
- **Quality**: State-of-the-art for temporal data

### Comparison Results

| Metric | TimeGAN | RCGAN | C-RNN-GAN | VAE |
|--------|---------|--------|-----------|-----|
| Discriminative | 0.05 | 0.15 | 0.12 | 0.20 |
| Predictive | 0.08 | 0.18 | 0.14 | 0.22 |
| Training Time | Slow | Moderate | Fast | Fast |

## Best Practices

1. **Data Preprocessing**
   - Normalize features to similar scales
   - Handle missing values appropriately
   - Consider differencing for non-stationary series

2. **Architecture Selection**
   - Use LSTM for long-term dependencies
   - GRU for faster training
   - Adjust hidden dimensions based on complexity

3. **Training Tips**
   - Start with supervised loss only
   - Gradually introduce adversarial loss
   - Monitor mode collapse
   - Use gradient clipping

4. **Hyperparameter Tuning**
   ```python
   # Key parameters to tune
   param_grid = {
       'hidden_dim': [24, 48, 96],
       'dim': [128, 256],
       'learning_rate': [1e-4, 5e-4, 1e-3],
       'batch_size': [64, 128],
       'gamma': [0.5, 1.0, 2.0]
   }
   ```

## Comparison with Other Methods

| Feature | TimeGAN | CTGAN | PAR | ARIMA |
|---------|---------|--------|-----|--------|
| Temporal modeling | Excellent | Poor | Good | Good |
| Multivariate | Yes | Yes | Yes | Limited |
| Non-linear | Excellent | Excellent | Good | Poor |
| Training complexity | High | Moderate | Low | Low |
| Flexibility | High | High | Moderate | Low |

## Resources

- [Original Paper](https://papers.nips.cc/paper/2019/hash/c9efe5f26cd17ba6216bbe2a7d26d490-Abstract.html)
- [Official Implementation](https://github.com/jsyoon0823/TimeGAN)
- [YData Synthetic](https://github.com/ydataai/ydata-synthetic)
- [Time Series Synthesis Review](https://arxiv.org/abs/2301.12112)

## Citation

```bibtex
@inproceedings{yoon2019time,
  title={Time-series generative adversarial networks},
  author={Yoon, Jinsung and Jarrett, Daniel and Van der Schaar, Mihaela},
  booktitle={Advances in neural information processing systems},
  volume={32},
  year={2019}
}
```

## Related Methods

- [PAR (SDV)](sdv-overview.md) - Probabilistic AutoRegressive model
- [RCGAN](https://github.com/ratschlab/RGAN) - Recurrent Conditional GAN
- [C-RNN-GAN](https://github.com/olofmogren/c-rnn-gan) - Continuous RNN GAN
- [TimeVAE](https://github.com/abudesai/timeVAE) - VAE for time series

---
*Last updated: July 2024*