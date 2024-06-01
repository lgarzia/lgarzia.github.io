---
title: Engineering
editLink: false
outline: [1, 3]
---

# Overview

I use engineering as a catch-all for all forms of engineering - too many job titles. My and other engineers' responsibilities span the gamut:

- Data Engineering -> Managing ETL pipelines
- ML Engineering -> Monitoring for data drift
- Analytics Engineering -> Building DBT models
- Software Engineering -> Creating front-end applications or APIs
- DevOps Engineering -> Updating Jenkins CI/CD pipelines
- Platform Engineering -> Revising Terraform Scripts

In the end, Engineers solve problems given toolkits and constraints.

## Rust

::: details Rust-100 day challenge
[Completed the Rust-100 day challenge](https://github.com/lgarzia/Rust_100Days).
My thoughts align with [SeatleDataGuy](https://seattledataguy.substack.com/p/behind-the-rust-hype-what-every-data).
Python ecosystem is going through a [_rustification_ process](https://python.plainenglish.io/the-development-trend-of-python-in-2023-deep-integration-with-rust-easier-to-write-web-fc92716ae653). It's unlikely analysts will leverage Rust directly. Python's simplicity will be hard to beat for a lot of glue code use cases though.  
:::

## Apache Iceberg

BigQuery now supports Apache Iceberg tables but requires features in pre-release (namely, calling PySpark Stored Procedure).
![define Iceberg Table](/iceberg_bq.png)

- [medium - apache-iceberg-a-primer](https://medium.com/@thedatafreak/apache-iceberg-a-primer-75a63470bfa2)
- [apache iceberg](https://medium.com/@thedatafreak/apache-iceberg-a-primer-75a63470bfa2)
- [medium - introduction-to-apache-iceberg](https://medium.com/towards-data-science/introduction-to-apache-iceberg-tables-a791f1758009)

**Summary**
Apache Iceberg is a table format that **separates** the physical layer (e.g. parquet) from the logical layer. Apache Iceberg's rich metadata layer allows it to efficiently manage large data assets to provide transaction, schema evolution support, scalability, compression, and time travel.
![iceberg architecture](/iceberg_file.png)

---

[Tabular](tabular.io)\*\* is a commercial project from creators.
![commercial iceberg](https://tabular.io/images/tabular-stack.svg)

## DBT

Recently started learning and using DBT at work. There's plenty of great [documentation](https://docs.getdbt.com/docs/introduction).
It's a clever framework for a really common use case for us, which is BigQuery to BigQuery transformations managed by Python and Jinja templating.

The three big concepts that I sell to the team to improve adoption.

1. Lineage <-- GCP/BigQuery offers a feature, but it's not turned on
2. Modularity <-- Complimentary to BigQuery artifacts, less heavy-handed
3. **Declarative SQL** <-- Especially for testing, specify column & test to run

`dbt compile` view sql code

[The dbt Viewpoint](https://docs.getdbt.com/community/resources/viewpoint) is a great introduction to the project.
I've started to adopt this _mission statement_ to the projects that I build:

- Here's the challenge
- Here's _how I think about the problem_
- Here's my vision
