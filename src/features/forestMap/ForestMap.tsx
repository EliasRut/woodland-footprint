import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import Polygon from "ol/geom/Polygon";
import { transform } from "ol/proj";
import React, { useState } from "react";
import { useAppSelector } from "../../app/hooks";

// import { useAppSelector, useAppDispatch } from '../../app/hooks';
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementAsync,
//   incrementIfOdd,
//   selectCount,
// } from "./forestMapSlice";
import styles from "./ForestMap.module.css";
import { getAllForestAreasAsList } from "./forestMapSlice";
import MapWrapper from "./MapWrapper";

export function ForestMap() {
  // const count = useAppSelector(selectCount);
  // const dispatch = useAppDispatch();
  // const [incrementAmount, setIncrementAmount] = useState("2");

  // const incrementValue = Number(incrementAmount) || 0;
  const forestAreas = useAppSelector(getAllForestAreasAsList);
  console.log(forestAreas);

  return (
    <div className={styles.forestMap}>
      <h3>ForestMap</h3>
      <MapWrapper
        features={[
          new Feature({
            geometry: new Polygon([
              [
                transform([10, 47], "EPSG:4326", "EPSG:3857"),
                transform([20, 47], "EPSG:4326", "EPSG:3857"),
                transform([20, 49], "EPSG:4326", "EPSG:3857"),
                transform([15, 49], "EPSG:4326", "EPSG:3857"),
                transform([20, 49], "EPSG:4326", "EPSG:3857"),
                // transform([10, 49], "EPSG:4326", "EPSG:3857"),
                // transform([10, 48], "EPSG:4326", "EPSG:3857"),
                // transform([20, 44], "EPSG:4326", "EPSG:3857"),
              ],
            ]),
            labelPoint: new Point(
              transform(
                [13.400946681388167, 47.33884491843358],
                "EPSG:4326",
                "EPSG:3857"
              )
            ),
            name: "My Polygon",
          }),
        ]}
      />
      {/* <div className={styles.mapEntries}>
        {forestAreas.map(([areaKey, areaData]) => (
          <div key={areaKey}>{areaData.name}</div>
        ))}
      </div> */}
    </div>
  );
}
