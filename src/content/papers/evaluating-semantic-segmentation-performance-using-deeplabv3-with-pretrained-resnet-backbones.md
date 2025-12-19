---
title: "Evaluating Semantic Segmentation Performance Using DeepLabv3+ with Pretrained ResNet Backbones and Multi-Class Annotations"
description: "Semantic segmentation is a critical task in computer vision, enabling dense classification of image regions. This work investigates the effectiveness of the DeepLabv3+ architecture for binary semantic segmentation using annotated image data. A pretrained ResNet-101 backbone is employed to extract deep features, while Atrous Spatial Pyramid Pooling (ASPP) and a decoder module refine the segmentation outputs."
pubDate: 2025-12-12
authors:
    - "Matej Spajić"
    - "Marija Habijan"
    - "Danijel Marinčić"
    - "Irena Galić"
pdfUrl: "/papers/OTO_2025___paper25.pdf"
image: "/images/oto.png"
tags:
  - "Artificial Intelligence"
  - "DeepLabv3+"
  - "Histopathology"
  - "Medical Image Analysis"
  - "Semantic Segmentation"
  - "Weakly Supervised Learning"
bibtex: |
    @article{spajic2025evaluating,
        author = {Spajić, Matej and Habijan, Marija and Marinčić, Danijel and Galić, Irena},
        year = {2025},
        title = {Evaluating Semantic Segmentation Performance Using DeepLabv3+ with Pretrained ResNet Backbones and Multi-Class Annotations},
        journal = {Journal Not Specified},
        note = {Submitted for publication}
    }
---

## Abstract

Semantic segmentation is a critical task in computer vision, enabling dense classification of image regions. This work investigates the effectiveness of the DeepLabv3+ architecture for binary semantic segmentation using annotated image data. A pretrained ResNet-101 backbone is employed to extract deep features, while Atrous Spatial Pyramid Pooling (ASPP) and a decoder module refine the segmentation outputs. The dataset provides per-image annotations indicating class presence, which are leveraged to approximate segmentation masks for training purposes. Various data augmentation techniques and training strategies were applied to support effective learning and reduce overfitting. Experimental results on the MHIST dataset show that the proposed pipeline achieves strong performance despite the lack of pixel-level annotations, with a mean Intersection-over-Union (mIoU) of 0.76 and a mean Dice coefficient of 0.84. These confirm the potential of weakly supervised segmentation using class-aware CAMs and deep pretrained encoders for structured pixel-level prediction tasks in medical imaging.
