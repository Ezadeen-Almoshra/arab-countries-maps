import { useEffect, useRef, useState } from "react";
import Form from "./Form";

import { MapContainer, Marker, TileLayer, GeoJSON } from "react-leaflet";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import successAudio from "/sound/SuccessSoundEFFECT.mp3";
import countries from "../data/countries";
import alert from "./useAlert";
import Swal from "sweetalert2";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useTimer } from "../hooks/useTimer";
import { useGeoData } from "../hooks/useGeoData";

// Fixing the default icon issue
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});
const audio = new Audio(successAudio);
// Start Component
const Maps = ({ timeLeft, setTimeLeft, setWin }) => {
  
  const [inputValue, setInputValue] = useState("");
   const [position, setPosition] = useState([22.531798, 37.497699]);
   const [zoom, setZoom] = useState(3);
  const inputRef = useRef(null);

  const [country, setCountry] = useLocalStorage("country");
  
  

  const geoData = useGeoData(country);
   useTimer(timeLeft, setTimeLeft, country, setCountry, setWin, countries);

  useEffect(() => {
    if (inputValue) {
      const matchedCity = countries.find((country) =>
        country.name.some((name) => name === inputValue)
      );
     
      if (matchedCity) {
        const Isfound = country.find(
          (country) => country.id === matchedCity?.id
        );
        if (Isfound) {
          alert("تم ادخال الدولة مسبقاً", "warn");
          if (inputRef.current) {
            inputRef.current.select();
          }
          return;
        }
        if (matchedCity?.id == "21") {
          setPosition([30.8124247, 34.8594762]);
          setZoom(5);
        }
        setCountry(matchedCity);
        audio.play();
        alert(`ممتاز!  ${ country?.length + 1 } دولة`, "success");
        setInputValue("");
      }
    }
  }, [inputValue]);

  
  const onEachFeature = (feature, layer) => {
    if (feature.properties && feature.properties.name) {
      layer.bindTooltip(feature.properties.name, {
        permanent: true,
        direction: "center",
        className: "country-tooltip",
      });
    }
  };
 
  
  

  return (
    <>
      <h3 className="text-center mt-2 font-semibold tracking-widest">
        متبقي
        <span className="text-red-700">
          {" "}
          {countries?.length - country?.length}
        </span>{" "}
        دولة
      </h3>
      <MapContainer
        center={position}
        zoom={zoom}
        scrollWheelZoom={false}
        doubleClickZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="custom-tile"
        />
        {/* <Marker position={position}></Marker> */}

        {geoData.map((country, index) => (
          <GeoJSON
            key={index}
            data={country.data}
            style={() => ({
              color: country.color,
              weight: 2,
              opacity: 1,
              fillOpacity: 0.9,
            })}
            onEachFeature={onEachFeature}
          />
        ))}

        <Form
          inputValue={inputValue}
          setInputValue={setInputValue}
          inputRef={inputRef}
        />
      </MapContainer>
      {localStorage.getItem("country") &&
        JSON.parse(localStorage.getItem("country")).length == 22 && (
          <div className="flex justify-center">
            <button
              className=" px-4 py-2 
        rounded-2xl bg-indigo-600 text-white
        "
              onClick={() => {
                setTimeLeft(240);
                localStorage.setItem("timeLeft", 240);
                setCountry(null);
                localStorage.setItem("country", JSON.stringify(country));
                setWin(false);
                localStorage.setItem("win", 0);
              }}
            >
              العب مجدداً
            </button>
          </div>
        )}
    </>
  );
};

export default Maps;
