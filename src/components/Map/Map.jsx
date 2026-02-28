import "./Map.css";
import { constants } from "../../utils/constants";
import React, { useState, useEffect } from "react";

const Map = ({ address, setPin, notFound, setNotFound, searchType }) => {
  const [src, setSrc] = useState("");

  useEffect(() => {
    if (address) {
      const typeQuery =
        searchType === "home"
          ? "liquor stores and grocery stores"
          : "bars and cocktail lounges";
      const query = encodeURIComponent(`${typeQuery} near ${address}`);
      const embedUrl = `https://www.google.com/maps/embed/v1/search?key=${constants.apiKey}&q=${query}`;
      setSrc(embedUrl);
      setNotFound(false);
    } else {
      setNotFound(true);
    }
  }, [address, setNotFound, searchType]);

  return (
    <>
      {!notFound ? (
        <iframe
          id="map"
          className="map__iframe"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={src}
          title="Map"
        ></iframe>
      ) : (
        <div id="map__not-found" className="map__iframe">
          <p className="map__not-found-text">
            Couldn't quite pin down your location :/
          </p>
        </div>
      )}
    </>
  );
};

export default Map;
