---
title: AI Engineer
editLink: false
outline: [1, 3]
---

# Overview

The evolution of LLM is nothing short of extraordinary. Hype cycle or not, AI agents will have a profound way we work & interact with the world.

GCP [Duet AI](https://cloud.google.com/bigquery/docs/write-sql-duet-ai) demos were a revelation. I started exploring the open-source LLM and wrote an [article](https://medium.com/@garzia.luke/developing-intuition-around-llm-code-assistants-via-open-source-models-afb0a1152240)building up an intuition around code generation. I am keeping a [repo](https://github.com/lgarzia/llm_apps_experimenting) where I explore various libraries and concepts.

I separate AI engineering from others because it's highly exploratory. The big ideas are emerging - leveraging AI Agents to manage tasks and **control flows**. My ideal AI Agent - here's my dashboard; tell me what I need to know for the day - I don't have to provide statistical boundaries.

What follows here is just _attempts_ to keep pace!

::: details AI Engineering (Rise of LLM Apps)
The rise of [AI Agents](https://e2b.dev/blog/ai-agents-vs-developers?utm_source=substack&utm_medium=email) is inevitable. The idea of creating an adaptable application that can learn and remain flexible without code change is remarkable. Furthermore, the _fragile_ prompt engineering process will give way to abstractions like ['reasoning'](https://github.com/stanfordnlp/dspy), demonstrating a paradigm shift in application and data analytics **will happen**.
:::

## Industry Landscape & Current State

::: details [AI Agents vs Developers](https://e2b.dev/blog/ai-agents-vs-developers)
I strongly believe that this is the future that AI Agents will play a profound role going forward. The idea of 'reasoning agents' to manage control flow is going to happen. For instance, one of my projects is trying to determine if a statistical outlier is something we care about, so we create deterministic rules (e.g., if this event took place, ignore the alert). However, a more scalable approach is pointing an AI agent at the problem and, with a bit of human feedback, allowing it to learn the patterns non-deterministically.
:::
::: details [State of AI Report](https://docs.google.com/presentation/d/156WpBF_rGvf4Ecg19oM1fyR51g4FAmHV3Zs0WLukrLQ/edit#slide=id.g24daeb7f4f0_0_3373)
An incredible overview of meta trends in the AI industry - here are a few ideas I took away. The best models employ RLHF - humans evaluating multiple responses to steer the reward mechanism to the best and safest answers. Open Source LLM models are potentially blossoming with Meta/Falcon releases. LLM Agents interacting with applications is here. Multimodal models are here (e.g., Vision in Robotics). In reality, very few players are building and contributing to LLM research - the reasons are obvious, the implications less so.
:::
::: details [Chollet - How I Think about LLM Prompt Engineering](https://fchollet.substack.com/p/how-i-think-about-llm-prompt-engineering)
Fascinating mental models that prompting is like a key into a vector space. Different prompts navigate to other areas of the vector space.
:::

- [Menlo Ventures](https://menlovc.com/perspective/the-modern-ai-stack-design-principles-for-the-future-of-enterprise-ai-architectures)
  ![Emerging Building Blocks for GenAI](https://menlovc.com/wp-content/uploads/2024/01/modern_ai_stack-market_map-011724-scaled.webp)

- [State of open-source AI book](https://book.premai.io/state-of-open-source-ai/)
- [e2b landscape-latest](https://raw.githubusercontent.com/e2b-dev/awesome-ai-agents/main/assets/landscape-latest.png)
- [PALM2 Release](https://www.youtube.com/watch?v=WF4xjKgU8r0)

## Thought Provoking Articles, Libraries

- [e2b ai agents versus developers](https://e2b.dev/blog/the-state-of-ai-agents-reliability-sdks-benchmarking-and-market-trends?ref=ai-agents-vs-developers)
- [Standford DSPy](https://github.com/stanfordnlp/dspy): DSPy unifies techniques for prompting and fine-tuning LMs — and approaches for reasoning, self-improvement, and augmentation with retrieval and tools. Abstractions around thought processes to avoid brittle and hard code prompts.

## Libraries Explored

- [haystack](https://github.com/deepset-ai/haystack) - is an end-to-end NLP framework that enables you to build applications powered by LLMs, Transformer models, vector search and more.
- [langchain](https://github.com/langchain-ai/langchain) - library aims to assist in the development of LLM based applications.
- [LlamaIndex](https://www.llamaindex.ai/) - is a data framework for LLM-based applications to ingest, structure, and access private or domain-specific data.
- [semantic-kernel](https://learn.microsoft.com/en-us/semantic-kernel/overview/) - framework powering Copilot.
- [TaskWeaver](https://microsoft.github.io/TaskWeaver/): Data Analytics AI agent-based framework that manages memory, logging, and orchestration between User, Planner, and Code Generator via Chat. I worked through tutorials, documentation, and jotted notes [down](https://github.com/lgarzia/library_explorations/tree/main/TaskWeaver). My key takeaway is that agent-based systems are the future. This implementation is clever, interweaving custom plugins that supplement LLM models.
  ::: details plotai
  [plotai](https://github.com/mljar/plotai) It is a great library that interacts with Openai to automate the creation of plots in matplotlib with a simple command.
  **note**: need to specify the key in .env file

  ```python
  from plotai import PlotAI
  plot = PlotAI(df)
  plot.make("make a scatter plot")
  ```

  :::

## Company Inventory

## I am primarily focused on business intelligence and automated data analysis.

- [Julius](https://julius.ai/) - AI data analyst & more
- [getdot.ai](https://www.getdot.ai/) - Make Data-Driven Decisions, Fast
- [datagpt.com](https://datagpt.com/) - The First Conversational AI Data Analyst
  Ask DataGPT any question and get analyst-grade answers in seconds.
