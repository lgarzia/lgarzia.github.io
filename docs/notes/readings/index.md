---
title: Grist for the mill
editLink: false
outline: [1, 3]
---

# Overview
Intent is not to share every article I come across, but the ones I find compelling enough to share and have recently impacted my way of thinking or working.

## Analytics & Data Mining
::: details [ML/AI/Data - Landscape](https://mad.firstmark.com/)
Comprehensive view of industry organized across core concepts. A couple ideas I needed to learn a bit more about *Real Time Databases* & *Database Abstractions*. The other observation is certain segments seems consolidated, while others are still shaking out (e.g. Data Governance). Additionally, I didn't realize the richness of data furnishers ecosystem.
:::

## DE, ML, Et al. Engineering
::: details [Death by a Thousand Microservices](https://renegadeotter.com/2023/09/10/death-by-a-thousand-microservices.html)
You're not Google. Keep it simple and the argument for *macroservices*. 
:::
::: details [Benchmarking xethub, dvc, lfs, lakefs](https://about.xethub.com/blog/benchmarking-xethub-vs-dvc-lfs-lakefs)
Bit of a biased view from XetHub, but it's a fascinating topic about Data Version Control. The primary use case highlight is version controlling data with ML model developments. The article explores various approaches and XetHub's innovation to simplify and scale DVC. 
:::

## AI(*LLM*) Engineering
::: details [AI Agents vs Developers](https://e2b.dev/blog/ai-agents-vs-developers)
I strongly believe that this is the future that AI Agents will play a profound role going forward. The idea of 'reasoning agents' to manage control flow is going to happen. For instance, one of my projects is trying to determine if a statistical outlier is something we care about, so we create deterministic rules (e.g., if this event took place, ignore the alert). However, a more scalable approach is pointing an AI agent at the problem and, with a bit of human feedback, allowing it to learn the patterns non-deterministically.
:::
::: details [State of AI Report](https://docs.google.com/presentation/d/156WpBF_rGvf4Ecg19oM1fyR51g4FAmHV3Zs0WLukrLQ/edit#slide=id.g24daeb7f4f0_0_3373)
An incredible overview of meta trends in the AI industry - here are a few ideas I took away. The best models employ RLHF - humans evaluating multiple responses to steer the reward mechanism to the best and safest answers. Open Source LLM models are potentially blossoming with Meta/Falcon releases. LLM Agents interacting with applications is here. Multimodal models are here (e.g., Vision in Robotics). In reality, very few players are building and contributing to LLM research - the reasons are obvious, the implications less so.
:::
::: details [Chollet - How I Think about LLM Prompt Engineering](https://fchollet.substack.com/p/how-i-think-about-llm-prompt-engineering)
Fascinating mental models that prompting is like a key into a vector space. Different prompts navigate to other areas of the vector space.
:::


## Google Cloud Platform
::: details [AI and Open Source in 2023](https://magazine.sebastianraschka.com/p/ai-and-open-source-in-2023)
Broader trends similar to Google [PaLM] 2 (https://blog.google/technology/ai/google-palm-2-ai-large-language-model/) evolution - multimodal, bigger context window, more parameters, etc. 
:::

## Python
::: details [DataFrame Interchange Protocol](https://ponder.io/how-the-python-dataframe-interchange-protocol-makes-life-better/)
Open source community is creating a standard API layer to interact with Dataframes. For me, instead of writing signatures expecting a Pandas dataframe, I can future-proof by leveraging Dataframe protocol (Modin, Dask, cuDF, Polars, etc.).
:::

## Rust
::: details [Behind the Rust Hype](https://seattledataguy.substack.com/p/behind-the-rust-hype-what-every-data)
Python's future will sit on Rust, no doubt in my mind. Rust offers a nice blend of clean syntax and performance, and it's rise makes a lot of sense to me now that I've started studying earnestly.
:::

 
## Web
::: details [HTMX - Talk Python](https://training.talkpython.fm/courses/htmx-flask-modern-python-web-apps-hold-the-javascript)
HTMX, HTMX, HTMX
:::

## Professional Development
::: details [Insights on collapsing talent](https://www.implications.com/p/insights-on-collapsing-the-talent)
There's a lot to unpack here, but the two big trends merging (plug-and-play APIs with AI Agents) will enable even easier application development. In a future landscape, more emphasis on user experience, branding, and community engagement will see smaller and tighter team integrations.
:::
::: details [Strange Ways AI Disrupt Business](https://www.implications.com/p/strange-ways-ai-disrupts-business)
I've heard this message a few times now; the trend is to move away from 'services' to 'solutions'. For instance, the old model  'provide engagement survey services' to 'managing employee engagement' effectively outsources data insights, content creation, etc. to AI. In other words, don't bill by hour - but bill be task.
:::
<!--- # Personal Branding (Medium Article) -->
