//image1
let map = L.map('map1').setView([50.23530, 4.23403], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([50.23530, 4.23403]).addTo(map);
marker.bindPopup('<img src="img/Tours salamandre.png" alt="">')

let circle = L.circle([50.23530, 4.23403], {
    color: 'darkorange',
    fillColor: 'darkorange',
    fillOpacity: 0.1,
    radius: 100
}).addTo(map)


    //img 2
let map2 = L.map('map2').setView([49.2123, 5.4379], 13)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map2);

let marker2 = L.marker([49.21704, 5.43875]).addTo(map2);
marker2.bindPopup('<img src="img/Douaumont.png" alt="">')

let circle2 = L.circle([49.21704, 5.43875], {
    color: 'darkorange',
    fillColor: 'darkorange',
    fillOpacity: 0.1,
    radius: 500
}).addTo(map2)


//image3
let map3 = L.map('map3').setView([45.83262, 6.86508], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map3);

let marker3 = L.marker([45.83266, 6.86524]).addTo(map3);
marker3.bindPopup('<img src="img/MontBlanc.png" alt="">')

let circle3 = L.circle([45.83266, 6.86524], {
    color: 'darkorange',
    fillColor: 'darkorange',
    fillOpacity: 0.1,
    radius: 200
}).addTo(map3)