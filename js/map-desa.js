var map = L.map('map').setView([-6.9, 109.1], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
}).addTo(map);

// ⛔ DATA BELUM DIMASUKKAN
// nanti tinggal fetch geojson dari folder data
