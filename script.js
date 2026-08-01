const map=L.map('map').setView([-6.9596,110.315],14);
const osm=L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'OSM'});
const esri=L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{attribution:'Esri'});
osm.addTo(map);
L.control.layers({'OpenStreetMap':osm,'ESRI Satellite':esri}).addTo(map);
L.control.scale().addTo(map);

const poly=L.polygon([
[-6.955,110.307],
[-6.955,110.322],
[-6.965,110.322],
[-6.965,110.307]
],{color:'red',fillOpacity:0.15}).addTo(map);

poly.bindPopup('<b>Area Kajian (Perkiraan)</b><br>Desa Tapak, Kecamatan Tugu, Kota Semarang.<br><br>Lokasi ditampilkan sebagai pendekatan karena data spasial asli tidak tersedia.');

document.getElementById('openImg').onclick=()=>modal.style.display='block';
close.onclick=()=>modal.style.display='none';
modal.onclick=e=>{if(e.target.id==='modal')modal.style.display='none';};
