
sessionStorage.clear();
if (sessionStorage.getItem('location') === null) {
    sessionStorage.setItem('location', '95123')
}

////////////////
mapboxgl.accessToken = 'pk.eyJ1IjoicGFyZWVuODkiLCJhIjoiY2p6bXlrb3F0MGQwOTNwczZkNDR1M2V0biJ9.wnH7WAPDltqrQmWTmTrbLg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
});
//////////////////

var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
});

geocoder.on('result', function(e){
    sessionStorage.setItem('location', e.result.place_name)
})

// let search = document.getElementById('search');
// search.addEventListener('click', function(){
//     console.log('click')
//     window.location.href='https://www.google.com'
// })

document.getElementById('geocoder').appendChild(geocoder.onAdd(map));