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
<!-- Format: filename|location -->
{% assign photo_data = "
DSC_3105.NEF|Glacier National Park, MT,
DSC_3077.JPG|Glacier National Park, MT,
DSC_2528.jpeg|Pointe Mouillee, MI,
DSC_2225.jpg|Olympic National Park, WA,
DSC_2097.jpg|Seattle, WA,
DSC_1860.jpg|Clearwater Beach, FL,
DSC_1466.jpg|Chicago, IL, 
DSC_0104.JPG|Lake Hudson, MI
" | split: "," %}

<div class="photo-gallery" style="margin: 2rem 0;">
  <div class="gallery-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;">
    {% for photo_entry in photo_data %}
      {% assign photo_entry_trimmed = photo_entry | strip %}
      {% if photo_entry_trimmed != "" %}
        {% assign photo_parts = photo_entry_trimmed | split: "|" %}
        {% assign filename = photo_parts[0] | strip %}
        {% assign location = photo_parts[1] | strip %}
        <div class="photo-item" style="border-radius: 8px; overflow: hidden; background: #f8f9fa;">
          <div style="position: relative; aspect-ratio: 1; cursor: pointer;" onclick="openModal('/photos/{{ filename }}')">
            <img src="/photos/{{ filename }}"
                 alt="Photography by Kevin"
                 style="width: 100%; height: 100%; object-fit: contain; display: block;"
                 loading="lazy">
          </div>
          {% if location != "" %}
            <div style="padding: 0.75rem; text-align: center; background: #f8f9fa; border-top: 1px solid #e9ecef;">
              <span style="font-size: 0.9rem; color: #6c757d; font-style: italic;">{{ location }}</span>
            </div>
          {% endif %}
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