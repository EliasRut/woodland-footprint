import React, { useEffect } from "react";
import logo from "./logo.svg";
import { ForestMap } from "./features/forestMap/ForestMap";
import "./App.css";
import { fetchForestAreas } from "./features/forestMap/forestMapAPI";
import { useAppDispatch } from "./app/hooks";
import { addArea } from "./features/forestMap/forestMapSlice";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    fetchForestAreas().then((areas) => {
      console.log(`Received areas ${JSON.stringify(areas)}`);
      for (let [areaKey, areaData] of Object.entries(areas.data)) {
        dispatch(addArea([areaKey, areaData]));
      }
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <ForestMap />
      </header>
    </div>
  );
}

export default App;
