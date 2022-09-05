mapboxgl.accessToken = "pk.eyJ1Ijoiam9lbGtvbm9wbyIsImEiOiJjbDN1OG16cjkyNjJzM2NyeHljZnQ1bjJsIn0.9ot6HAPQ1SZXqWAKLd67BQ";
var map3 = new mapboxgl.Map({
  container: "map3",
  style: "mapbox://styles/joelkonopo/cl3ugxvsb000w15lakutsiry6",
  zoom: 2,
    maxZoom: 9,
    minZoom: 3.2,
    center: [-101, 38],
    maxBounds: [
      [-180, 15],
      [-30, 72],
    ],
    projection: 'albers',
});

map3.on("load", function () {
  map3.addLayer({
    id: "county_typology_outline",
    type: "line",
    source: {
      type: "geojson",
      data: "data/countyTypologyCodes.geojson",
    },
    paint: {
      "line-color": "#ffffff",
      "line-width": 0.3,
    },
  }, "waterway-label");



  map3.addLayer(
    {
      id: "county_typology",
      type: "fill",
      source: {
        type: "geojson",
        data: "data/countyTypologyCodes.geojson",
      },
      minzoom: 3,
      paint: {
        "fill-color": [
          "match",
          ["get", "Economic_Type_Label"],
          "Nonspecialized",
          "#32a89a",
          "Maufacturing",
          "#32a857",
          "Farming",
          "#9ca832",
          "Federal/State Government",
          "#a85d32",
          "Recreation",
          "#a83232",
          "Mining",
          "#4e32a8",
          "#ffffff",
        ],
      },
    },
    "county_typology_outline"
  );
  
});


// Create the popup


map3.on('click', 'county_typology', function (e) {
  var stateName = e.features[0].properties.State;
  var county = e.features[0].properties.County;
  var economicType = e.features[0].properties.Economic_Type_Label;
  var countyClass = e.features[0].properties.countyClass;
  // var total = e.features[0].properties.total;
  // wnrPerc = (wnrPerc * 100).toFixed(0);
  // total = total.toLocaleString();
  stateName = stateName.toUpperCase();
  county = county.toUpperCase();
  economicType = economicType.toUpperCase();
  new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML('<h2>' + county + ' - ' + stateName + '</h2>'
          + '<h4>' + 'Economic type - ' + economicType + '</h4>'
          + '<p>' + 'County Class -' + countyClass + '</p>')
      .addTo(map3);
});
map3.on('mouseenter', 'county_typology', function () {
  map3.getCanvas().style.cursor = 'pointer';
});
map3.on('mouseleave', 'county_typology', function () {
  map3.getCanvas().style.cursor = '';
});


mapboxgl.accessToken = "pk.eyJ1Ijoiam9lbGtvbm9wbyIsImEiOiJjbDN1OG16cjkyNjJzM2NyeHljZnQ1bjJsIn0.9ot6HAPQ1SZXqWAKLd67BQ";
var map4 = new mapboxgl.Map({
  container: "map4",
  style: "mapbox://styles/joelkonopo/cl3ugxvsb000w15lakutsiry6",
    zoom: 3,
    maxZoom: 13,
    minZoom: 3.2,
    center: [-101, 38],
    maxBounds: [
      [-180, 15],
      [-30, 72],
    ],
    projection: 'albers',
});

map4.on("load", function () {
  map4.addLayer(
    {
    id: "states_outline",
    type: "line",
    source: {
        type: "geojson",
        data: "data/statesOutline.geojson",
    },
    paint: {
        "line-color": "#cfcfcf",
        "line-width": 0.7,
    },
  }, "waterway-label");



  map4.addLayer({
      id: "brutality_incident",
      type: "circle",
      source: {
        type: "geojson",
        data: "data/policeBrutality.geojson",
      },
      paint: {
        'circle-color': '#ab1d66',
        'circle-stroke-color': '#4d4d4d',
        'circle-stroke-width': 0.4,
        'circle-opacity': 0.3,
        'circle-radius': 5,
        
      }
    });

});

// Create the popup

map4.on('click', 'brutality_incident', function (e) {
  let state = e.feature[0].properties.state
  let incident = e.features[0].properties.description;
  // state = state.toUpperCase();
  // incident = incident.toUpperCase();
  new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML('<h4>' + state + '</h4>'
          + '<h2>' + incident + '</h2>')
      .addTo(map4);
});
map4.on('mouseenter', 'brutality_incident', function () {
  map4.getCanvas().style.cursor = 'pointer';
});
map4.on('mouseleave', 'brutality_incident', function () {
  map4.getCanvas().style.cursor = '';
});