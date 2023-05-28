// Initialize the map
var map = L.map('map').setView([27.57, 34.27], 13);

// Add the tile layer from OpenStreetMap
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
//   maxZoom: 18
// }).addTo(map);

L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
}).addTo(map);

// Add a marker to the map
var marker = L.marker([27.57, 34.27]).addTo(map);

// Add a popup to the marker
// marker.bindPopup("<b>Hello!</b><br>This is a Leaflet.js marker.").openPopup();
marker.bindPopup("<b>Hello!</b><br>This is a Leaflet.js marker.");

