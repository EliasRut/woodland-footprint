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
import { ForestDescription } from "./ForestDescription";
import { useEffect } from "react";

function scrollDelay(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}

async function smoothScroll(targetTop: number, seconds: number) {
  let y = window.scrollY;
  const startingPos = y;
  const scrollDistance = targetTop - startingPos;
  const scrollStepSize = scrollDistance / (seconds * 16);
  while (y < targetTop) {
    debugger;
    window.scrollTo({ top: y + scrollStepSize });
    await scrollDelay(16);
    y = window.scrollY;
  }
}

export function ForestMap() {
  const forestAreasMap = useAppSelector(getAllForestAreas);
  const forestAreas = Object.entries(forestAreasMap) as [string, MapArea][];
  const params = useParams();
  const areaKey = params.areaKey;
  const selectedArea = areaKey ? forestAreasMap[areaKey] : undefined;

  useEffect(() => {
    if (params.areaKey) {
      window.scrollTo({
        top: window.innerHeight * 0.7,
        behavior: "smooth",
      });
    }
  }, [params.areaKey]);

  return (
    <div className={styles.forestMap}>
      <div className={styles.content}>
        <h2 className={styles.areaName}>
          {selectedArea
            ? selectedArea.label
            : "Wähle ein Gebiet aus um mehr zu erfahren"}
        </h2>

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
          <div className={styles.description}>
            <div className={styles.row}>
              <div>
                <div className={styles.label}>Förderer: </div>
                {selectedArea.owner}
              </div>
              <div>
                <div className={styles.label}>Geleast bis: </div>
                {selectedArea.until}
              </div>
            </div>
            <div className={styles.row}>
              <div>
                <div className={styles.label}>Fläche: </div>
                {selectedArea.area}m²
              </div>
              <div>
                <div className={styles.label}>CO² Speicherung: </div>
                {selectedArea.carbonCaptured}m³ pro Jahr
              </div>
            </div>
            <div>
              <div className={styles.label}>Typ: </div>
              {ForestTypeNames[selectedArea.forestType]}
            </div>
            <div className={styles.forestType}>
              <ForestDescription forestType={selectedArea.forestType} />
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
