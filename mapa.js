// create instance
/*var heatmapInstance = h337.create({
  container: document.querySelector('.heatmap'),
  radius: 90
});
document.querySelector('.heatmap').onclick = function(ev) {
  heatmapInstance.addData({
    x: ev.layerX,
    y: ev.layerY,
    value: 1
  });
};*/


// don't forget to add gmaps-heatmap.js
var myLatlng = new google.maps.LatLng(7.6586, -73.3568);
// map options,
var myOptions = {
  zoom: 6,
  center: myLatlng
};
// standard map
map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
// heatmap layer
heatmap = new HeatmapOverlay(map, 
  {
    // radius should be small ONLY if scaleRadius is true (or small radius is intended)
    "radius": .5,
    "maxOpacity": 1, 
    // scales the radius based on map zoom
    "scaleRadius": true, 
    // if set to false the heatmap uses the global maximum for colorization
    // if activated: uses the data maximum within the current map boundaries 
    //   (there will always be a red spot with useLocalExtremas true)
    "useLocalExtrema": true,
    // which field name in your data represents the latitude - default "lat"
    latField: 'lat',
    // which field name in your data represents the longitude - default "lng"
    lngField: 'lng',
    // which field name in your data represents the data value - default "value"
    valueField: 'count'
  }
);

var testData = {
  max: 8,
  data: [
    {lat: 24.6408, lng:46.7728, count: 3},
    {lat: 50.75, lng:-1.55, count: 1},
    {lat: 8.75, lng:-73.55, count: 3},
    {lat: 8.75, lng:-73.87, count: 3},
    {lat: 8.60, lng:-72.99, count: 3},
    {lat: 7.75, lng:-74.25, count: 3},
    {lat: 6.75, lng:-71.89, count: 3},
    {lat: 5.75, lng:-70.00, count: 3}
  ]
};

heatmap.setData(testData);




var heatmapInstance = h337.create({
  container: document.querySelector('.heatmap'),
  radius: 30
});
document.querySelector('.heatmap').onclick = function(ev) {
  heatmapInstance.addData({
    x: ev.layerX,
    y: ev.layerY,
    value: 1
  });
};