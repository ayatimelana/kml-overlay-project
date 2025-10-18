# kml-overlay-project
A React app to visualize KML files on Google Maps with polygons, modal view, and auto-zoom.

## KML Overlay on Google Map using Leaflet

This project allows users to upload .kml files and visualize them as overlays on an interactive map.
Originally built using the Google Maps API, it is now implemented using Leaflet (OpenStreetMap) — which is completely free and lightweight.

## Features

- Upload and display any .kml file directly on the map
- Automatically centers and zooms to the uploaded KML area
- Clean modal layout for viewing the map
- Close and reopen the map easily
- No API key or billing required (Leaflet + OpenStreetMap)
- Responsive design and smooth user experience

## Tech Stack

- React.js (Frontend framework)
- Leaflet.js (Map rendering)
- React-Leaflet (React bindings for Leaflet)
- OpenStreetMap (Tile layer source)

## Installation & Setup

1. Clone the repository:

git clone https://github.com/ayatimelana/kml-overlay-project.git
cd kml-overlay-project

2. Install dependencies:

npm install

3. Add .env with your Google Maps API key:

REACT_APP_GOOGLE_MAPS_API_KEY=AIzaSyAedaO7tEz2l5vO7TJWzo4oSnrnyS6_CN4

4. Start the app:

npm start

5. Open http://localhost:3000 to see the app.

## Leaflet Version

This project was originally built using Google Maps API, but was migrated to Leaflet due to Google’s billing and key restrictions.

### Benefits of Leaflet:

- 100% free and open-source
- Works directly with OpenStreetMap tiles
- Lightweight and faster loading
- Easy customization of polygon styles (e.g., no fill, yellow border for each uploaded KML file)
- No API key or billing setup required
