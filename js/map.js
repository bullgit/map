var map = L.map('map').setView([30, -10], 3);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
maxZoom: 18
}).addTo(map);

var monstrIcon = L.icon({
iconUrl: 'img/iconmonstr-location-icon-32.png',

iconSize:     [32, 32],
iconAnchor:   [32, 32],
popupAnchor:  [0, 0]
});

// locations of tha gitches
var marker = L.marker([51.48138, 12.30518], {icon: monstrIcon}).addTo(map); // germany
var marker = L.marker([46.544, 4.131], {icon: monstrIcon}).addTo(map); // france
var marker = L.marker([47.98992, 17.17188], {icon: monstrIcon}).addTo(map); // austria
var marker = L.marker([52.80276, 0.93359], {icon: monstrIcon}).addTo(map); // uk
var marker = L.marker([23.40276, 78.92578], {icon: monstrIcon}).addTo(map); // india
var marker = L.marker([4.03962, -70.82812], {icon: monstrIcon}).addTo(map); // colombia
var marker = L.marker([42.09822, 45.59375], {icon: monstrIcon}).addTo(map); // georgia
var marker = L.marker([50.6808,5.74609], {icon: monstrIcon}).addTo(map); // belgium
var marker = L.marker([36.73888, -118.8828], {icon: monstrIcon}).addTo(map); // us, california
var marker = L.marker([40.31304, -82.88086], {icon: monstrIcon}).addTo(map); // us, ohio


// helper to find LonLat by click
//function onMapClick(e) {
//    alert("You clicked the map at " + e.latlng);
//}
//map.on('click', onMapClick);
