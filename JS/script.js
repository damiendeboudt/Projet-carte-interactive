//image1
let map = L.map('map1').setView([50.23530, 4.23403], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([50.23530, 4.23403]).addTo(map);
marker.bindPopup('<img src="image/MontBlanc.png" alt="">')

let circle = L.circle([50.23530, 4.23403], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.2,
    radius: 100
}).addTo(map)


    //image 2
let map2 = L.map('map2').setView([49.2123, 5.4379], 13)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map2);

let marker2 = L.marker([49.21704, 5.43875]).addTo(map2);

let circle2 = L.circle([49.21704, 5.43875], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.2,
    radius: 500
}).addTo(map2)


//image3
let map3 = L.map('map3').setView([45.83262, 6.86508], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map3);

let marker3 = L.marker([45.83266, 6.86524]).addTo(map3);

let circle3 = L.circle([45.83266, 6.86524], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.2,
    radius: 200
}).addTo(map3)