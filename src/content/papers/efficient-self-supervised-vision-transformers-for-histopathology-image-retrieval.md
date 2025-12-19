---
title: "Efficient Self-Supervised Vision Transformers for Histopathology Image Retrieval"
description: "Histopathology image retrieval is a crucial task in computational pathology, facilitating case-based reasoning and aiding in diagnosis and research. This work presents an efficient retrieval system based on Efficient Self-Supervised Vision Transformers (EsViT), which generates robust feature representations without labeled data."
pubDate: 2025-11-17
authors:
    - "Marija Habijan"
    - "Petar Nakić"
    - "Irena Galić"
    - "Danijel Marinčić"
    - "Josip Samardžić"
    - "Aleksandra Pižurica"
pdfUrl: "/papers/EUSIPCO2025.pdf"
image: "/images/eusipco.png"
tags:
  - "Histopathology Image Retrieval"
  - "Self-Supervised Learning"
  - "Vision Transformers"
  - "EsViT"
  - "Deep Feature Extraction"
  - "Medical Imaging"
bibtex: |
    @inproceedings{habijan2025efficient,
        author = {Habijan, Marija and Nakić, Petar and Galić, Irena and Marinčić, Danijel and Samardžić, Josip and Pižurica, Aleksandra},
        year = {2025},
        title = {Efficient Self-Supervised Vision Transformers for Histopathology Image Retrieval},
        booktitle = {33rd European Signal Processing Conference (EUSIPCO 2025)},
        pages = {1557-1561},
        isbn = {978-9-46-459362-4}
    }
---

## Abstract

Histopathology image retrieval is a crucial task in computational pathology, facilitating case-based reasoning and aiding in diagnosis and research. This work presents an efficient retrieval system based on Efficient Self-Supervised Vision Transformers (EsViT), which generates robust feature representations without labeled data. We fine-tune a pre-trained EsViT model on multiple histopathology datasets, including BracS, CRC and BATCH. The system extracts deep feature embeddings from query images and retrieves similar cases from an indexed feature database using k-nearest neighbors (k-NN) search. Experimental results show that EsViT-based retrieval significantly outperforms CNN-based approaches, achieving mAP@10 of 78.4% (BracS), 74.9% (CRC), and 79.1% (BATCH), with Precision@10 up to 81.2%. Additionally, EsViT reduces feature extraction time to 7.5 ms per image, making it faster and more scalable than CNN-based methods. Our findings demonstrate that self-supervised vision transformers enable accurate, scalable histopathology image retrieval, with applications in digital pathology and clinical decision support.
