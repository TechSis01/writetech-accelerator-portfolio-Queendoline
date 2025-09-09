# GPT-4 Model Card


## Model information

**Description**: GPT-4 is a large language model developed by OpenAI, representing the fourth generation of the GPT series. It is designed to excel in natural language understanding and generation. Compared to GPT-3.5, GPT-4 is more creative, nuanced, and reliable, and it can handle far more complex instructions across a wide range of industries. 

**Input**: GPT-4 is a multimodal model that accepts both text and image inputs. This includes prompts, conversations, instructions, diagrams, code snippets, and creative tasks. Inputs can be highly nuanced, such as exam questions with diagrams or detailed technical problems.

**Output**: GPT-4 produces text outputs only.

**Architecture**: GPT-4 is built on the Transformer architecture, a neural network design that processes and generates sequences of data efficiently. This architecture allows the model to interpret large datasets in parallel, identify relationships between words and concepts, and generate meaningful information at high speed.


## Training data
GPT-4 was trained using a combination of supervised learning on a large dataset made up of publicly available, licensed, and human-created data up until September 2021. The model’s core capabilities were shaped during this pre-training stage, where it learned patterns, structures, and relationships in language from vast amounts of text.

After pre-training, the model was fine-tuned with Reinforcement Learning with Human Feedback (RLHF). This process helped align its outputs more closely with how humans understand and expect information, while also reducing harmful or unsafe responses.

Post-training, GPT-4 can be “steered” by user prompts to produce responses in specific styles or formats (for example, returning answers strictly in JSON), giving users more control over how the model behaves

## Intended usage and limitations
**Benefits and intended usage**: GPT-4 was developed to generate high-quality text and process both text and image inputs, delivering human-level performance on various professional and academic benchmarks. GPT-4 can accurately follow simple and complex instructions, producing very reliable and creative, responses across a wide range of tasks. With enhanced capabilities in reasoning, coding assistance, and handling visual inputs such as diagrams, screenshots, or photos GPT rose far ahead of its previous models. 

With GPT-4 users can prompt the model to adopt diverse tones, styles, and formats (e.g.,responses strictly JSON or Shakespearean prose). The model can be integrated into various tools and applications like ChatGPT and its APIs are made for developers for easy integration into applications. It is also seen to be a strong use in and internal tools for support, sales, content moderation, and programming, GPT-4 is engineered to prioritize safety and alignment, refusing harmful requests while powering innovative solutions in conversational AI, education, and creative content generation.

**Limitations**: Although GPT-4 shows major improvements over its predecessors, it still has notable limitations. Despite being trained on vast amounts of data, GPT-4 is prone to hallucination—that is, confidently producing information that may be false, misleading, or not present in its training data. For this reason, users should review and fact-check responses, especially when dealing with sensitive or critical information. That said, GPT-4 has reduced hallucinations compared to earlier models such as GPT-3.5.

Since GPT-4’s training data only extends up to September 2021, it lacks knowledge of events or developments beyond that date, limiting its ability to provide current information.

The model can also reflect biases present in its training data, sometimes favoring certain viewpoints, groups, or cultural perspectives over others.

Additionally, GPT-4 does not always learn from its mistakes. It may repeat reasoning errors and can be overly trusting of false statements provided by users, making it susceptible to being misled.

## Model evaluation
GPT-4 was evaluated using a range of benchmarks designed to test both its reasoning ability and factual accuracy. For example, it was tested on the simulated bar exam usually taken by law students, where it scored in the top 10% of human test takers (compared to GPT-3.5, which landed in the bottom 10%), this showed  major progress in handling complex, professional-level tasks. 

The model was also measured on adversarial factuality tests, which are tricky questions designed to catch the model making confident but false statements; here GPT-4 performed 40% better than GPT-3.5. 

To further check how well it distinguishes fact from misleading input, GPT-4 was run on TruthfulQA, a benchmark built specifically to expose when models repeat misinformation. Finally, its broad reasoning skills were tested with MMLU (Massive Multitask Language Understanding), which involves over 14,000 multiple-choice questions across 57 subjects in multiple languages; GPT-4 outperformed previous models in nearly all languages tested, including low-resource ones like Swahili and Welsh.

These evaluations highlight how GPT-4 can be more reliable and useful across professional, academic, and multilingual settings.

## Risks and mitigations
**Risks**: Like many other language models, GPT-4 has certain risks. It can generate harmful advice, including suggestions that could negatively impact someone’s health or safety. For developers, it may produce code that contains bugs if not carefully reviewed and tested. Because of its tendency to hallucinate, GPT-4 may also provide inaccurate information, including false facts or references to people and events that never existed.

**Mitigation**: To address these risks, OpenAI applied several safety measures. The pre-training data was carefully filtered to remove harmful content. The model was tested with about 50 experts using adversarial factuality tests across different domains to identify and reduce inaccuracies and harmful outputs. Additionally, Reinforcement Learning with Human Feedback (RLHF) was used, where a reward system trained the model to distinguish between safe and unsafe requests. These mitigations significantly reduce risks, but they do not eliminate them completely.Users should still approach outputs with caution, especially in sensitive contexts.