const map = L.map('map').setView([-6.9517, 110.3169], 16);

// ======================
// BASEMAP
// ======================

const osm = L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: '&copy; OpenStreetMap'
    }
);

const esri = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    {
        attribution: 'Tiles &copy; Esri'
    }
);

// Default Satellite
esri.addTo(map);

// Layer Control
L.control.layers(
{
    "ESRI Satellite": esri,
    "OpenStreetMap": osm
}
).addTo(map);

// Scale
L.control.scale().addTo(map);

// ======================
// AREA KAJIAN
// ======================

const areaKajian = L.rectangle(
[
    [-6.9494,110.3148],
    [-6.9547,110.3198]
],
{
    color:"#ff0000",
    weight:3,
    fillColor:"#ff0000",
    fillOpacity:0.08
}
).addTo(map);

areaKajian.bindPopup(`
<b>Area Kajian</b><br>
Desa Tapak<br>
Kecamatan Tugu<br>
Kota Semarang
`);

// Zoom ke Area Kajian
map.fitBounds(areaKajian.getBounds());

// ======================
// MODAL
// ======================

document.getElementById("openImg").onclick = function(){
    document.getElementById("modal").style.display="block";
};

document.getElementById("close").onclick = function(){
    document.getElementById("modal").style.display="none";
};

window.onclick = function(event){
    if(event.target == document.getElementById("modal")){
        document.getElementById("modal").style.display="none";
    }
};
