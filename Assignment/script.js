var map = L.map ('map-container');

map.setView([44.971724, -93.243239], 16);

L.tileLayer(http://{s}.tile.osm.org/{z}/{x}/{y}.png, {
	maxZoom: 18,
	
}).addTo(map);

$.getJSON(https://dl.dropboxusercontent.com/u/8550761/wilson-library.geojson)

L.geoJson(https://dl.dropboxusercontent.com/u/8550761/wilson-library.geojson).addTo(map)

$( document ). ready(function() {
	
});