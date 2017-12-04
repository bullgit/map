const map = L.map("map").setView([30, -20], 3);
const retina = L.Browser.retina ? "@2x" : "";

L.tileLayer(`http://a.tile.stamen.com/terrain/{z}/{x}/{y}${retina}.png`, {
  attribution:
    'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
  maxZoom: 18
}).addTo(map);

const markers = {};

// get locations of tha gitches via ajax
fetch("https://bullg.it/members.json")
  .then(res => res.json())
  .then(res => res.gitches)
  .then(gitches =>
    gitches.forEach(gitch => {
      const id = JSON.stringify(gitch.latlon);

      const gitchIcon = L.icon({
        iconUrl: gitch.gravatar,

        iconSize: [50, 50],
        iconAnchor: [25, 25],
        popupAnchor: [0, -25]
      });

      if (markers[id]) {
        const popupcontent = markers[id].getPopup().getContent();
        markers[id]
          .getPopup()
          .setContent(
            `${popupcontent}<br>${gitch.name.link(
              "https://github.com/" + gitch.github
            )}`
          );
      } else {
        const marker = L.marker(gitch.latlon, { icon: gitchIcon });
        marker.bindPopup(gitch.name.link(`https://github.com/${gitch.github}`));
        marker.addTo(map);

        markers[id] = marker;
      }
    })
  );

// helper to find LonLat by click
//function onMapClick(e) {
//    alert("You clicked the map at " + e.latlng);
//}
//map.on('click', onMapClick);
