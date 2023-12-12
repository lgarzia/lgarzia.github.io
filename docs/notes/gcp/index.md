---
title: GCP
editLink: false
outline: [1, 3]
---

# Overview
I recently completed 3 Google Cloud Professional Certifications, which was after completing a [100-day challenge](https://github.com/lgarzia/GCP_100Days), and I still feel like I'm barely scratching the surface. GCP continues to evolve with new services, features, and paradigms. My learnings are more [project-based](https://github.com/lgarzia/topic_extractions) now, but I will leverage this section to capture pertinent ideas and trends to stay relevant.

## Vertex AI
* [A Stroll Through Google's Model Garden](https://www.ignorance.ai/p/a-stroll-through-googles-model-garden?utm_source=www.turingpost.com&utm_medium=newsletter&utm_campaign=fod-29-microsoft-goes-all-in-on-ai-now-with-sam-altman-and-greg-brockman-as-employees) by Charlie Guo: 
Summary: Model Garden - hundreds of available models including open-source models and task-specific models. Generative AI Studio is a playground for designing prompts *and* fine-tuning a model model via example-based & RLHF. ML Ops & infrastructure - why OpenAI + Azure is a common compliment.

![2 sides of Vertex AI](https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fec6bab26-808e-4afb-8cdb-f5b4638144e5_1988x1078.jpeg)
## Analytics Lakehouse
The following article lays out an end-to-end vision of where analytical systems are heading (have headed).
[Analtyics Lakehouse Medium Article](https://medium.com/google-cloud/analytics-lakehouse-on-gcp-principles-and-building-blocks-116f4eb94a45)

![GCP Lakehouse](./images/GCP_Analytic_Lakehouse.png)

## BigQuery
My Medium articles:
* [JSON Data Types](https://medium.com/@garzia.luke/brief-guide-to-effectively-leverage-json-data-type-in-bigquery-a3185d9fe88b)
* [BigQuery UDFs](https://medium.com/@garzia.luke/bigquery-udfs-leverage-learn-from-community-contributed-projects-7ddff089f35a)
* [Remote Functions](https://medium.com/@garzia.luke/bigquery-remote-functions-identifying-valid-use-cases-1f80a6f55767)

Articles
* [Technical Overview of JSON Type](https://cloud.google.com/blog/products/databases/how-bigquery-powers-semi-structured-data-storage)
![Mapping JSON to Virtual Columns](https://storage.googleapis.com/gweb-cloudblog-publish/images/1_virtual_columns.max-1700x1700.png)

## BigLake
* [BigQueryover Iceberg](https://cloud.google.com/blog/products/data-analytics/announcing-apache-iceberg-support-for-biglake)
![GCP BigLake](/BigLake.png)

## Cloud Storage
[Autoclass](https://cloud.google.com/storage/docs/autoclass) is generally recommended, unless known use case for a specific storage class or if other Google Cloud services regularly read data from the bucket (e.g. Sensitive Data Protection);