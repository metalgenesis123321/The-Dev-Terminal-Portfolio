// src/data/projects.js
// Projects extracted from resume — images intentionally empty.

export const projects = [
  {
    id: 'mri-to-ct-translation',
    title: 'Hybrid Framework for MRI-to-CT Translation for Medical Imaging Applications',
    short: 'Deep learning pipeline combining latent diffusion models, Swin Transformers, and Bayesian uncertainty quantification for medical image synthesis.',
    bullets: [
      'Built a deep learning pipeline combining latent diffusion models, Swin Transformers, and Bayesian uncertainty quantification (Monte Carlo Dropout, Gaussian Processes, Conformal Prediction).',
      'Generated synthetic CT scans with enhanced anatomical fidelity and clinically interpretable reliability for radiation oncology planning.'
    ],
    tech: [
      'PyTorch',
      'Swin Transformer',
      'Latent Diffusion Models',
      'Bayesian UQ'
    ],
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
    tech: [
      'AWS Lambda',
      'AWS IoT Greengrass',
      'ECR',
      'MTCNN',
      'FaceNet'
    ],
    repo: null,
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
    tech: [
      'Python',
      'TensorFlow',
      'MLP'
    ],
    repo: null,
    live: null,
    images: []
  }
]
