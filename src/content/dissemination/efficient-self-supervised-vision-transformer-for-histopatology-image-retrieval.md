---
title: "Efficient Self-Supervised Vision Transformers for Histopathology Image Retrieval"
description: "We presented our paper at EUSIPCO 2025. The study demonstrates that self-supervised Vision Transformers provide a faster, more accurate alternative to CNNs for retrieving medical images. The dissemination emphasized the system's robustness across multiple tissue datasets and its efficiency for real-time clinical applications."
eventDate: 2025-08-09
eventType: "conference"
presenters:
  - "Marija Habijan"
location: "Palermo, Italy"
organization: "EUSIPCO 2025"
slidesUrl: "/slides/mostart2025_presentation.pdf"
image: "/images/dissemination/mostart2025.png"
tags:
  - "Machine Learning"
  - "Medical Image Analysis"
  - "Medicine"
  - "Computer Vision"
  - "Image Segmentation"
  - "Computer Vision"
---

## Abstract

Histopathology image retrieval is a crucial task in computational pathology, facilitating case-based reasoning and aiding in diagnosis and research. This work presents an efficient retrieval system based on Efficient Self-Supervised Vision Transformers (EsViT), which generates robust feature representations without labeled data. We fine-tune a pre-trained EsViT model on multiple histopathology datasets, including BracS, CRC and BATCH. The system extracts deep feature embeddings from query images and retrieves similar cases from an indexed feature database using k-nearest neighbors (k-NN) search. Experimental results show that EsViT-based retrieval significantly outperforms CNN-based approaches, achieving mAP@10 of 78.4% (BracS), 74.9% (CRC), and 79.1% (BATCH), with Precision@10 up to 81.2%. Additionally, EsViT reduces feature extraction time to 7.5 ms per image, making it faster and more scalable than CNN-based methods. Our findings demonstrate that self-supervised vision transformers enable accurate, scalable histopathology image retrieval, with applications in digital pathology and clinical decision support. Index Terms—histopathology image retrieval, self-supervised learning, vision transformers, EsViT, deep feature extraction, medical imaging.
