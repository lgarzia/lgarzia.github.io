---
title: AI | Links
editLink: false
outline: [1, 4]
---

# Overview

Continuously refined list.

## 2024-09

[Top AI libraries] https://dev.to/composiodev/13-open-source-tools-that-will-make-you-99-more-likely-to-land-any-ai-job-3049: Agentic workflow libraries are getting further developed.

## 2024-01

- [LLaMA-Factory](https://github.com/hiyouga/LLaMA-Factory): Fine-tuning Open Source Models
- **DPO**: DPO stands for Direct Preference Optimization. It's an alternative approach to traditional reinforcement learning (RL) methods for adapting LLMs to specific tasks or preferences.
- [MISTRAL AI](https://mistral.ai/): Committing to open models
- [Mixtral 8x7B](https://mistral.ai/news/mixtral-of-experts/): A 7B sparse Mixture-of-Experts model with stronger capabilities than Mistral 7B. Uses 12B active parameters out of 45B total. Supports multiple languages, code and 32k context window
- [mergekit](https://github.com/cg123/mergekit): toolkit for merging pre-trained language models.
- [tutorial](https://freedium.cfd/https://towardsdatascience.com/merge-large-language-models-with-mergekit-2118fb392b54)
- [datagpt](https://datagpt.com/): I believe this is the future of Data Analysis. AI agents scanning behind the scene surfacing insights to be interpreted
- LiteLLM
- [LLM guardrails](https://github.com/guardrails-ai/guardrails)
- [LLM's outlines](https://github.com/outlines-dev/outlines)
- [LLM's prompt tools](https://github.com/hegelai/prompttools)
- [AI Function Calling](https://gradientflow.com/expanding-ai-horizons-the-rise-of-function-calling-in-llms/) LLMs that call functions instead of just returning functions.
- [current state of coding agent](https://deepsense.ai/coding-agents-in-large-language-models?utm_source=substack&utm_medium=email).
- [AutoGPT](https://github.com/Significant-Gravitas/AutoGPT)
- [BabyAGI](https://github.com/yoheinakajima/babyagi): BabyCoder is one of the BabyAGI variants which specializes in writing code. Unlike AutoGPT, which creates agents on the fly, BabyCoder uses a handful of predefined, specific agents who work together to come up with a functional project.
- [smol developer](https://github.com/smol-ai/developer)
- [gpt engineer](https://github.com/gpt-engineer-org/gpt-engineer)
- [MetaGPT](https://github.com/geekan/MetaGPT)
- [DemoGPT](https://github.com/melih-unsal/DemoGPT)

[codium - SOTA](https://www.codium.ai/blog/alphacodium-state-of-the-art-code-generation-for-code-contests)
[menlo modern ai stack](https://menlovc.com/perspective/the-modern-ai-stack-design-principles-for-the-future-of-enterprise-ai-architectures/)
A single model won’t “rule them all.” According to Menlo’s Enterprise AI report, 60% of enterprises use multiple models and route prompts to the most performant model. This multi-model approach eliminates single-model dependency, offers higher controllability, and cuts costs.

Therefore, observability and evaluation present a significant opportunity for new tooling. Already, we are seeing promising new approaches like Braintrust, Patronus, Log10, and AgentOps.

- [deloitte state of gen ai](https://www2.deloitte.com/content/dam/Deloitte/us/Documents/consulting/us-state-of-gen-ai-report.pdf): Relative to other respondents, leaders who rated their organization’s overall generative AI expertise as “very
  high” tended to feel much more positive about the technology; however, they also feel more pressure to
  adopt it—and see it as more of a threat to their business and operating models

- [QAnything](https://github.com/netease-youdao/QAnything)
- [DSPy YouTube](https://www.youtube.com/watch?v=CDung1LnLbY)
- [DSpy Conference Talk](https://www.youtube.com/watch?v=Dt3H2ninoeY)
- [AGI Reasoning](https://mlops.community/towards-agi-making-llms-better-at-reasoning-1-2)
- [mlops blog](https://mlops.community/blog/)
- [guidance](https://github.com/guidance-ai/guidance)
- [instructor](https://github.com/jxnl/instructor/tree/main)
- [Llm + data science](https://pca.st/podcast/f74fa690-8b35-0139-34f1-0acc26574db2): Hamel Husain's journey is a great listen.
- [Research: auto assert LLM results](https://arxiv.org/abs/2401.03038)
- [insightpilot](https://www.marktechpost.com/2023/12/24/microsoft-researchers-introduce-insightpilot-an-llm-empowered-automated-data-exploration-system/): assisted data analytics

## 2024-02

- [RAGatouille](https://github.com/bclavie/RAGatouille): RAGatouille is really a big deal, and it’s revolutionising RAG apps development!
- [mergekit](https://github.com/arcee-ai/mergekit)
- [Trough of disillusionment](https://www.ai2incubator.com/blog/Insight-13-Trough-of-Disillusionment)
  Despite advances such as low-rank adaptation (LoRA), fine tuning LLMs is still extremely challenging. Make sure you exhaust the potential of in-context learning, following OpenAI’s guide and techniques such as promptbase. Fine tune as a last resort and expect many attempts before succeeding.
- [open ai prompt guide](https://platform.openai.com/docs/guides/prompt-engineering/six-strategies-for-getting-better-results)
- [promptbase](https://github.com/microsoft/promptbase)
- [OLMO SOTA LLM Open Source](https://blog.allenai.org/olmo-open-language-model-87ccfc95f580)
- [NOMIC SOTA Open Source Emedding](https://blog.nomic.ai/posts/nomic-embed-text-v1?utm_source=substack&utm_medium=email)

- [progression](https://www.marktechpost.com/2024/02/03/a-memes-glimpse-into-the-pinnacle-of-artificial-intelligence-ai-progress-in-a-mamba-series-llm-enlightenment)In the dynamic field of Artificial Intelligence (AI), the trajectory from one foundational model to another has represented an amazing paradigm shift. The escalating series of models, including Mamba, Mamba MOE, MambaByte, and the latest approaches like Cascade, Layer-Selective Rank Reduction (LASER), and Additive Quantization for Language Models (AQLM) have revealed new levels of cognitive power.
- [12 prompt engineering techniques](https://medium.com/@cobusgreyling/12-prompt-engineering-techniques-644481c857aa)
- [prometheus](https://huggingface.co/papers/2310.08491?ref=blog.premai.io): evaluating LLMs

- [llmware](https://github.com/llmware-ai/llmware)
  As enterprises look to deploy LLMs in more complex production use cases beyond simple knowledge assistants, there is a growing recognition of three interconnected needs:

Agents – complex workflows involve multiple steps and require the orchestration of multiple LLM calls;

Function Calls – models need to be able to generate structured output that can be handled programmatically, including key tasks such as classification and clustering, which often times are the connective tissue in such workflows; and

Private Cloud – models and data pipelines need to be finetuned and tightly integrated with sensitive existing enterprise processes and data stores.

- [sqlcoder AI](https://defog.ai/blog/open-sourcing-sqlcoder/)
- [langflow](https://github.com/logspace-ai/langflow)
- [prompt guide](https://www.promptingguide.ai/)

## 2024-03

- [tiktoken](https://github.com/openai/tiktoken)
- [ReAct](https://til.simonwillison.net/llms/python-react-pattern)
- [embedchain](https://github.com/embedchain/embedchain)

## 2024-04

- [agent-studio](https://skyworkai.github.io/agent-studio/index.html)
- [fascinating AllHands](https://www.marktechpost.com/2024/03/27/researchers-at-microsoft-propose-allhands-a-novel-machine-learning-framework-designed-for-large-scale-feedback-analysis-through-a-natural-language-interface)
- [huggingface - moe](https://huggingface.co/blog/moe)
- [jailbreaking](https://garymarcus.substack.com/p/an-unending-array-of-jailbreaking)
- [LaVague - nlp navigate web](https://github.com/lavague-ai/LaVague)
- [llm transparency tool](https://github.com/facebookresearch/llm-transparency-tool)
- [continued abstractions](https://cohere.com/blog/rerank-3)
- [chatdev](https://github.com/OpenBMB/ChatDev)
- [Pattern - Planning](https://www.deeplearning.ai/the-batch/agentic-design-patterns-part-4-planning)
- [Agentic Design Pattern](https://www.deeplearning.ai/the-batch/agentic-design-patterns-part-3-tool-use)
- [Agentic Patterns](https://www.deeplearning.ai/the-batch/how-agents-can-improve-llm-performance)
- Reflection: The LLM examines its own work to come up with ways to improve it.
- Tool Use: The LLM is given tools such as web search, code execution, or any other function to help it gather information, take action, or process data.
- Planning: The LLM comes up with, and executes, a multistep plan to achieve a goal (for example, writing an outline for an essay, then doing online research, then writing a draft, and so on).
- Multi-agent collaboration: More than one AI agent work together, splitting up tasks and discussing and debating ideas, to come up with better solutions than a single agent would.
- [LLMs Practical Guide](https://github.com/JingfengYang/LLMsPracticalGuide)

## 2024-05

- [Agentic Workflows](https://gradientflow.com/agentic-ai-challenges-and-opportunities/)
