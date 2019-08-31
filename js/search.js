L.mapbox.accessToken =
  "pk.eyJ1IjoicGFyZWVuODkiLCJhIjoiY2p6bXlrb3F0MGQwOTNwczZkNDR1M2V0biJ9.wnH7WAPDltqrQmWTmTrbLg";
var geocoder = L.mapbox.geocoder("mapbox.places");

var map = L.mapbox
  .map("map")
  .addLayer(L.mapbox.styleLayer("mapbox://styles/mapbox/streets-v11"));

geocoder.query(sessionStorage.getItem("location"), showMap);

function showMap(err, data) {
  let icon = L.marker([data.latlng[0], data.latlng[1]], {
    icon: L.mapbox.marker.icon({
      "marker-size": "large",
      "marker-symbol": "bus",
      "marker-color": "#fa0"
    })
  });
  // The geocoder can return an area, like a city, or a
  // point, like an address. Here we handle both cases,
  // by fitting the map bounds to an area or zooming to a point.
  if (data.lbounds) {
    map.fitBounds(data.lbounds);
    icon.addTo(map);
  } else if (data.latlng) {
    map.setView([data.latlng[0], data.latlng[1]], 16);
    icon.addTo(map);
  }
}
