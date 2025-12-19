---
title: "Evaluating Denoising Methods for 3D Ultrasound Uterus Segmentation with DynUNet"
description: "The uterus is a key reproductive organ whose morphology affects fertility and pregnancy outcomes. Recent advances in 3D transvaginal ultrasound (US) enable detailed volumetric imaging of uterine anatomy. However, automated analysis of 3D US volumes remains challenging since the uterus exhibits large inter-patient variability, US images suffer from speckle noise, low contrast, and artifacts. To address this, we propose a deep-learning (DL) pipeline for fully automatic 3D uterus segmentation using a DynUNet model."
pubDate: 2025-10-15
authors:
    - "Marija Habijan"
    - "Juraj Perić"
    - "Irena Galić"
pdfUrl: "/papers/Evaluating_Denoising_Me.pdf"
image: "/images/elmar2025.png"
tags:
  - "DynUNet"
  - "Medical Segmentation"
  - "Ultrasound Volumes"
  - "Ultrasound Denoising"
  - "3D Segmentation"
bibtex: |
    @inproceedings{
        author = {Habijan, Marija and Perić, Juraj and Galić, Irena},
        year = {2025},
        title = {Evaluating Denoising Methods for 3D Ultrasound Uterus Segmentation with DynUNet},
        booktitle = {67th International Symposium ELMAR-2025},
        pages = {131-134},
        doi = {10.1109/ELMAR66948.2025.11193753}
    }
---

## Abstract

The uterus is a key reproductive organ whose morphology affects fertility and pregnancy outcomes. Recent advances in 3D transvaginal ultrasound (US) enable detailed volumetric imaging of uterine anatomy. However, automated analysis of 3D US volumes remains challenging since the uterus exhibits large inter-patient variability, US images suffer from speckle noise, low contrast, and artifacts. To address this, we propose a deep-learning (DL) pipeline for fully automatic 3D uterus segmentation using a DynUNet model. We investigate several denoising methods including contrast enhancement, filtering, wavelet denoising and learning-based denoising to evaluate their effect on the final segmentation accuracy. Our experiments demonstrate that denoising with DnCNN significantly improves segmentation performance, achieving a Dice Similarity Coefficient (DSC) of 71.95% on the test set and 11% improvement over the baseline. These results show the importance of denoising methods for robust segmentation in noisy ultrasound images.
