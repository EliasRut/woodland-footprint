import { boundingExtent } from "ol/extent";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import Polygon, { fromExtent } from "ol/geom/Polygon";
import { transform } from "ol/proj";
import { useParams } from "react-router-dom";
import { ForestTypeNames } from "../../app/forestTypeNames";
import { useAppSelector } from "../../app/hooks";

import styles from "./ForestMap.module.css";
import { getAllForestAreas, getSelectedArea } from "./forestMapSlice";
import MapWrapper from "./MapWrapper";
import MapArea from "../../types/MapArea";

export function ForestMap() {
  const forestAreasMap = useAppSelector(getAllForestAreas);
  const forestAreas = Object.entries(forestAreasMap) as [string, MapArea][];
  const params = useParams();
  const areaKey = params.areaKey;
  const selectedArea = areaKey ? forestAreasMap[areaKey] : undefined;

  console.log(forestAreas);

  return (
    <div className={styles.forestMap}>
      <h3>ForestMap</h3>
      <MapWrapper
        selectedArea={selectedArea}
        features={forestAreas.map(
          ([areaId, area]) =>
            new Feature({
              geometry: new Polygon([
                area.geoPoints.map(([lat, lon]) =>
                  transform([lat, lon], "EPSG:4326", "EPSG:3857")
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
