---
title: Python
editLink: false
outline: [1, 4]
---

# Overview

My objective is to keep a pulse on the evolving ecosystem. I mostly cover libraries and features.

## [Python Libraries](./python-libraries) <Badge type="warning" text="not tutorials" />

I have a backlog of libraries that I come across that sound interesting. I'll timebox a couple of hours
to explore them. All activity is captured in the following [repo](https://github.com/lgarzia/library_explorations).

## Resources

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

## Tips & Tricks

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
