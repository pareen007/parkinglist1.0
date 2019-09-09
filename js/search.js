// L.mapbox.accessToken =
//   "pk.eyJ1IjoicGFyZWVuODkiLCJhIjoiY2p6bXlrb3F0MGQwOTNwczZkNDR1M2V0biJ9.wnH7WAPDltqrQmWTmTrbLg";
// var geocoder = L.mapbox.geocoder("mapbox.places");

// var map = L.mapbox
//   .map("map")
//   .addLayer(L.mapbox.styleLayer("mapbox://styles/mapbox/streets-v11"));

// geocoder.query(sessionStorage.getItem("address"), showMap);

// function showMap(err, data) {
//   let icon = L.marker([data.latlng[0], data.latlng[1]], {
//     icon: L.mapbox.marker.icon({
//       "marker-size": "large",
//       "marker-symbol": "bus",
//       "marker-color": "#fa0"
//     })
//   });
//   // The geocoder can return an area, like a city, or a
//   // point, like an address. Here we handle both cases,
//   // by fitting the map bounds to an area or zooming to a point.
//   if (data.lbounds) {
//     map.fitBounds(data.lbounds);
//     icon.addTo(map);
//   } else if (data.latlng) {
//     map.setView([data.latlng[0], data.latlng[1]], 16);
//     icon.addTo(map);
//   }
// }

let geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  mapboxgl: mapboxgl,
  placeholder: sessionStorage.getItem("address")
});
let map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [sessionStorage.getItem("lat"), sessionStorage.getItem("long")],
  zoom: 15
});
var marker = new mapboxgl.Marker()
  .setLngLat([sessionStorage.getItem("lat"), sessionStorage.getItem("long")])
  .addTo(map);

document.getElementById("geocoder").appendChild(geocoder.onAdd(map));

let parkAPI = 'https://developer.nps.gov/api/v1/parks&stateCode=ca&limit=10?api_key=W2Xxon77z2n4fIwwytQO7Trshnhvv2fpIdFPSxX1'

document.getElementById('button').addEventListener('click', loadPark)

function loadPark(){
  var xhr = new XMLHttpRequest()
  xhr.open('GET', parkAPI, true);
  xhr.onload = function(){
    if(this.status === 200){
      let parks = JSON.parse(this.responseText)
      console.log(parks)
      let output = ''
      for (let i = 0; i < parks.data.length; i++) {
        output += `<div class="searchPage__result-container">${parks.data[i].description}</div>`
      }
      document.getElementById('result').innerHTML = output
    }
  }
  xhr.send();
}
