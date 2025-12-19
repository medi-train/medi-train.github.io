---
title: "Augmenting Crosswalk Segmentation With Diffusion-Generated Data for Adverse Weather and Lighting Conditions"
description: "This study investigates the effectiveness of using diffusion-generated synthetic data to enhance crosswalk segmentation models for assistive navigation systems serving visually impaired individuals. We hypothesized that a Stable Diffusion model fine-tuned on a small collection of 150 first-person view (FPV) images could generate valuable training data representing diverse weather scenarios not present in the original dataset."
pubDate: 2025-11-04
authors:
    - "Krešimir Romić"
    - "Hrvoje Leventić"
    - "Marija Habijan"
    - "Irena Galić"
pdfUrl: "/papers/Augmenting_Crosswalk_Segmentation_With_Diffusion-Generated_Data_for_Adverse_Weather_and_Lighting_Conditions.pdf"
image: "/images/crosswalk.png"
tags:
  - "Crosswalk Segmentation"
  - "Data Augmentation"
  - "Stable Diffusion"
  - "Visually Impaired"
  - "Semantic Segmentation"
bibtex: |
    @article{romic2025augmenting,
        author = {Romić, Krešimir and Leventić, Hrvoje and Habijan, Marija and Galić, Irena},
        year = {2025},
        title = {Augmenting Crosswalk Segmentation With Diffusion-Generated Data for Adverse Weather and Lighting Conditions},
        journal = {IEEE Access},
        volume = {13},
        pages = {190379-190387},
        doi = {10.1109/ACCESS.2025.3629349}
    }
---

## Abstract

Training deep learning models for semantic segmentation requires substantial annotated datasets, which are often limited in diversity and size. This study investigates the effectiveness of using diffusion-generated synthetic data to enhance crosswalk segmentation models for assistive navigation systems serving visually impaired individuals. We hypothesized that a Stable Diffusion model fine-tuned on a small collection of 150 first-person view (FPV) images, predominantly captured in sunny conditions, could generate valuable training data representing diverse weather scenarios not present in the original dataset. To test this hypothesis, we created 1500 synthetic images with varying weather conditions using our fine-tuned Stable Diffusion model. We then trained several U-Net-based semantic segmentation models on different combinations of synthetic and original images. For evaluation, we developed a new high-quality test dataset containing 300 annotated real-world images captured across diverse weather conditions. Our results confirmed that models trained on a combination of real and synthetic images significantly outperformed those trained exclusively on the limited real-world dataset. The mixed-data model demonstrated superior generalization to weather conditions absent from the original training data, achieving higher performance metrics across all test scenarios. These findings underscore the potential of diffusion models for data augmentation when authentic datasets are constrained. The pipeline we propose offers an efficient, scalable, and adaptable approach applicable to other domains requiring synthetic data enhancement.
