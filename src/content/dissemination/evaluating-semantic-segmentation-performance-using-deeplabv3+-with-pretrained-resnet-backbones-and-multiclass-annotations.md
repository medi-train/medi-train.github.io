---
title: "Evaluating Semantic Segmentation Performance Using DeepLabv3+ with Pretrained ResNet Backbones and Multi-Class Annotations"
description: "Our student presented a paper on Semantic Segmentation in Histopathology at the OTO 2025 conference. The research validated a DeepLabv3+ pipeline that uses weakly supervised learning to generate accurate predictions (0.84 Dice score) from limited data, offering a scalable solution for medical image analysis."
eventDate: 2025-12-12
eventType: "conference"
presenters:
  - "Matej Spajić"
  - "Marija Habijan"
  - "Danijel Marinčić"
  - "Irena Galić"
location: "Osijek, Croatia"
organization: "Mostart 2025"
slidesUrl: "/slides/mhist2025-presentation.ppt"
image: "/images/dissemination/oto2025.png"
tags:
    - "Semantic Segmentation"
    - "Deep Learning"
    - "Histopathology"
    - "Weakly Supervised Learning"
    - "Medical Image Analysis"
    - "Computer Vision"
    - "Artificial Intelligence"
---

## Abstract

Semantic segmentation is a critical task in computer vision, enabling dense classification of image regions. This work investigates the effectiveness of the DeepLabv3+ architecture for
binary semantic segmentation using annotated image data. A pretrained ResNet-101 back- bone is employed to extract deep features, while Atrous Spatial Pyramid Pooling (ASPP)
and a decoder module refine the segmentation outputs. The dataset provides per-image annotations indicating class presence, which are leveraged to approximate segmentation
masks for training purposes. Various data augmentation techniques and training strategies were applied to support effective learning and reduce overfitting. Experimental results on
the MHIST dataset show that the proposed pipeline achieves strong performance despite  the lack of pixel-level annotations, with a mean Intersection-over-Union (mIoU) of 0.76 and 
a mean Dice coefficient of 0.84. These confirm the potential of weakly supervised segmen-  tation using class-aware CAMs and deep pretrained encoders for structured pixel-level 
prediction tasks in medical imaging.
