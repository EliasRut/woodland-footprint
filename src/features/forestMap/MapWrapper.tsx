import React, { useState, useRef, useEffect } from "react";

import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import XYZ from "ol/source/XYZ";
import Geometry from "ol/geom/Geometry";
import { transform } from "ol/proj";
import { Coordinate } from "ol/coordinate";
import { Pixel } from "ol/pixel";
import Style from "ol/style/Style";
import Fill from "ol/style/Fill";
import GeoJSON from "ol/format/GeoJSON";
import styles from "./ForestMap.module.css";

export interface MapWrapperProps {
  features: any[];
}

const style = new Style({
  fill: new Fill({
    color: "#eeeeee",
  }),
});

function MapWrapper(props: MapWrapperProps) {
  // set intial state - used to track references to OpenLayers
  //  objects for use in hooks, event handlers, etc.
  const [map, setMap] = useState<Map | undefined>();
  const [featuresLayer, setFeaturesLayer] = useState<
    VectorLayer<VectorSource<Geometry>> | undefined
  >();
  const [selectedCoord, setSelectedCoord] = useState<Coordinate | undefined>();

  // get ref to div element - OpenLayers will render into this div
  const mapElement = useRef<HTMLDivElement | null>(null);

  // initialize map on first render - logic formerly put into componentDidMount
  useEffect(() => {
    // create and add vector source layer
    const initalFeaturesLayer = new VectorLayer({
      source: new VectorSource(),
      background: "transparent",
      style: function (feature) {
        const color = feature.get("COLOR_BIO") || "#ff000066";
        style.getFill().setColor(color);
        return style;
      },
    });

    // create map
    const initialMap = new Map({
      target: mapElement.current!,
      layers: [
        // USGS Topo
        new TileLayer({
          source: new XYZ({
            url: "http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}",
            // url: "https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}",
          }),
        }),

        initalFeaturesLayer,
      ],
      view: new View({
        projection: "EPSG:3857",
        center: transform(
          [13.400946681388167, 47.33884491843358],
          "EPSG:4326",
          "EPSG:3857"
        ),
        zoom: 6,
      }),
      controls: [],
    });

    console.log("Hey!");
    // initialMap.getView().setCenter([15.378485743888168, 47.9568457626996]);

    // save map and vector layer references to state
    setMap(initialMap);
    setFeaturesLayer(initalFeaturesLayer);
    initialMap.on("click", handleMapClick);
    return () => {
      map?.dispose();
      if (mapElement.current) {
        mapElement.current.innerHTML = "";
      }
    };
  }, []);

  // update map if features prop changes - logic formerly put into componentDidUpdate
  useEffect(() => {
    if (props.features.length && featuresLayer) {
      // may be empty on first render

      // set features to map
      featuresLayer!.setSource(
        new VectorSource({
          features: props.features, // make sure features is an array
        })
      );

      // fit map to feature extent (with 100px of padding)
      map!.getView().fit(featuresLayer!.getSource()!.getExtent(), {
        padding: [100, 100, 100, 100],
      });
    }
  }, [props.features, featuresLayer]);
  // create state ref that can be accessed in OpenLayers onclick callback function
  //  https://stackoverflow.com/a/60643670
  const mapRef = useRef<Map>();
  mapRef.current = map;

  // map click handler
  const handleMapClick = (event: { pixel: Pixel }) => {
    // get clicked coordinate using mapRef to access current React state inside OpenLayers callback
    //  https://stackoverflow.com/a/60643670
    const clickedCoord = mapRef.current!.getCoordinateFromPixel(event.pixel);

    // transform coord to EPSG 4326 standard Lat Long
    const transormedCoord = transform(clickedCoord, "EPSG:3857", "EPSG:4326");

    // set React state
    setSelectedCoord(transormedCoord);
    console.log(transormedCoord);
  };

  return <div ref={mapElement} className={styles.openLayersMap}></div>;
}

export default MapWrapper;
