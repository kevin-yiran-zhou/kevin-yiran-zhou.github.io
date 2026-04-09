---
permalink: /photography/
title: "Photography"
author_profile: true
---

<a href="https://www.instagram.com/photo_by_kevinz/" target="_blank" style="color: #e4405f; text-decoration: none; font-weight: 500;">
  <i class="fab fa-instagram"></i> My Instagram photography page
</a>

## Highlights

<style>
/* Longest edge of each photo = square side (capped on wide screens). Tune 300px if you like. */
.photo-gallery {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 1.25rem;
  align-items: start;
}

@media (min-width: 600px) {
  .photo-gallery {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.photo-container {
  position: relative;
  margin: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  min-width: 0;
}

.photo-container a {
  display: block;
  position: relative;
  width: min(100%, 300px);
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
  transition: transform 0.2s ease, filter 0.2s ease;
}

.photo-container:hover img {
  transform: scale(1.02);
  filter: brightness(0.8);
}

.location-overlay {
  position: absolute;
  top: 15px;
  left: 15px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  font-weight: 500;
  font-size: 14px;
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
  z-index: 10;
}

.photo-container:hover .location-overlay {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

<div class="photo-gallery">

<div class="photo-container">
  <a href="/photos/mix.jpg" target="_blank">
    <img src="/photos/mix.jpg" alt="Photography by Kevin" loading="lazy">
    <div class="location-overlay">New York City, NY</div>
  </a>
</div>

<div class="photo-container">
  <a href="/photos/DSC_3105.jpeg" target="_blank">
    <img src="/photos/DSC_3105.jpeg" alt="Photography by Kevin" loading="lazy">
    <div class="location-overlay">Glacier National Park, MT</div>
  </a>
</div>

<div class="photo-container">
  <a href="/photos/DSC_3077.JPG" target="_blank">
    <img src="/photos/DSC_3077.JPG" alt="Photography by Kevin" loading="lazy">
    <div class="location-overlay">Glacier National Park, MT</div>
  </a>
</div>

<div class="photo-container">
  <a href="/photos/DSC_2528.jpeg" target="_blank">
    <img src="/photos/DSC_2528.jpeg" alt="Photography by Kevin" loading="lazy">
    <div class="location-overlay">Pointe Mouillee, MI</div>
  </a>
</div>

<div class="photo-container">
  <a href="/photos/DSC_2225.jpg" target="_blank">
    <img src="/photos/DSC_2225.jpg" alt="Photography by Kevin" loading="lazy">
    <div class="location-overlay">Olympic National Park, WA</div>
  </a>
</div>

<div class="photo-container">
  <a href="/photos/DSC_2097.jpg" target="_blank">
    <img src="/photos/DSC_2097.jpg" alt="Photography by Kevin" loading="lazy">
    <div class="location-overlay">Seattle, WA</div>
  </a>
</div>

<div class="photo-container">
  <a href="/photos/DSC_1860.jpg" target="_blank">
    <img src="/photos/DSC_1860.jpg" alt="Photography by Kevin" loading="lazy">
    <div class="location-overlay">Clearwater Beach, FL</div>
  </a>
</div>

<div class="photo-container">
  <a href="/photos/DSC_1466.jpg" target="_blank">
    <img src="/photos/DSC_1466.jpg" alt="Photography by Kevin" loading="lazy">
    <div class="location-overlay">Chicago, IL</div>
  </a>
</div>

<div class="photo-container">
  <a href="/photos/DSC_0104.JPG" target="_blank">
    <img src="/photos/DSC_0104.JPG" alt="Photography by Kevin" loading="lazy">
    <div class="location-overlay">Lake Hudson, MI</div>
  </a>
</div>

</div>

