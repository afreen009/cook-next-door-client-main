import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import axios from "axios";
import Me from "../../assets/icons/house.png";
import CooksMarker from "../../assets/icons/food.png";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWZyZWVuMDA5IiwiYSI6ImNseWhnbGRjMDA0OTUybW9mN250bjd3Z2oifQ.95T9E_nhC0IYYRVUFDmqsQ";

const CooksLocation = ({ lati, longi }) => {
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);
  const [lng, setLng] = useState(-81.2573);
  const [lat, setLat] = useState(42.9327);
  const [zoom, setZoom] = useState(16);
  const origin = [-81.2573, 42.9327];
  const destination = [longi || -81.258, lati || 42.932];

  function createCustomMarkerElement(iconUrl) {
    const el = document.createElement("div");
    el.style.backgroundImage = `url(${iconUrl})`;
    el.style.width = "32px";
    el.style.height = "32px";
    el.style.backgroundSize = "100%";
    return el;
  }
  useEffect(() => {
    if (mapContainerRef.current && !map) {
      const initializeMap = async () => {
        const map = new mapboxgl.Map({
          container: mapContainerRef.current,
          style: "mapbox://styles/mapbox/streets-v11",
          center: [lng, lat],
          zoom: zoom,
        });

        map.on("move", () => {
          setLng(map.getCenter().lng.toFixed(4));
          setLat(map.getCenter().lat.toFixed(4));
          setZoom(map.getZoom().toFixed(2));
        });

        map.on("load", () => {
          getRoute(map, origin, destination);
          new mapboxgl.Marker({
            element: createCustomMarkerElement(`${Me}`),
          })
            .setLngLat(origin)
            .addTo(map);

          new mapboxgl.Marker({
            element: createCustomMarkerElement(`${CooksMarker}`),
          })
            .setLngLat(destination)
            .addTo(map);
        });

        setMap(map);
      };

      initializeMap();
    }
  }, [map]);

  const getRoute = async (map, start, end) => {
    const query = await axios.get(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`
    );
    const data = query.data.routes[0];
    const route = data.geometry.coordinates;

    const geojson = {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: route,
      },
    };

    if (map.getSource("route")) {
      map.getSource("route").setData(geojson);
    } else {
      map.addLayer({
        id: "route",
        type: "line",
        source: {
          type: "geojson",
          data: geojson,
        },
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#3887be",
          "line-width": 5,
          "line-opacity": 0.75,
        },
      });
    }
  };

  return (
    <div>
      <div ref={mapContainerRef} style={{ width: "100vw", height: "60vh" }} />
      {/* <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div> */}
    </div>
  );
};

export default CooksLocation;

// // import React, { useState } from "react";
// // import { useLocation } from "react-router-dom";
// // import CooksMarker from "../../assets/icons/food.png";
// // import Me from "../../assets/icons/house.png";
// // import { Map, Marker, Popup } from "react-map-gl";
// // import Header from "../../components/Header/Header";
// // import "mapbox-gl/dist/mapbox-gl.css";

// // const MAPBOX_TOKEN =
// //   "pk.eyJ1IjoiYWZyZWVuMDA5IiwiYSI6ImNseWhnbGRjMDA0OTUybW9mN250bjd3Z2oifQ.95T9E_nhC0IYYRVUFDmqsQ";

// // export default function CooksLocation({ lat, long }) {
// //   console.log(lat, long);
// //   const [selectedMarker, setSelectedMarker] = useState(null);
// //   const latitude = lat || 42.934;
// //   const longitude = long || -81.255;
// //   return (
// //     <section className="maps-container">
// //       {/* <Header /> */}
// //       <Map
// //         initialViewState={{
// //           longitude: -81.2573763063707,
// //           latitude: 42.932808045065364,
// //           zoom: 15,
// //           width: "100vw",
// //           height: "100vh",
// //         }}
// //         mapStyle="mapbox://styles/mapbox/light-v11"
// //         mapboxAccessToken={MAPBOX_TOKEN}
// //       >
// //         <Marker
// //           key={`marker-${0}`}
// //           longitude={-81.2573763063707}
// //           latitude={42.932808045065364}
// //           anchor="bottom"
// //         >
// //           <img className="marker" src={Me} />
// //         </Marker>
// //         <Marker
// //           key={`marker-${1}`}
// //           longitude={longitude}
// //           latitude={latitude}
// //           anchor="bottom"
// //         >
// //           <img className="marker" src={CooksMarker} />
// //         </Marker>

// //         {selectedMarker && (
// //           <Popup
// //             latitude={selectedMarker.latitude}
// //             longitude={selectedMarker.longitude}
// //             onClose={() => setSelectedMarker(null)}
// //           >
// //             <div>{selectedMarker.name}</div>
// //           </Popup>
// //         )}
// //       </Map>
// //     </section>
// //   );
// // }
