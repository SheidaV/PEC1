import _ from "lodash";

console.log(_.concat([10,15,20],[40]));

let map = L.map('map').setView([41.3624, 2.1065], 12);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);