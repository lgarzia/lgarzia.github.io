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

## Tips & Tricks

### Use .env file
Nice write-up [.env file](https://dev.to/jakewitcher/using-env-files-for-environment-variables-in-python-applications-55a1)

[python-dotenv](https://pypi.org/project/python-dotenv/)
``` .env_file
GCP_PROJECT_ID=my-project-id
``` 
```python
import os
from dotenv import load_dotenv
load_dotenv()
GCP_PROJECT_ID=os.getenv('GCP_PROJECT_ID')
```


