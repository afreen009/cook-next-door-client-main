import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Me from "../../assets/icons/house.png";
import Cooksmark from "../../assets/icons/food.png";
import { Map, Marker, Popup } from "react-map-gl";
import Header from "../../components/Header/Header";
import "mapbox-gl/dist/mapbox-gl.css";
import "./AllCooksMap.scss";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYWZyZWVuMDA5IiwiYSI6ImNseWhnbGRjMDA0OTUybW9mN250bjd3Z2oifQ.95T9E_nhC0IYYRVUFDmqsQ";

export default function AllCooksMap() {
  const location = useLocation();
  const dataReceived = location.state;
  const locationsData = dataReceived.allLocation;
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [showPopup, setShowPopup] = useState(true);
  return (
    <>
      <Header />
      <section className="maps-container">
        <Map
          initialViewState={{
            longitude: -81.2573763063707,
            latitude: 42.932808045065364,
            zoom: 16,
            width: "100vw",
            height: "100vh",
          }}
          mapStyle="mapbox://styles/mapbox/light-v11"
          mapboxAccessToken={MAPBOX_TOKEN}
        >
          <Marker latitude={42.932808045065364} longitude={-81.2573763063707}>
            <img className="marker" src={Me} alt="marker" />
          </Marker>
          {locationsData.map((location, index) => (
            <div key={`marker-${index}`}>
              <Marker
                longitude={location.long}
                latitude={location.lat}
                anchor="bottom"
              >
                <img
                  onClick={() => setShowPopup(true)}
                  className="marker"
                  src={Cooksmark}
                  alt="marker"
                />
              </Marker>
              {showPopup && (
                <Popup
                  latitude={location.lat}
                  longitude={location.long}
                  onClose={() => setShowPopup(false)}
                  closeOnClick={false}
                  anchor="top"
                >
                  <div className="tooltip">{location.name}</div>
                </Popup>
              )}
            </div>
          ))}
        </Map>
      </section>
    </>
  );
}
