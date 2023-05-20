// Initialize the map
var map = L.map('map').setView([51.505, -0.09], 13);

// Add the tile layer from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
  maxZoom: 18
}).addTo(map);

// Add a marker to the map
var marker = L.marker([51.5, -0.09]).addTo(map);

// Add a popup to the marker
marker.bindPopup("<b>Hello!</b><br>This is a Leaflet.js marker.").openPopup();
