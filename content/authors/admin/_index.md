---
# Display name
title: Xu Huang (黄旭)

# Full name (for SEO)
first_name: Xu
last_name: Huang

# Status emoji
status:
  icon: ☕️

superuser: true

# Social network links
profiles:
  - icon: at-symbol
    url: 'ydove1031@gmail.com'
    label: E-mail Me
  - icon: brands/github
    url: https://ydove0324.github.io/hxresume/
    label: GitHub
  - icon: academicons/google-scholar
    url: 'https://scholar.google.com/citations?user=rCyq9oIAAAAJ&hl=en'
    label: Google Scholar

education:
  - area: BSc Computer Science and Technology
    institution: Beijing University of Posts and Telecommunications
    date_start: 2022-09-01
    date_end: 2026-06-30
    summary: |
      GPA: 93.3 / 100 (Rank: 4 / 388)

  - area: MPhil in Computer Science
    institution: Peking University
    date_start: 2026-09-01
    date_end: ''
    summary: |
      Advised by Prof. Daquan Zhou

interests:
  - Building Useful AI

work:
  - position: Research Intern
    company_name: Meituan — Beidou Program (美团北斗计划)
    date_start: 2026-02-01
    date_end: ''
    summary: |
      I am a major contributor to the development of discrete unified representations for the LongCat-Next and LongCat-Pro-V series.

      I am also a core member of the team working on visual agent post-training for foundation models.

  - position: Research Intern
    company_name: BAAI (Beijing Academy of Artificial Intelligence)
    date_start: 2025-06-01
    date_end: 2026-02-28
    summary: |
      Participating in the development of the next-generation Emu unified multimodal large model.  
      Major contributor to the video generation component of the unified model.

  - position: Research Intern
    company_name: Tencent
    date_start: 2024-02-01
    date_end: 2025-01-31
    summary: |
      Led a text/image-to-3D-layout project, controllably constructing 3D scenes from a predefined asset library.

  - position: Algorithm Engineering Intern
    company_name: Tencent
    date_start: 2023-07-01
    date_end: 2023-09-30
    summary: |
      Utilized Score Distillation Sampling (SdS) and differentiable rendering to train diffusion models for SVG vector generation.  
      [GitHub link](https://github.com/ydove0324/vector_fusion)

languages:
  - name: English
    percent: 75
  - name: Chinese
    percent: 100

awards:
  - title: CCSP (Collegiate Computer Systems & Programming Contest) – 6th Nationwide
    date: '2023-10-01'
    awarder: CCF
  - title: ACM-ICPC Gold Medal
    date: '2023-10-01'
    awarder: International Collegiate Programming Contest
  - title: CCPC Gold Medal
    date: '2023-11-01'
    awarder: Chinese Collegiate Programming Contest
  - title: NOI Silver Medal
    date: '2021-07-01'
    awarder: National Olympiad in Informatics

projects:
  - title: "Visual Agent Post-Training — Meituan"
    metadata: "2026"
    summary: |
      - Primarily responsible for visual agent post-training. Built task environments for PPT creation, HTML generation, interactive web development, and open-ended 3D scene construction using Blender and Three.js, and synthesized task data for post-training.
      - Developed evaluation rubrics for functional usability and visual aesthetics to guide evaluation and post-training.
      - Implemented automated, iterative optimization of agent harnesses and distilled effective harness strategies into the model.

  - title: "Vision Encoder Training — Meituan"
    summary: |
      - **Major contributor** to the development of highly compressed discrete visual representations for unified understanding and generation, validated internally and adopted in LongCat-Pro-V (1.6T) and the LongCat-Next series.
      - Systematically studied how scaling multi-level codebooks narrows the fidelity gap between discrete and continuous representations at high compression ratios, and how to integrate high-level semantic features with low-level pixel details.

publications:
  - title: "Emu3.5: Native Multimodal Models are World Learners"
    metadata: "October 2025 · Core contributor"
    url: "https://arxiv.org/abs/2510.26583"
    summary: |
      Mainly contributed to the diffusion decoder, tokenizer, and Discrete Diffusion Adaption. Emu3.5 is one of the most advanced open-source native multimodal models developed by BAAI.

  - title: "SAE (Semantic AutoEncoder)"
    metadata: "CVPR · January 2026"
    summary: |
      High-channel autoencoder built on DINOv3/SigLIP2 semantic representation encoders; end-to-end encoder/decoder training with geometry-aware regularization and a refined training recipe to balance semantic understanding, generation quality, and reconstruction fidelity.

      **SAE-T2I — Project Lead.** A scaling-oriented extension of SAE for text-to-image generation, using SAE as the autoencoder backbone for high-quality image synthesis.

  - title: "Imaginarium: Vision-guided High-Quality Scene Layout Design"
    metadata: "SIGGRAPH Asia Oral & TOG · Co-first author · January 2025"
    url: "https://arxiv.org/abs/2510.15564"
    summary: |
      - Used an image generation model to create scene images, segmented and analyzed the images, and retrieved relevant assets from a predefined library.
      - Trained a DINOv2 model to estimate the 6D pose and scale of each object.
      - Fine-tuned the image generation model using rejection sampling to improve similarity between generated images and the asset library.

      Reviews: 3 / 3 / 3 / 1 (all positive).

  - title: "QUITO-X: A New Perspective on Context Compression from the Information Bottleneck Theory"
    metadata: "EMNLP · Co-first author"
    url: "https://arxiv.org/abs/2408.10497"
    summary: |
      Used a small model as a proxy for a large model, using attention scores to identify key tokens during inference and compress redundant tokens to reduce the large model's inference cost.

---


I am Xu Huang, an MPhil student at Peking University, advised by Prof. Daquan Zhou. I am now interested in building useful AI that can act, evaluate its own work, and build complex systems through iterative, vision-in-the-loop reflection.
I envision systems that can even build their own benchmarks, identify their own weaknesses, and create targeted environments and data to continually improve themselves.

**Fun fact:** In the pre-agent era, I was the technical lead at an AI application startup that secured funding from MiraclePlus (奇绩创坛). Along the way, I gained hands-on experience with frontend and backend development, AWS infrastructure and deployment, a range of databases, and edge functions.

In the pre-GPT era, I won several programming competition awards, including an ACM-ICPC Gold Medal, a CCPC Gold Medal, and an NOI Silver Medal.
