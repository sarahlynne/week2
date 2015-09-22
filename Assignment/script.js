var map = L.map('map-container').setView([44.971724, -93.243239], 16);

L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png").addTo(map);

$.getJSON("https://dl.dropboxusercontent.com/u/8550761/wilson-library.geojson", function(data){

	var geojson = new L.geoJson(data).addTo(map);
});

$(".box.red").click(function(e){alert("This is a box")});

$.getJSON('green-line-eastbound.geojson', function(data){

	var geojson = new L.geoJson(data).addTo(map);
});

$.getJSON("http://opendata.minneapolismn.gov/datasets/cb8d4b1dbad0470380e5f46f1e75e962_0.geojson", function(data){

	var geojson = new L.geoJson(data).addTo(map);
});