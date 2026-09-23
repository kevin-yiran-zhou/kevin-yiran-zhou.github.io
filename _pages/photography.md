---
permalink: /photography/
title: "Photography"
author_profile: true
---

<a href="https://www.instagram.com/photo_by_kevinz/" target="_blank" style="color: #e4405f; text-decoration: none; font-weight: 500;">
  <i class="fab fa-instagram"></i> My Instagram photography page
</a>

<style>
.photo-gallery {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
  margin: 0.75rem 0 0.25rem;
  align-items: start;
}

@media (min-width: 600px) {
  .photo-gallery {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.photo-container {
  margin: 0;
  width: 100%;
  min-width: 0;
}

.photo-container a {
  display: block;
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 8px;
}

.photo-container img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.page__content .photo-container a:hover img {
  box-shadow: none;
  transform: none;
}

.photo-video {
  display: block;
  width: 100%;
  margin: 0.75rem 0 0.25rem;
  border-radius: 8px;
  background: #000;
}
</style>

<h2>Monterey Bay, CA</h2>
<video class="photo-video" autoplay loop muted playsinline>
  <source src="/photos/whale_jump.mp4" type="video/mp4">
</video>

<h2>New York City, NY</h2>
<div class="photo-gallery">
  <div class="photo-container">
    <a href="/photos/mix.jpg" target="_blank">
      <img src="/photos/mix.jpg" alt="New York City, NY" loading="lazy">
    </a>
  </div>
</div>

<h2>Glacier National Park, MT</h2>
<div class="photo-gallery">
  <div class="photo-container">
    <a href="/photos/DSC_3105.jpeg" target="_blank">
      <img src="/photos/DSC_3105.jpeg" alt="Glacier National Park, MT" loading="lazy">
    </a>
  </div>
  <div class="photo-container">
    <a href="/photos/DSC_3077.JPG" target="_blank">
      <img src="/photos/DSC_3077.JPG" alt="Glacier National Park, MT" loading="lazy">
    </a>
  </div>
</div>

<h2>Pointe Mouillee, MI</h2>
<div class="photo-gallery">
  <div class="photo-container">
    <a href="/photos/DSC_2528.jpeg" target="_blank">
      <img src="/photos/DSC_2528.jpeg" alt="Pointe Mouillee, MI" loading="lazy">
    </a>
  </div>
</div>

<h2>Olympic National Park, WA</h2>
<div class="photo-gallery">
  <div class="photo-container">
    <a href="/photos/DSC_2225.jpg" target="_blank">
      <img src="/photos/DSC_2225.jpg" alt="Olympic National Park, WA" loading="lazy">
    </a>
  </div>
</div>

<h2>Seattle, WA</h2>
<div class="photo-gallery">
  <div class="photo-container">
    <a href="/photos/DSC_2097.jpg" target="_blank">
      <img src="/photos/DSC_2097.jpg" alt="Seattle, WA" loading="lazy">
    </a>
  </div>
</div>

<h2>Clearwater Beach, FL</h2>
<div class="photo-gallery">
  <div class="photo-container">
    <a href="/photos/DSC_1860.jpg" target="_blank">
      <img src="/photos/DSC_1860.jpg" alt="Clearwater Beach, FL" loading="lazy">
    </a>
  </div>
</div>

<h2>Chicago, IL</h2>
<div class="photo-gallery">
  <div class="photo-container">
    <a href="/photos/DSC_1466.jpg" target="_blank">
      <img src="/photos/DSC_1466.jpg" alt="Chicago, IL" loading="lazy">
    </a>
  </div>
</div>

<h2>Lake Hudson, MI</h2>
<div class="photo-gallery">
  <div class="photo-container">
    <a href="/photos/DSC_0104.JPG" target="_blank">
      <img src="/photos/DSC_0104.JPG" alt="Lake Hudson, MI" loading="lazy">
    </a>
  </div>
</div>
