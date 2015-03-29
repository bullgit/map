var map = L.map('map').setView([30, -20], 3);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
maxZoom: 18
}).addTo(map);

var monstrIcon = L.icon({
iconUrl: 'img/iconmonstr-location-icon-32.png',

iconSize:     [32, 32],
iconAnchor:   [16, 32],
popupAnchor:  [0, -35]
});

// locations of tha gitches
var gitches = [
  {
    "name": "Jan",
    "github": "reimersjan",
    "latlon": [53.553407, 9.992196]
  },
  {
    "name": "Tim",
    "github": "timpietrusky",
    "latlon": [50.1109221, 8.6821267]
  },
  {
    "name": "Kevin",
    "github": "kevingimbel",
    "latlon": [50.0123996, 8.4217125]
  },
  {
    "name": "Max",
    "github": "myxotod",
    "latlon": [49.9928617, 8.2472526]
  },
  {
    "name": "Luky",
    "github": "LukyVj",
    "latlon": [48.8603445, 2.30573760]
  },
  {
    "name": "Felix",
    "github": "dervondenbergen",
    "latlon": [48.2081743, 16.3738189]
  },
  {
    "name": "Kanu",
    "github": "krman009",
    "latlon": [22.3038945, 70.8021599]
  },
  {
    "name": "Hugo",
    "github": "DarbyBrown",
    "latlon": [50.82253, -0.137163]
  },
  {
    "name": "Scott",
    "github": "scottnix",
    "latlon": [32.715738, -117.1610838]
  },
  {
    "name": "Nils",
    "github": "schoenwaldnils",
    "latlon": [53.8654673, 10.6865593]
  },
  {
    "name": "Olly",
    "github": "0x04",
    "latlon": [47.8966802, 10.4151477]
  },
  {
    "name": "Nick",
    "github": "shvelo",
    "latlon": [41.716667, 44.783333]
  },
  {
    "name": "Ty",
    "github": "tystrong",
    "latlon": [39.440336, -84.3621634]
  },
  {
    "name": "José",
    "github": "jofpin",
    "latlon": [4.598056, -74.075833]
  },
  {
    "name": "Leeroyd",
    "github": "leeroyd",
    "latlon": [48.856614, 2.3522219]
  },
  {
    "name": "Tim",
    "github": "timbog80",
    "latlon": [45.815115, -122.7426009]
  },
  {
    "name": "Clément",
    "github": "clementgalidie",
    "latlon": [48.861417, 2.536463]
  },
  {
    "name": "Haroen",
    "github": "haroenv",
    "latlon": [51.21996787685509, 3.2211304939333743]
  }
]

var markers = {};

for (var i = 0; i < gitches.length; i++) {

  var gitch = gitches[i];
  var id = JSON.stringify( gitch.latlon );

  if (markers[id]) {

    var popupcontent = markers[id].getPopup().getContent();
    markers[id].getPopup().setContent( popupcontent + '<br>' +
      gitch.name.link('https://github.com/' + gitch.github ));

  } else {

    var marker = L.marker( gitch.latlon, {icon: monstrIcon} );
    marker.bindPopup( gitch.name.link('https://github.com/' + gitch.github) );
    marker.addTo(map);

    markers[id] = marker;

  }

}

// helper to find LonLat by click
//function onMapClick(e) {
//    alert("You clicked the map at " + e.latlng);
//}
//map.on('click', onMapClick);
