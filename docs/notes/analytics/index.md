---
title: Analytics
editLink: false
outline: [1, 3]
---

# Overview
Having an up-close view of the Analytics Industry evolve has been mesmerizing and anxiety-inducing. I love to learn, but keeping pace is pretty damn challenging. I've studied a great deal across statistics, machine learning, deep learning, and Bayesian ([my all-time favorite book](https://nostarch.com/learnbayes)) over the years. 

My primary interest has been and continues to be in *Data Mining*. How do you generate information quickly & efficiently? How do we create a smart system to alert appropriately? I sense [AI agents](https://julius.ai/) will be the vanguard of analytics. Hence, the learning continues at pace!


## Time Series Project
**Placeholder**  Discuss a pure SQL implemention in BigQuery that preprocessed and detected points of interest for over 2 million times series in a few minutes. 

## Explainable AI <Badge type="warning" text="not tutorials" />
* [Explainable AI for Pracitioners](https://www.amazon.com/Explainable-Practitioners-Designing-Implementing-Solutions/dp/1098119134)
* [Interpretable Machine Learning with Python](https://www.amazon.com/Interpretable-Machine-Learning-Python-hands/dp/180020390X)
* [Interpretable Machine Learning](https://www.amazon.com/Interpretable-Machine-Learning-Making-Explainable/dp/B09TMWHVB4)
* [Introduction to Vertex Explainable AI](https://cloud.google.com/vertex-ai/docs/explainable-ai/overview)
* [InterpretML/](https://interpret.ml/)
My notes in GitHub [are a bit rough](https://github.com/lgarzia/explainability)

**Summary**: In short, several *Glass-Box* models have been developed (e.g. Explainable Boosting Machines) that create interpretable models by design.

The key idea to remember is it's explaining the **model**, not the **data**. Processes exist to inspect *Black-Box* models to discern why a model makes predictions globally and locally (per prediction). The models and techniques are baked into BigQuery and VertexAI, so it's just automated now.


## Feature Selection
* [My Medium Article](https://medium.com/@garzia.luke/feature-selection-principled-data-mining-workflow-30d3b0b702d6)
* [Boruta](https://medium.com/r/?url=https%3A%2F%2Ftowardsdatascience.com%2Fboruta-explained-the-way-i-wish-someone-explained-it-to-me-4489d70e154a)
* [MRMR](https://medium.com/r/?url=https%3A%2F%2Ftowardsdatascience.com%2Fmrmr-explained-exactly-how-you-wished-someone-explained-to-you-9cf4ed27458b)


**Summary**: Feature selection is the process of removing columns that are not adding additional information to a model. Modern algorithms can take a holistic approach to tease out interactive effects and shared information across several columns.