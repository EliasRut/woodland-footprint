import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import Polygon from "ol/geom/Polygon";
import { transform } from "ol/proj";
import { ForestTypeNames } from "../../app/forestTypeNames";
import { useAppSelector } from "../../app/hooks";

import styles from "./ForestMap.module.css";
import { getAllForestAreasAsList, getSelectedArea } from "./forestMapSlice";
import MapWrapper from "./MapWrapper";

export function ForestMap() {
  const forestAreas = useAppSelector(getAllForestAreasAsList);
  const selectedArea = useAppSelector(getSelectedArea);
  console.log(forestAreas);

  return (
    <div className={styles.forestMap}>
      <h3>ForestMap</h3>
      <MapWrapper
        features={forestAreas.map(
          ([areaId, area]) =>
            new Feature({
              geometry: new Polygon([
                area.geoPoints.map(([lat, lon]) =>
                  transform([lon, lat], "EPSG:4326", "EPSG:3857")
                ),
              ]),
              labelPoint: new Point(
                transform(
                  [area.labelCenter[0], area.labelCenter[1]],
                  "EPSG:4326",
                  "EPSG:3857"
                )
              ),
              label: area.label,
              key: area.key,
              forestType: area.forestType,
            })
        )}
      />
      {selectedArea ? (
        <div>
          <h2>{selectedArea.label}</h2>
          <div>CO² pro Jahr: {selectedArea.carbonCaptured}</div>
          <div>Fläche: {selectedArea.area}</div>
          <div>Typ: {ForestTypeNames[selectedArea.forestType]}</div>
          <div>Förderer: {selectedArea.owner}</div>
          <div>Geleast bis: {selectedArea.until}</div>
        </div>
      ) : (
        <div>
          <h2>Wähle ein Gebiet aus um mehr zu erfahren</h2>
        </div>
      )}
    </div>
  );
}
