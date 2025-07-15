---
layout: default
title: Benchmarks
permalink: /benchmarks/
---

# Benchmarks

Standardized datasets and evaluation frameworks for comparing synthetic health data methods.

## Overview

Benchmarking is essential for advancing the field of synthetic health data. This section provides access to standard datasets, evaluation suites, and comparison studies to help researchers and practitioners assess and improve their methods.

## Benchmark Categories

### [Standard Datasets](/benchmarks/datasets/)
Reference datasets for evaluation:
- MIMIC-III derived benchmarks
- Synthea reference populations
- Privacy-preserving datasets
- Multi-modal benchmarks

### [Evaluation Suites](/benchmarks/evaluation/)
Comprehensive testing frameworks:
- Utility metrics suites
- Privacy evaluation tools
- Statistical test batteries
- Clinical validity checks

### [Leaderboards](/benchmarks/leaderboards/)
Performance comparisons:
- Algorithm rankings
- Privacy-utility trade-offs
- Computational efficiency
- Scalability metrics

### [Challenges](/benchmarks/challenges/)
Competitive evaluations:
- Annual competitions
- Specific task challenges
- Community benchmarks
- Prize competitions

## Featured Benchmarks

### Core Benchmarks

**SHDB-1: Synthetic Health Data Benchmark**
- Size: 100K patients
- Features: Demographics, diagnoses, medications
- Tasks: Prediction, generation, privacy
- [Download](/benchmarks/datasets/shdb-1/)

**Privacy Challenge Dataset**
- Focus: Re-identification resistance
- Includes: Attack scenarios
- Metrics: Privacy score, utility retention
- [Learn more](/benchmarks/challenges/privacy-2024/)

### Specialized Benchmarks

**Longitudinal Health Benchmark**
- Time series patient data
- 5-year follow-up
- Complex temporal patterns
- [Details](/benchmarks/datasets/longitudinal/)

**Rare Disease Benchmark**
- Focus: Small sample sizes
- 50+ rare conditions
- Class imbalance handling
- [Explore](/benchmarks/datasets/rare-disease/)

## Evaluation Metrics

### Utility Metrics
- Statistical similarity
- Machine learning efficacy
- Clinical validity
- Query accuracy

### Privacy Metrics
- Differential privacy guarantees
- Re-identification risk
- Attribute disclosure
- Membership inference

### Computational Metrics
- Generation time
- Memory usage
- Scalability
- Storage requirements

## How to Use Benchmarks

1. **Select appropriate benchmark** - Match your use case
2. **Follow evaluation protocol** - Ensure fair comparison
3. **Report all metrics** - Privacy and utility
4. **Share results** - Contribute to leaderboards

## Contributing

We welcome new benchmarks! Guidelines:
- Open data or synthetic only
- Clear documentation
- Reproducible evaluation
- Relevant metrics

## Latest Results

| Method | SHDB-1 Utility | Privacy Score | Speed (min) |
|--------|---------------|---------------|-------------|
| CTGAN | 0.89 | 0.95 | 12 |
| TVAE | 0.87 | 0.93 | 8 |
| DP-GAN | 0.82 | 0.99 | 15 |

[View full leaderboard →](/benchmarks/leaderboards/overall/)