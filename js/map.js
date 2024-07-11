const map = L.map("map").setView([30, -20], 3);
const retina = L.Browser.retina ? "@2x" : "";

L.tileLayer(`https://api.maptiler.com/maps/aquarelle/{z}/{x}/{y}${retina}.webp?key=h0JuFeiJrkj12uEiTYmI`, {
  attribution:
    '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
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
