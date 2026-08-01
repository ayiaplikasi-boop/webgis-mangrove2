// ===============================
// WEBGIS SEBARAN KERAPATAN MANGROVE
// Desa Tapak, Kecamatan Tugu
// ===============================

// Inisialisasi peta
const map = L.map("map").setView([-6.9519, 110.3175], 16);

// ===============================
// BASEMAP
// ===============================

const satellite = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
        attribution: "Tiles © Esri"
    }
);

const osm = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution: "© OpenStreetMap"
    }
);

// Basemap default
satellite.addTo(map);

// Layer Control
L.control.layers(
{
    "ESRI Satellite": satellite,
    "OpenStreetMap": osm
}).addTo(map);

// Scale
L.control.scale().addTo(map);


// ===============================
// AREA KAJIAN
// ===============================

// Geser ke sekitar Wisata Mangrove Tapak
const areaKajian = L.rectangle(
[
    [-6.9492,110.3159],   // kiri atas
    [-6.9548,110.3216]    // kanan bawah
],
{
    color:"#ff0000",
    weight:3,
    fillColor:"#ff0000",
    fillOpacity:0.08
}).addTo(map);

map.fitBounds(areaKajian.getBounds());


// ===============================
// MARKER
// ===============================

const marker = L.marker([-6.9520,110.3186]).addTo(map);

marker.bindPopup(`
<b>Area Kajian Mangrove</b><br>
Desa Tapak<br>
Kecamatan Tugu<br>
Kota Semarang
`);


// ===============================
// MODAL HASIL KLASIFIKASI
// ===============================

const modal = document.getElementById("modal");
const openImg = document.getElementById("openImg");
const close = document.getElementById("close");

if(openImg){
    openImg.onclick = function(){
        modal.style.display = "block";
    };
}

if(close){
    close.onclick = function(){
        modal.style.display = "none";
    };
}

window.onclick = function(e){
    if(e.target==modal){
        modal.style.display="none";
    }
};
