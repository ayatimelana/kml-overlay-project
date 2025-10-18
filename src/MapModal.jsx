import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import omnivore from "leaflet-omnivore";

function MapModal({ kmlFileUrl }) {
  useEffect(() => {
    if (!kmlFileUrl) return;

    // Clear previous map (if any)
    const mapContainer = L.DomUtil.get("map");
    if (mapContainer != null) {
      mapContainer._leaflet_id = null;
    }

    // Create map
    const map = L.map("map").setView([20.5937, 78.9629], 5); // India center

    // Add free OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(map);

    // Define style for KML (yellow border, no fill)
    const customStyle = {
      color: "yellow",
      weight: 2,
      fillOpacity: 0,
    };

    // Load KML
    const kmlLayer = omnivore
      .kml(kmlFileUrl, null, L.geoJson(null, { style: customStyle }))
      .on("ready", function () {
        map.fitBounds(kmlLayer.getBounds());
      })
      .addTo(map);
  }, [kmlFileUrl]);

  return (
    <div
      id="map"
      style={{
        width: "100%",
        height: "100%",
      }}
    ></div>
  );
}

export default MapModal;