---
title: Python Libraries
lang: en-US
---

## Libraries
::: details plotai
[plotai](https://github.com/mljar/plotai) It is a great library that interacts with Openai to automate the creation of plots in matplotlib with a simple command.
**note**: need to specify the key in .env file

```python
from plotai import PlotAI
plot = PlotAI(df)
plot.make("make a scatter plot")
```
:::
::: details sqlglot
[sqlglot](https://github.com/tobymao/sqlglot) SQL parser, transpiler, and optimizer engine. I was inspired by the library's approach to managing SQL gracefully:
    * SQLGlot can rewrite queries into an "optimized" form.
    * SQLGlot can calculate the difference between two expressions and output changes in the form of a sequence of actions needed to transform a source expression into a target one:
    * SQLGlot can interpret SQL queries where the tables are represented as Python dictionaries.
```python
sql = """WITH baz AS (SELECT a, c FROM foo WHERE a = 1) SELECT f.a, b.b, baz.c, CAST("b"."a" AS REAL) d FROM foo f JOIN bar b ON f.a = b.a LEFT JOIN baz ON f.a = baz.a"""

print(sqlglot.transpile(sql, write="spark", identify=True, pretty=True)[0])
# ...
for column in parse_one("SELECT a, b + 1 AS c FROM d").find_all(exp.Column):
    print(column.alias_or_name)
# ...
where = condition("x=1").and_("y=1")
select("*").from_("y").where(where).sql()
```
::: details pandara
[pandara](https://github.com/unionai-oss/pandera) is for validating a DataFrame object. Ideal for managing data pipeline schemas and underlying data. As an aside, pandera reinforced the idea of hypothesis testing. 
```python
schema = pa.DataFrameSchema({
    "column1": pa.Column(int, checks=pa.Check.le(10)),
    "column2": pa.Column(float, checks=pa.Check.lt(-1.2)),
    "column3": pa.Column(str, checks=[
        pa.Check.str_startswith("value_"),
        # define custom checks as functions that take a series as input and
        # outputs a boolean or boolean Series
        pa.Check(lambda s: s.str.split("_", expand=True).shape[1] == 2)
    ]),
})
validated_df = schema(df)  # will generate an error 
```
:::
::: details pypika
[pypika](https://github.com/kayak/pypika) focus is on assembling SQL. This library applies clever usage of builder patterns and has a nicely constructed API
```python
q = Query.from_('customers').select('id', 'fname', 'lname', 'phone')
q.get_sql()
customers = Table('customers')
q = Query.from_(customers).select(
    customers.id,customers.fname
).where(
    customers.age[18:65] & customers.status.isin(['new', 'active'])
)

```
:::
::: details hamilton
[hamilton](https://github.com/dagworks-inc/hamilton) is a general-purpose micro-orchestration framework for creating dataflows from Python functions. Imagine DBT but for DataFrame constructions. The developer builds functions and relationships and Hamilton stitches together the execution DAG. This is a very impressive API.

```python
from hamilton import driver
initial_columns = {...}
module = importlib.import_module(module_name)  # <-- import functions
dr = driver.Driver(initial_columns, module)  # <-- build dag
df = dr.execute(output_columns)  # <-- execute
```
:::
::: details chromedb
[Chroma](https://docs.trychroma.com/getting-started) is an in-memory vector database. Built on top of great open-source tokenization and embedding algorithms
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

::: details duckdb
[duckdb](https://duckdb.org/docs/api/python/overview.html) is an in-memory analytical database.
One use case suggested by a colleague - reads a CSV file very fast.

```python
import duckdb
duckdb.sql('SELECT * FROM "example.csv"') 
```
:::

::: details ibis-framework
[ibis-framework](https://pypi.org/project/ibis-framework/) is a write-once and executes SQL on many analytics engines.
One use case - develop against pandas and scale to BigQuery.
See [Ibis Docs - Tutorial for SQL](https://ibis-project.org/tutorial/ibis-for-sql-users/#ibis-for-sql-users)
:::
