console.log('test:3:18 PM')
// temp solution for null search bar
sessionStorage.clear();
if (sessionStorage.getItem('address') === null) {
    sessionStorage.setItem('address', '95123')
}

// Mapbox map // Didn't know how to use the search bar without map so its included just have the display to none.
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
});
//////////////////

// 
var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
    placeholder: "Destination"
});

geocoder.on('result', function(e){
    sessionStorage.setItem('address', e.result.place_name)
    sessionStorage.setItem('lat', e.result.center[0])
    sessionStorage.setItem('long', e.result.center[1])
})
document.getElementById('geocoder').appendChild(geocoder.onAdd(map));
