---
permalink: /photography/
title: "Photography"
author_profile: true
---

<a href="https://www.instagram.com/photo_by_kevinz/" target="_blank" style="color: #e4405f; text-decoration: none; font-weight: 500;">
  <i class="fab fa-instagram"></i> My Instagram photography page
</a>

## Highlights

<!-- Photo list - add new photos here in desired order -->
{% assign photos = "
DSC_2528.jpeg,
DSC_2225.jpg,
DSC_2097.jpg,
DSC_1860.jpg,
DSC_1466.jpg, 
DSC_0104.JPG
" | split: "," %}

<div class="photo-gallery" style="margin: 2rem 0;">
  <div class="gallery-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;">
    {% for photo in photos %}
      {% assign photo_trimmed = photo | strip %}
      {% if photo_trimmed != "" %}
        <div class="photo-item" style="position: relative; overflow: hidden; border-radius: 8px; aspect-ratio: 1; cursor: pointer;" onclick="openModal('/photos/{{ photo_trimmed }}')">
          <img src="/photos/{{ photo_trimmed }}"
               alt="Photography by Kevin"
               style="width: 100%; height: 100%; object-fit: contain; display: block;"
               loading="lazy">
        </div>
      {% endif %}
    {% endfor %}
  </div>
</div>

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