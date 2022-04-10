import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import Polygon from "ol/geom/Polygon";
import { transform } from "ol/proj";
import { useAppSelector } from "../../app/hooks";

import styles from "./ForestMap.module.css";
import { getAllForestAreasAsList } from "./forestMapSlice";
import MapWrapper from "./MapWrapper";

export function ForestMap() {
  const forestAreas = useAppSelector(getAllForestAreasAsList);
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
              name: area.name,
              forestType: area.forestType,
            })
        )}
      />
    </div>
  );
}
