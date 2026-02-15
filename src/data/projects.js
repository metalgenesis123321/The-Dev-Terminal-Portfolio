// src/data/projects.js
// All projects — images intentionally empty.

export const projects = [

  // ─── Already in portfolio ──────────────────────────────────────────────────

  {
    id: 'mri-to-ct-translation',
    title: 'Hybrid Framework for MRI-to-CT Translation for Medical Imaging Applications',
    short: 'Deep learning pipeline combining latent diffusion models, Swin Transformers, and Bayesian uncertainty quantification for medical image synthesis.',
    bullets: [
      'Built a deep learning pipeline combining latent diffusion models, Swin Transformers, and Bayesian uncertainty quantification (Monte Carlo Dropout, Gaussian Processes, Conformal Prediction).',
      'Generated synthetic CT scans with enhanced anatomical fidelity and clinically interpretable reliability for radiation oncology planning.'
    ],
    tech: ['PyTorch', 'Swin Transformer', 'Latent Diffusion Models', 'Bayesian UQ'],
    repo: null,
    live: null,
    images: []
  },

  {
    id: 'aws-face-recognition',
    title: 'Scalable Face Recognition Application on AWS Cloud and Edge Infrastructure',
    short: 'Serverless pipeline for real-time face recognition using AWS Lambda, IoT Greengrass, and FaceNet with fault-tolerant cloud-edge scalability.',
    bullets: [
      'Designed a fault-tolerant serverless pipeline using AWS Lambda, IoT Greengrass, and ECR with MTCNN + FaceNet for real-time video processing.',
      'Integrated SQS messaging and EC2-emulated IoT devices to enable low-latency, fault-tolerant edge–cloud scalability.'
    ],
    tech: ['AWS Lambda', 'AWS IoT Greengrass', 'ECR', 'MTCNN', 'FaceNet', 'Python'],
    repo: 'https://github.com/metalgenesis123321/edge-cloud-face-recognition-iot-greengrass',
    live: null,
    images: []
  },

  {
    id: 'mlp-forecasting',
    title: 'Time-Series Forecasting with Multi-Layer Perceptron (MLP)',
    short: 'MLP-based time-series forecasting model trained and validated for high accuracy on numerical datasets.',
    bullets: [
      'Developed an MLP with two hidden layers and ReLU activations, trained using Adam optimizer and MSE loss.',
      'Validated with train/validation/test splits, achieving 0.00209 MSE and demonstrating high forecasting accuracy.'
    ],
    tech: ['Python', 'TensorFlow', 'MLP'],
    repo: null,
    live: null,
    images: []
  },

  // ─── Newly added from GitHub ───────────────────────────────────────────────

  {
    id: 'thinkmachines',
    title: 'ThinkMachines — IBM Hackathon',
    short: 'Cloud-powered Python application built during an IBM hackathon. Combines IBM Cloud services with AI-driven logic to solve a real-world problem under time pressure.',
    bullets: [
      'Built end-to-end in Python during an IBM hackathon, integrating IBM Cloud APIs for scalable deployment.',
      'Designed an AI-assisted solution pipeline under hackathon constraints, from ideation to working prototype.',
      'Leveraged IBM watsonx / cloud tooling to power the core intelligence of the application.'
    ],
    tech: ['Python', 'IBM Cloud'],
    repo: 'https://github.com/metalgenesis123321/ThinkMachines',
    live: null,
    images: []
  },

  {
    id: 'dm-hw-3',
    title: 'DM-HW-3 — Data Mining Experiments',
    short: 'A data mining assignment that grew into a full Python experiment — covering classification, clustering, and pattern extraction on real datasets.',
    bullets: [
      'Implemented and compared multiple data mining algorithms including classification and clustering techniques.',
      'Applied feature engineering and preprocessing pipelines to improve model accuracy on structured datasets.',
      'Produced detailed analysis and visualizations to interpret and communicate findings.'
    ],
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    repo: 'https://github.com/metalgenesis123321/DM-HW-3',
    live: null,
    images: []
  },

  {
    id: 'polysage-ai',
    title: 'PolySage_AI — Claude Builder Club Hackathon',
    short: 'An AI-powered assistant built for the Anthropic Claude Builder Club Hackathon. Uses the Claude API to deliver intelligent, context-aware responses across multiple domains.',
    bullets: [
      'Built an AI assistant leveraging the Anthropic Claude API for context-rich, multi-turn conversations.',
      'Developed for the Claude Builder Club Hackathon, focusing on practical and creative use of LLM capabilities.',
      'Designed a clean Python interface for querying the model and handling structured AI responses.'
    ],
    tech: ['Python', 'Claude API', 'LLM'],
    repo: 'https://github.com/metalgenesis123321/PolySage_AI',
    live: null,
    images: []
  },

  {
    id: 'interactive-analytics',
    title: 'Linking Charts and Adding Interactivity — Interactive Analytics Dashboard',
    short: 'A JavaScript-powered data visualization project that transforms static charts into an interactive, linked analytical experience.',
    bullets: [
      'Built an interactive analytics dashboard in JavaScript with cross-linked charts — selecting data in one chart filters all others.',
      'Implemented dynamic filtering, hover interactions, and smooth transitions to make data exploration intuitive.',
      'Designed with a focus on making data feel less like homework and more like play.'
    ],
    tech: ['JavaScript', 'D3.js', 'HTML', 'CSS'],
    repo: 'https://github.com/metalgenesis123321/Interactive-Analytics',
    live: null,
    images: []
  },

  {
    id: 'stampede-detection',
    title: 'Stampede Detection — Crowd Safety with Computer Vision',
    short: 'A Jupyter Notebook-based computer vision system that detects crowd density and dangerous movement patterns to help prevent stampede events.',
    bullets: [
      'Built a crowd analysis pipeline using computer vision techniques to detect high-density zones and abnormal movement patterns.',
      'Used optical flow and density estimation to identify early warning signals of potential stampede conditions.',
      'Explored real-world public safety applications of CV models on crowd footage datasets.'
    ],
    tech: ['Python', 'OpenCV', 'Jupyter Notebook', 'NumPy'],
    repo: 'https://github.com/metalgenesis123321/Stampede-Detection',
    live: null,
    images: []
  },

  {
    id: 'elastic-face-recognition-aws',
    title: 'Elastic Face Recognition on AWS — Auto-Scaling EC2 System',
    short: 'A custom-controlled auto-scaling EC2 system for face recognition workloads, designed to handle variable traffic with minimal latency and cost overhead.',
    bullets: [
      'Designed an auto-scaling EC2 architecture with a custom controller that dynamically provisions and terminates instances based on request queue depth.',
      'Deployed MTCNN + FaceNet for face detection and recognition across a fleet of EC2 worker instances.',
      'Achieved efficient resource utilization by decoupling request ingestion (web tier) from processing (app tier) using SQS.'
    ],
    tech: ['Python', 'AWS EC2', 'AWS SQS', 'MTCNN', 'FaceNet'],
    repo: 'https://github.com/metalgenesis123321/elastic-face-recognition-aws',
    live: null,
    images: []
  },

  {
    id: 'aws-iaas-image-classification',
    title: 'AWS IaaS Image Classification Service',
    short: 'A lightweight web-tier application on AWS IaaS infrastructure that classifies uploaded images using a pre-trained model, backed by S3 storage and SimpleDB for fast lookups.',
    bullets: [
      'Built a three-tier web service on AWS IaaS: a web tier for request intake, an app tier for classification, and S3 + SimpleDB for storage and result caching.',
      'Implemented result caching with SimpleDB to avoid redundant inference and reduce average response time.',
      'Designed for simplicity and scalability — the web tier is stateless and the app tier processes jobs asynchronously.'
    ],
    tech: ['Python', 'AWS S3', 'AWS SimpleDB', 'AWS EC2'],
    repo: 'https://github.com/metalgenesis123321/aws-iaas-image-classification-service',
    live: null,
    images: []
  },

  {
    id: 'dev-terminal-portfolio',
    title: 'The Dev Terminal Portfolio',
    short: 'This portfolio — a terminal-themed React site that feels like a real shell. Built with Vite, Tailwind, Framer Motion, and Three.js for the animated background.',
    bullets: [
      'Designed and built a terminal-themed portfolio using React + Vite, with a Three.js animated wave background.',
      'Implemented keyboard shortcuts (p, r, c), animated typewriter output in the hero terminal, and smooth scroll navigation.',
      'Styled entirely with Tailwind CSS and Framer Motion for entrance animations and interactive project cards.'
    ],
    tech: ['React', 'JavaScript', 'Three.js', 'Tailwind CSS', 'Framer Motion'],
    repo: 'https://github.com/metalgenesis123321/The-Dev-Terminal-Portfolio',
    live: 'https://shravan.site',
    images: []
  },

  {
    id: 'portfolio-old',
    title: 'Portfolio — Old (v1)',
    short: 'The original portfolio site — a relic from the before-times. A clean HTML/CSS personal site that predates the terminal era.',
    bullets: [
      'Built a static personal portfolio in plain HTML and CSS — no frameworks, no build tooling, just the fundamentals.',
      'Served as the predecessor to the current terminal-themed portfolio and remains a reference point for how far things have come.'
    ],
    tech: ['HTML', 'CSS'],
    repo: 'https://github.com/metalgenesis123321/Portfolio---Old',
    live: null,
    images: []
  }

]