---
title: Python Library Exploration
lang: en-US
---

## Up Next

- [pypika](https://github.com/kayak/pypika)
- [hamilton](https://github.com/dagworks-inc/hamilton)

## Completed 

::: details chromedb
[Chroma](https://docs.trychroma.com/getting-started) is an in-memory vector database. 
Built on top of great open-source tokenization and embeddings algorithms. 
```python{4}
import chromadb
client = chromadb.Client()
collection = client.create_collection("my-collection")
# A lot of magic here --> tokenization, embedding
collection.add(
    documents=["This is a document about cat", "This is a document about car", "This is a document about bike"],
    metadatas=[{"category": "animal"}, {"category": "vehicle"}, {"category": "vehicle"}],
    ids=["id1", "id2","id3"]
)
results = collection.query(query_texts=["vehicle"], n_results=1)
```
:::

::: details DuckDB
[DuckDB](https://duckdb.org/docs/api/python/overview.html) is an in-memory analytical database. 
One use case suggested by a colleague - reads a CSV file very fast.

```python
import duckdb
duckdb.sql('SELECT * FROM "example.csv"') 
```
:::

::: details ibis-framework
[ibis-framework](https://pypi.org/project/ibis-framework/) is a write once and execute SQL on many analytics engine. 
One use case - develop against pandas and scale to BigQuery.
See [Ibis Docs - Tutorial for SQL](https://ibis-project.org/tutorial/ibis-for-sql-users/#ibis-for-sql-users)
:::
