import React, { useEffect } from 'react';

function MapModal({ kmlFileUrl }) {
  useEffect(() => {
    if (!kmlFileUrl) return; // Do nothing if no file

    // Initialize map
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 12.905, lng: 77.005 }, // temporary center
      zoom: 5, // temporary zoom
    });

    // Load KML layer
    const kmlLayer = new window.google.maps.KmlLayer({
      url: kmlFileUrl, // URL of uploaded KML
      map: map,
      preserveViewport: false, // auto-zoom and center to fit KML
    });

    // Optional: log status for debugging
    kmlLayer.addListener("status_changed", () => {
      console.log("KML Status:", kmlLayer.getStatus());
    });
  }, [kmlFileUrl]);

  return (
    <div
      id="map"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    ></div>
  );
}

export default MapModal;