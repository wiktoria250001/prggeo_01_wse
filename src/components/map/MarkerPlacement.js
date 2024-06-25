import React, { useState } from "react";
import { Circle, Marker, Popup, useMapEvent } from "react-leaflet";
import { wyIcon } from "./Icon";

function MarkerPlacement() {
  const [position, setPosition] = useState(null);
  const [mass, setMass] = useState(10000);
  const map = useMapEvent({
    click: (e) => {
      console.log(e.latlng);
      setPosition(e.latlng);
    },
  });

  const promien_1 = (mass) => {
    // console.log(Math.pow(mass, 1 / 3) / Math.pow(80 / 980, 1 / 1.89));
    return Math.pow(mass, 1 / 3) / Math.pow(68 / 980, 1 / 1.89);
  };

  const promien_2 = (mass) => {
    // console.log(Math.pow(mass, 1 / 3) / Math.pow(80 / 980, 1 / 1.89));
    return Math.pow(mass, 1 / 3) / Math.pow(30 / 980, 1 / 1.89);
  };

  const promien_3 = (mass) => {
    // console.log(Math.pow(mass, 1 / 3) / Math.pow(80 / 980, 1 / 1.89));
    return Math.pow(mass, 1 / 3) / Math.pow(0.14 / 980, 1 / 1.89);
  };

  return (
    <div>
      {console.log(
        position ? "please give me a lemonade" : "then give me a beer"
      )}
      <Marker icon={wyIcon} position={position}>
        <Popup>
          podaj masę ładunku wybuchowego w kg
          <input
            type="range"
            min="0"
            max="750000000"
            defaultValue="0"
            onChange={(e) => {
              setMass(e.target.value);
            }}
          ></input>
          {mass}
        </Popup>
      </Marker>
      <Circle
        center={position}
        radius={promien_3(mass)}
        pathOptions={{ color: "yellow" }}
      ></Circle>
      <Circle
        center={position}
        radius={promien_2(mass)}
        pathOptions={{ color: "orange" }}
      ></Circle>
      <Circle
        center={position}
        radius={promien_1(mass)}
        pathOptions={{ color: "red" }}
      ></Circle>
    </div>
  );
}

export default MarkerPlacement;
