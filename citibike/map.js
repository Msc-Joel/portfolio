mapboxgl.accessToken = "pk.eyJ1Ijoiam9lbGtvbm9wbyIsImEiOiJjbDN1OG16cjkyNjJzM2NyeHljZnQ1bjJsIn0.9ot6HAPQ1SZXqWAKLd67BQ";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/joelkonopo/cl4c4xp7b001016ljtzy6l7ke",
  zoom: 2,
  maxZoom: 15,
  minZoom: 10.5,
  center: [-73.90,40.763],
  
  projection: 'albers',
});

map.on("load", function () {
  map.addLayer(
      {
        id: "start20-citi-bike",
        type: "circle",
        source: {
          type: "geojson",
          data: "data/starts_2020.geojson",
        },
        'paint': {
          'circle-color': '#a9fc03',
          'circle-stroke-color': '#838581',
          'circle-stroke-width': 0.5,
          'circle-opacity': 0.5,
          'circle-color': [
              'interpolate',
              ['linear'],
              ['get', 'tripCount'],
              0,
              '#fcba03',
              4000,
              '#0324fc',
              8000,
              '#3dfc03',
              12000,
              '#fc031c',
              14000,
              '#a503fc'
              ],
          },
          minzoom: 3,
        },
        "settlement-minor-label"
      );
      
      });

mapboxgl.accessToken = "pk.eyJ1Ijoiam9lbGtvbm9wbyIsImEiOiJjbDN1OG16cjkyNjJzM2NyeHljZnQ1bjJsIn0.9ot6HAPQ1SZXqWAKLd67BQ";
var map2 = new mapboxgl.Map({
  container: "map2",
  style: "mapbox://styles/joelkonopo/cl4c4xp7b001016ljtzy6l7ke",
  zoom: 2,
  maxZoom: 15,
  minZoom: 10.5,
  center: [-73.90,40.763],
  projection: 'albers',
  });     

  map2.on("load", function () {
    map2.addLayer(
        {
          id: "stop20-citi-bike",
          type: "circle",
          source: {
            type: "geojson",
            data: "data/stops_2020.geojson",
          },
          paint: {
              'circle-color': '#858182',
              'circle-stroke-color': '#4d4d4d',
              'circle-stroke-width': 0.7,
              'circle-opacity': 0.7,
              'circle-color': [
                'interpolate',
                ['linear'],
                ['get', 'tripCount'],
                0,
                '#bab520',
                4000,
                '#2082ba',
                8000,
                '#2082ba',
                12000,
                '#20ba87',
                14000,
                '#20ba87'
                ],
            },
            minzoom: 3,
          },
          "settlement-minor-label"
        );
          
        });


  mapboxgl.accessToken = "pk.eyJ1Ijoiam9lbGtvbm9wbyIsImEiOiJjbDN1OG16cjkyNjJzM2NyeHljZnQ1bjJsIn0.9ot6HAPQ1SZXqWAKLd67BQ";
    var map3 = new mapboxgl.Map({
     container: "map3",
     style: "mapbox://styles/joelkonopo/cl4c4xp7b001016ljtzy6l7ke",
     zoom: 2,
     maxZoom: 15,
     minZoom: 10.5,
     center: [-73.90,40.763],
     projection: 'albers',
     });          
    
        map3.on("load", function () {
          map3.addLayer(
              {
                id: "start21-citi-bike",
                type: "circle",
                source: {
                  type: "geojson",
                  data: "data/starts_2021.geojson",
                },
                paint: {
                    'circle-color': '#858182',
                    'circle-stroke-color': '#4d4d4d',
                    'circle-stroke-width': 0.7,
                    'circle-opacity': 0.7,
                    'circle-color': [
                      'interpolate',
                      ['linear'],
                      ['get', 'tripCount'],
                      0,
                      '#bab520',
                      4000,
                      '#2082ba',
                      8000,
                      '#2082ba',
                      12000,
                      '#20ba87',
                      14000,
                      '#20ba87'
                      ],
                  },
                  minzoom: 3,
                },
                "settlement-minor-label"
              );
              
              });

  mapboxgl.accessToken = "pk.eyJ1Ijoiam9lbGtvbm9wbyIsImEiOiJjbDN1OG16cjkyNjJzM2NyeHljZnQ1bjJsIn0.9ot6HAPQ1SZXqWAKLd67BQ";
    var map4 = new mapboxgl.Map({
      container: "map4",
      style: "mapbox://styles/joelkonopo/cl4c4xp7b001016ljtzy6l7ke",
      zoom: 2,
      maxZoom: 15,
      minZoom: 10.5,
      center: [-73.90,40.763],
      projection: 'albers',
    });
        
            map4.on("load", function () {
              map4.addLayer(
                  {
                    id: "stop21-citi-bike",
                    type: "circle",
                    source: {
                      type: "geojson",
                      data: "data/stops_2021.geojson",
                    },
                    paint: {
                        'circle-color': '#858182',
                        'circle-stroke-color': '#4d4d4d',
                        'circle-stroke-width': 0.7,
                        'circle-opacity': 0.7,
                        'circle-color': [
                          'interpolate',
                          ['linear'],
                          ['get', 'tripCount'],
                          0,
                          '#bab520',
                          4000,
                          '#2082ba',
                          8000,
                          '#2082ba',
                          12000,
                          '#20ba87',
                          14000,
                          '#20ba87'
                          ],
                      },
                      minzoom: 3,
                    },
                    "settlement-minor-label"
                  );
                  
                  });
                  
// Introducing Pop ups


map.on("click", "start20-citi-bike", function (e) {
  var startStation = e.features[0].properties['start station name'];
  var totalTrips = e.features[0].properties.tripCount;
  console.log(startStation);
  new mapboxgl.Popup()
    .setLngLat(e.lngLat)
    .setHTML(
      "<h4>" 
      + "Station name:" 
      + "</h4>" 
      + "<hr>"
      + "<h6>" 
      + startStation
      + "</h6>"
      + "<h4>" 
      + "No. of trips: " 
      + totalTrips 
      + "</h4>"
    )
    .addTo(map);
  });

map.on("mouseenter", "start20-citi-bike", function () {
map.getCanvas().style.cursor = "pointer";});
map.on("mouseleave", "start20-citi-bike", function () {
map.getCanvas().style.cursor = ""; });

// Stops in 2020
map2.on("click", "stop20-citi-bike", function (e) {
var startStation = e.features[0].properties['end station name'];
var totalTrips = e.features[0].properties.tripCount;
console.log(startStation);
new mapboxgl.Popup()
.setLngLat(e.lngLat)
.setHTML(
"<h4>" 
+ "Station name:" 
+ "</h4>" 
+ "<hr>"
+ "<h6>" 
+ startStation 
+ "</h6>"
+ "<h4>" 
+ "No. of trips: " 
+ totalTrips 
+ "</h4>"
)
.addTo(map2);
});

map2.on("mouseenter", "stop20-citi-bike", function () {
map2.getCanvas().style.cursor = "pointer";});
map2.on("mouseleave", "stop20-citi-bike", function () {
map2.getCanvas().style.cursor = ""; });

// Starts in Geo 2021
map3.on("click", "start21-citi-bike", function (e) {
var startStation = e.features[0].properties['start_station_name'];
var totalTrips = e.features[0].properties.start_station_id;
console.log(startStation);
new mapboxgl.Popup()
.setLngLat(e.lngLat)
.setHTML(
"<h4>" 
+ "Station name:" 
+ "</h4>"
+ "<hr>" 
+ "<h6>" 
+  startStation 
+ "</h6>"
+ "<h4>" 
+ "No. of trips: " 
+ totalTrips 
+ "</h4>"
)
.addTo(map3);
});

map3.on("mouseenter", "start21-citi-bike", function () {
map3.getCanvas().style.cursor = "pointer";});
map3.on("mouseleave", "start21-citi-bike", function () {
map3.getCanvas().style.cursor = ""; });

// Stops in Geo 2021
map4.on("click", "stop21-citi-bike", function (e) {
var startStation = e.features[0].properties['end_station_name'];
var totalTrips = e.features[0].properties.end_station_id;
console.log(startStation);
new mapboxgl.Popup()
.setLngLat(e.lngLat)
.setHTML(
"<h4>" 
+ "Station name:" 
+ "</h4>"
+ "<hr>"
+ "<h6>" 
+ startStation
+ "</h6>"
+ "<h4>" 
+ "No. of trips: " 
+ totalTrips 
+ "</h4>"
)
.addTo(map4);
});

map4.on("mouseenter", "stop21-citi-bike", function () {
map4.getCanvas().style.cursor = "pointer";});
map4.on("mouseleave", "stop21-citi-bike", function () {
map4.getCanvas().style.cursor = ""; });
