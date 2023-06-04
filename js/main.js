

var store_waypoints = Array()
var routeMarkerList = Array()

// Initialize the map
var map = L.map('map').setView([27.57, 34.27], 3);
var form = document.getElementById("submitWayPoint");


function parseWayPointStringToArrayObject(string) {
	// in a format of "xx.xxx, xx.xxx"
	// var trimmedString = string.trim();
    var trimmedString = string.replace(/ /g, "")
	var stringWithoutCommas = trimmedString.replace(/,/g, " ");

	var numberStringsToArray = stringWithoutCommas.split(" ");

	var numbers = numberStringsToArray.map(function(string_num){
		return parseFloat(string_num)}
		)
	return numbers
}


function convertMultipleWayPointStringsToArray(textarea) {

	var lines = textarea.split('\n');
	for (let i = 0; i < lines.length; i++) {
		var waypoint_line = lines[i];
		var waypoint_line_to_obj = parseWayPointStringToArrayObject(waypoint_line)
		store_waypoints.push(waypoint_line_to_obj)
		// console.log(waypoint_line_to_obj)
		// L.marker(waypoint_line_to_obj).addTo(map)
	}
	return store_waypoints
}


function plotMultipleWayPointsFromArray(wayPointsArray) {
	let routePoints = Array()
	for (let i = 0; i < wayPointsArray.length; i++) {
		var single_waypoint = wayPointsArray[i];
		var way_point_marker = L.marker(single_waypoint).addTo(map);

		routePoints.push(way_point_marker)

        var roundedWaypoints = single_waypoint.map(function(array_num){
			return array_num.toFixed(3)
		})
		way_point_marker.bindPopup(`<b>WP ${i+1}</b></br>Lat/Long</br>${roundedWaypoints}`);
	}
	return routeMarkerList.push(routePoints)
}

function drawPolyLineForWaypointRoute(wayPointsArray) {

	for (let i=0; i < wayPointsArray.length; i++){
		var start_point = wayPointsArray[i]
		var end_point = wayPointsArray[i+1]
		var draw_line = L.polyline([start_point, end_point]).addTo(map)

	}


}

// Main Function when pressed Submit
function submitRouteWayPointButton(wayPointsArray) {
    // received a array of waypoints as input

	// add waypoint to map
	plotMultipleWayPointsFromArray(wayPointsArray)
	drawPolyLineForWaypointRoute(wayPointsArray)
}





form.addEventListener("submit", function(event) {
	event.preventDefault();
	var formData = new FormData(form);

	// Get the form values into Array
	var waypoints = formData.get("submitWayPoint");
	var waypointsArray = convertMultipleWayPointStringsToArray(waypoints)

	 ""

	// plotWayPoints
	submitRouteWayPointButton(waypointsArray)

	// Clear TextArea
	var wayPoint_textArea = document.getElementById("exampleFormControlTextarea1")
	wayPoint_textArea.value =
  // You can perform further operations with the data here or send it to a server using AJAX, etc.
//   L.marker(waypoint_obj).addTo(map)
});



L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
}).addTo(map);


// var start = L.marker([45, -80]).addTo(map);
// var length = 5
// var angle = 0
// var end_x = start.getLatLng().lng + length * Math.cos(angle * Math.PI / 180)
// var end_y = start.getLatLng().lat + length * Math.sin(angle * Math.PI / 180)
// var end = L.marker([end_y, end_x]).addTo(map)
// var line = L.polyline([start.getLatLng(), end.getLatLng()]).addTo(map)

// Add a marker to the map
// var marker = L.marker([27.57, 34.27]).addTo(map);
//
// Add a popup to the marker
// marker.bindPopup("<b>Hello!</b><br>This is a Leaflet.js marker.").openPopup();
// marker.bindPopup("<b>Hello!</b><br>This is a Leaflet.js marker.");
