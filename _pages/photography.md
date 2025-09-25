---
permalink: /photography/
title: "Photography"
author_profile: true
---

<a href="https://www.instagram.com/photo_by_kevinz/" target="_blank" style="color: #e4405f; text-decoration: none; font-weight: 500;">
  <i class="fab fa-instagram"></i> My Instagram photography page
</a>

## Highlights

<div style="position: relative; overflow: hidden; border-radius: 8px; margin: 1rem 0; cursor: pointer;" onclick="openModal('/photos/DSC_3105.NEF')">
  <img src="/photos/DSC_3105.NEF" alt="Photography by Kevin" style="width: 100%; height: auto; object-fit: contain; display: block;" loading="lazy">
</div>
**Glacier National Park, MT**


<div style="position: relative; overflow: hidden; border-radius: 8px; margin: 1rem 0; cursor: pointer;" onclick="openModal('/photos/DSC_3077.JPG')">
  <img src="/photos/DSC_3077.JPG" alt="Photography by Kevin" style="width: 100%; height: auto; object-fit: contain; display: block;" loading="lazy">
</div>
**Glacier National Park, MT**


<div style="position: relative; overflow: hidden; border-radius: 8px; margin: 1rem 0; cursor: pointer;" onclick="openModal('/photos/DSC_2528.jpeg')">
  <img src="/photos/DSC_2528.jpeg" alt="Photography by Kevin" style="width: 100%; height: auto; object-fit: contain; display: block;" loading="lazy">
</div>
**Pointe Mouillee, MI**


<div style="position: relative; overflow: hidden; border-radius: 8px; margin: 1rem 0; cursor: pointer;" onclick="openModal('/photos/DSC_2225.jpg')">
  <img src="/photos/DSC_2225.jpg" alt="Photography by Kevin" style="width: 100%; height: auto; object-fit: contain; display: block;" loading="lazy">
</div>
**Olympic National Park, WA**


<div style="position: relative; overflow: hidden; border-radius: 8px; margin: 1rem 0; cursor: pointer;" onclick="openModal('/photos/DSC_2097.jpg')">
  <img src="/photos/DSC_2097.jpg" alt="Photography by Kevin" style="width: 100%; height: auto; object-fit: contain; display: block;" loading="lazy">
</div>
**Seattle, WA**


<div style="position: relative; overflow: hidden; border-radius: 8px; margin: 1rem 0; cursor: pointer;" onclick="openModal('/photos/DSC_1860.jpg')">
  <img src="/photos/DSC_1860.jpg" alt="Photography by Kevin" style="width: 100%; height: auto; object-fit: contain; display: block;" loading="lazy">
</div>
**Clearwater Beach, FL**


<div style="position: relative; overflow: hidden; border-radius: 8px; margin: 1rem 0; cursor: pointer;" onclick="openModal('/photos/DSC_1466.jpg')">
  <img src="/photos/DSC_1466.jpg" alt="Photography by Kevin" style="width: 100%; height: auto; object-fit: contain; display: block;" loading="lazy">
</div>
**Chicago, IL**


<div style="position: relative; overflow: hidden; border-radius: 8px; margin: 1rem 0; cursor: pointer;" onclick="openModal('/photos/DSC_0104.JPG')">
  <img src="/photos/DSC_0104.JPG" alt="Photography by Kevin" style="width: 100%; height: auto; object-fit: contain; display: block;" loading="lazy">
</div>
**Lake Hudson, MI**


<!-- Modal for full-screen image viewing -->
<div id="imageModal" style="display: none; position: fixed; z-index: 1000; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.9);">
  <span style="position: absolute; top: 15px; right: 35px; color: #f1f1f1; font-size: 40px; font-weight: bold; cursor: pointer;" onclick="closeModal()">&times;</span>
  <img id="modalImage" style="margin: auto; display: block; max-width: 90%; max-height: 90%; margin-top: 5%;" src="" alt="Full size image">
</div>

<script>
function openModal(imageSrc) {
  document.getElementById('modalImage').src = imageSrc;
  document.getElementById('imageModal').style.display = 'block';
  document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeModal() {
  document.getElementById('imageModal').style.display = 'none';
  document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close modal when clicking outside the image
document.getElementById('imageModal').addEventListener('click', function(e) {
  if (e.target === this) {
    closeModal();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});
</script>