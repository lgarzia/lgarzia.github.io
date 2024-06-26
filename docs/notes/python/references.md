---
title: Python
editLink: false
outline: [1, 4]
---

## Vignettes

::: details Python Package Manager
[Python Packaging Manager](https://dev.to/adamghill/python-package-manager-comparison-1g98) is a nice write-up of the current state of Python packaging. On a detour, I spent time visiting [Python Packaging Authority](https://github.com/pypa), and I didn't realize the number of libraries it envelopes, including flit, hatch, pipenv, et al. This is a nice [thread](https://discuss.python.org/t/what-is-the-pypa/12297/5) describing what pypa is - not authoritative, but seems to be authoritative according to [pep 609](https://peps.python.org/pep-0609/). pypa.io seems outdated, but [the user guide](https://packaging.python.org/en/latest/) is still content-rich. As an aside, [Py-Pkgs](https://py-pkgs.org/) is a nice read. A couple new libraries added to my backlog ([pip-audit](https://github.com/pypa/pip-audit), [rye](https://rye-up.com/))
:::

::: details Python Frameworks

- [Python Frameworks](https://pythonframeworks.com/) Nice compendium of frameworks - so many unexplored - I highlighted a few I want to check out.
  - Web Framework: Python-only web development (CubicWeb, Dara, Esmerald, FrappeFramework, Solara)
  - API Development: async, graphql, less boilerplate (Litestar, strawberry, Graphene Python, Connexion)
  - ML, DL, AI: The usual + AI (SuperAGI, mindsdb)
  - Workflow & Pipelines: Data processing & task queues (Schedule, Mage, DoIt, kedro)
  - Microservices: this category in this context is a bit new to me (Nameko, Falcon, minOS, gRPC)
  - DevOps: utils and monitoring (SALT, Fabric)
  - Web Crawling/Scraping: always useful when needed (Dude, Trafilatura)
  - Gui & Tui: I haven't tried in many moons, time for another look (Eal, Gooey, Textual, Toga )

:::

## Snippets

::: details structural patterns
[nice writeup](https://towardsdatascience.com/python-structural-pattern-matching-top-3-use-cases-to-get-you-started-262160007fa0)

```python
def get_service_level(user_data: dict):
    match user_data:
        case {'subscription': _, 'msg_type': 'info'}:
            return 'Service level = 0'
        case {'subscription': 'free', 'msg_type': 'error'}:
            return 'Service level = 1'
        case {'subscription': 'premium', 'msg_type': 'error'}:
            return 'Service level = 2'
```

Usage

```python
@pytest.mark.parametrize('user_data, expected', [
    ({'subscription': 'free', 'msg_type': 'info'}, 0),
    ({'subscription': 'free', 'msg_type': 'error'}, 1),
    ({'subscription': 'premium', 'msg_type': 'error'}, 2),
])
def test_get_service_level(user_data, expected):
    assert get_service_level(user_data) == expected
```

:::
::: details safe pip install
Detailed opinion on [pip install]()

`python -m pip install --require-hashes --no-deps --only-binary :all: -r requirements.txt`

Support view in the context of [python -m usage](https://snarky.ca/why-you-should-use-python-m-pip/)

Support view in the context of [dependency management](https://www.b-list.org/weblog/2022/may/13/boring-python-dependencies/).

- [pip-tools](https://pypi.org/project/pip-tools/)

- Support view in the context of [docs, src, and tests directories in the project root](https://hynek.me/articles/testing-packaging/)
  :::

::: details .env file
Nice write-up [.env file](https://dev.to/jakewitcher/using-env-files-for-environment-variables-in-python-applications-55a1)

[python-dotenv](https://pypi.org/project/python-dotenv/)

```.env_file
GCP_PROJECT_ID=my-project-id
```

```python
import os
from dotenv import load_dotenv
load_dotenv()
GCP_PROJECT_ID=os.getenv('GCP_PROJECT_ID')
```

:::

::: details data classes (slots=True)
[Banish state-mutating methods from data classes](https://rednafi.com/python/dataclasses_and_methods/) offers practical advice but also motivates why with a breakdown of what is happening behind the scenes. One key takeaway was the penalty cost of setting (frozen=True). Here he provides a bit more [details](https://rednafi.com/python/statically_enforcing_frozen_dataclasses/). Main point use (slots=True).
:::

## Link-a-thon
