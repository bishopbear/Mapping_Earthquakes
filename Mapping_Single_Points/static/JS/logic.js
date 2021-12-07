// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
//var marker = L.marker([51.5, -0.09]).addTo(map);
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

L.circle([34.0522, -118.2437], {
    radius: 100
 }).addTo(map);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
// to you use addTo to add another map on top of a current map?

