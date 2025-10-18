import React, { useState } from "react";
import MapModal from "./MapModal";

function App() {
  const [fileError, setFileError] = useState("");
  const [mapVisible, setMapVisible] = useState(false);
  const [kmlUrl, setKmlUrl] = useState("");

  // Handle KML file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Check if file is KML
    if (!file.name.toLowerCase().endsWith(".kml")) {
      setFileError("Please upload a valid .kml file.");
      return;
    }

    setFileError("");

    // Convert uploaded file into a URL
    const fileUrl = URL.createObjectURL(file);
    setKmlUrl(fileUrl);
    setMapVisible(true);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", minHeight: "100vh" }}>
      {/* Upload Section */}
      {!mapVisible && (
        <div style={{ textAlign: "center", marginTop: "80px" }}>
          <h2>KML Overlay on Google Map using Leaflet</h2>
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

      {/* Map Modal */}
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

            {/* Map Section */}
            <MapModal kmlFileUrl={kmlUrl} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;