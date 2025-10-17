import React, { useState, useRef } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

function App() {
  const [fileError, setFileError] = useState("");
  const [mapVisible, setMapVisible] = useState(false);
  const [kmlUrl, setKmlUrl] = useState("");
  const mapRef = useRef(null);

  // Google Maps API key from .env file
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate KML
    if (!file.name.toLowerCase().endsWith(".kml")) {
      setFileError("Please upload a valid .kml file.");
      return;
    }

    setFileError("");

    // Convert uploaded file to URL
    const fileUrl = URL.createObjectURL(file);
    setKmlUrl(fileUrl);
    setMapVisible(true);
  };

  // Initialize map and load KML
  const onMapLoad = (map) => {
    mapRef.current = map;

    if (kmlUrl) {
      const kmlLayer = new window.google.maps.KmlLayer({
        url: kmlUrl,
        map: map,
        preserveViewport: false, // auto-zoom to fit KML
        suppressInfoWindows: true,
      });

      // Debug: check if KML loaded
      window.google.maps.event.addListenerOnce(kmlLayer, "status_changed", () => {
        console.log("KML Status:", kmlLayer.getStatus());
      });
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", minHeight: "100vh" }}>
      {/* Upload Section */}
      {!mapVisible && (
        <div style={{ textAlign: "center", marginTop: "80px" }}>
          <h2>KML Overlay on Google Maps</h2>
          <p>Upload a .kml file to visualize it on the map.</p>

          <input
            type="file"
            accept=".kml"
            onChange={handleFileChange}
            style={{
              marginTop: "20px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "6px",
            }}
          />

          {fileError && (
            <p style={{ color: "red", marginTop: "10px" }}>{fileError}</p>
          )}
        </div>
      )}

      {/* Modal Section */}
      {mapVisible && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              backgroundColor: "#fff",
            }}
          >
            {/* Close button */}
            <button
              onClick={() => {
                setMapVisible(false);
                setKmlUrl("");
              }}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                zIndex: 10,
                background: "#FFD700",
                border: "none",
                borderRadius: "6px",
                padding: "8px 12px",
                cursor: "pointer",
              }}
            >
              Close
            </button>

            {/* Google Map */}
            <LoadScript googleMapsApiKey={apiKey}>
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={{ lat: 20.5937, lng: 78.9629 }} // temporary center
                zoom={5} // temporary zoom
                onLoad={onMapLoad}
              ></GoogleMap>
            </LoadScript>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;