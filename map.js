// Initialize Leaflet map centered on Île de la Cité
function initMap() {
  const map = L.map('map').setView([48.855, 2.346], 15);

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Add markers for key landmarks
  L.marker([48.8529, 2.3499]).addTo(map)
    .bindPopup('Notre-Dame Cathedral');
  L.marker([48.8553, 2.3453]).addTo(map)
    .bindPopup('Sainte-Chapelle');
  L.marker([48.8554, 2.3448]).addTo(map)
    .bindPopup('Conciergerie');
}

// Load map when document is ready
document.addEventListener('DOMContentLoaded', initMap);
