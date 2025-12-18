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

Semantic segmentation is a critical task in computer vision, enabling dense classification of 2
image regions. This work investigates the effectiveness of the DeepLabv3+ architecture for 3
binary semantic segmentation using annotated image data. A pretrained ResNet-101 back- 4
bone is employed to extract deep features, while Atrous Spatial Pyramid Pooling (ASPP) 5
and a decoder module refine the segmentation outputs. The dataset provides per-image 6
annotations indicating class presence, which are leveraged to approximate segmentation 7
masks for training purposes. Various data augmentation techniques and training strategies 8
were applied to support effective learning and reduce overfitting. Experimental results on 9
the MHIST dataset show that the proposed pipeline achieves strong performance despite 10
the lack of pixel-level annotations, with a mean Intersection-over-Union (mIoU) of 0.76 and 11
a mean Dice coefficient of 0.84. These confirm the potential of weakly supervised segmen- 12
tation using class-aware CAMs and deep pretrained encoders for structured pixel-level 13
prediction tasks in medical imaging.
