

function parseWayPointStringToArrayObject(string) {
	var trimmedString = string.trim();
	var stringWithoutCommas = trimmedString.replace(/,/g, "");
	var numberStrings = stringWithoutCommas.split(" ");

	var numbers = numberStrings.map(function(string_num){
		return parseFloat(string_num)
	}) 
	return numbers

}

function createMultipleWayPoints(textarea) {
	var lines = textarea.split('\n');
	console.log("Lines");
	console.log(lines); // Output each line separately (you can modify this based on your requirement)

	for (let i = 0; i < lines.length; i++) {
		var waypoint_line = lines[i];
		console.log("waypt_line");
		console.log(waypoint_line); // Output each line separately (you can modify this based on your requirement)
		var waypoint_line_to_obj = parseWayPointStringToArrayObject(waypoint_line)
		console.log(waypoint_line_to_obj); // Output each line separately (you can modify this based on your requirement)
		L.marker(waypoint_line_to_obj).addTo(map)
	}

}

// Initialize the map
var map = L.map('map').setView([27.57, 34.27], 13);
var form = document.getElementById("submitWayPoint");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  var formData = new FormData(form);

  // Get the form values
  var waypoints = formData.get("submitWayPoint");

  // Do something with the form data
  createMultipleWayPoints(waypoints)

//   console.log(typeof waypoint_obj);
  

  // You can perform further operations with the data here or send it to a server using AJAX, etc.
//   L.marker(waypoint_obj).addTo(map)
});



L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 5
}).addTo(map);

// Add a marker to the map
// var marker = L.marker([27.57, 34.27]).addTo(map);

// Add a popup to the marker
// marker.bindPopup("<b>Hello!</b><br>This is a Leaflet.js marker.").openPopup();
marker.bindPopup("<b>Hello!</b><br>This is a Leaflet.js marker.");

