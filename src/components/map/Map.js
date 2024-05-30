import React, { useEffect } from "react";
import {
  LayersControl,
  MapContainer,
  TileLayer,
  WMSTileLayer,
} from "react-leaflet";
import "./Map.css";
import "leaflet/dist/leaflet.css";
import axios from "axios";





function Map() {
useEffect{()=>{
  console.log("aaa");
  const getData=()=>{
axios.get(link do naszych danych wfs, czyli adres z geoservera).then(dane=>{console.log(dane)})


  }
},[]};

  return (
    <div>
      <MapContainer center={[52.232222, 21.0]} zoom={6}>
        <LayersControl>
          <LayersControl.BaseLayer checked name="OSM">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="GoogleSatelite">
            <TileLayer url="http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="OpenTopoMap">
            <TileLayer url="https://tile.opentopomap.org/{z}/{x}/{y}.png" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="granice wojewodztw db">
            <WMSTileLayer
              layers="grance_wojewodztw_db"
              url
              wpisac
              url
              z
              qgisa
            />
          </LayersControl.BaseLayer>
        </LayersControl>
      </MapContainer>
    </div>
  );
}

export default Map;
