# kml-overlay-project
A React app to visualize KML files on Google Maps with polygons, modal view, and auto-zoom.

# KML Overlay Project

A React application that allows users to upload `.kml` files and visualize them on Google Maps. The map opens in a full-screen modal, auto-zooms to fit uploaded polygons, and displays polygons with **no fill** and **Chrome Yellow borders (#FFD700)**.

---

## Features

- Upload `.kml` files through a simple interface
- Full-screen modal map view
- Google Maps integration using `@react-google-maps/api`
- Polygons auto-center and auto-zoom
- Clean, minimal, responsive design
- Close modal to return to upload screen

---

## Screenshots

1. Upload Screen ("C:\Users\ayati\kml-overlay\Screenshots\Upload Screen.jpg")
2. Map Modal ("C:\Users\ayati\kml-overlay\Screenshots\Map Modal.jpg")

## How to Run Locally

1. Clone the repository:

git clone https://github.com/ayatimelana/kml-overlay-project.git

2. Install dependencies:

cd kml-overlay-project
npm install

3. Add .env with your Google Maps API key:

REACT_APP_GOOGLE_MAPS_API_KEY=AIzaSyAedaO7tEz2l5vO7TJWzo4oSnrnyS6_CN4

4. Start the app:

npm start

5. Open http://localhost:3000 to see the app.
>>>>>>> f71e1635204008156eb21268fabcf35a81a9251d
