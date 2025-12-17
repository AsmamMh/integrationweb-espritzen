// Initialize map
const map = L.map('map').setView([36.8992, 10.1897], 16); // Esprit El Ghazela

// Map tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

// Buttons
document.getElementById('zoomInBtn').onclick = () => map.zoomIn();
document.getElementById('zoomOutBtn').onclick = () => map.zoomOut();
document.getElementById('centerBtn').onclick = () =>
  map.setView([36.8992, 10.1897], 16);
