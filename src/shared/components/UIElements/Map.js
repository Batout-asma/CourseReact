import React, { useRef, useEffect } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";

import "./Map.css";

const OpenLayersMap = ({ center, zoom }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([center.lng, center.lat]),
        zoom: zoom || 14,
      }),
    });

    return () => {
      map.setTarget(null);
    };
  }, [center, zoom]);

  return <div ref={mapRef} className="map"></div>;
};

export default OpenLayersMap;
