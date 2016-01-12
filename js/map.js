var map = L.map('map').setView([30, -20], 3);
L.tileLayer('http://a.tile.stamen.com/toner/{z}/{x}/{y}' + (L.Browser.retina ? '@2x' : '') + '.png', {
  attribution: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
  maxZoom: 18
}).addTo(map);

var monstrIcon = L.icon({
  iconUrl: 'img/iconmonstr-location-icon-32.png',

  iconSize:     [32, 32],
  iconAnchor:   [16, 32],
  popupAnchor:  [0, -35]
});

// get locations of tha gitches via ajax
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://bullg.it/members.json');
xhr.send();

var markers = {};

xhr.onload = function() {

  var gitches = JSON.parse( xhr.responseText ).gitches;

  for (var i = 0; i < gitches.length; i++) {

    var gitch = gitches[i];
    var id = JSON.stringify( gitch.latlon );

    var gitchIcon = L.icon({
      iconUrl: gitch.gravatar,

      iconSize:     [50, 50],
      iconAnchor:   [25, 25],
      popupAnchor:  [0, -25]
    });

    if (markers[id]) {

      var popupcontent = markers[id].getPopup().getContent();
      markers[id].getPopup().setContent( popupcontent + '<br>' +
        gitch.name.link('https://github.com/' + gitch.github ));

    } else {

      var marker = L.marker( gitch.latlon, {icon: gitchIcon} );
      marker.bindPopup( gitch.name.link('https://github.com/' + gitch.github) );
      marker.addTo(map);

      markers[id] = marker;

    }

  }

}

// helper to find LonLat by click
//function onMapClick(e) {
//    alert("You clicked the map at " + e.latlng);
//}
//map.on('click', onMapClick);
