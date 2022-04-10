import React, { useEffect } from "react";
import logo from "./logo.svg";
import { ForestMap } from "./features/forestMap/ForestMap";
import "./App.css";
import { fetchForestAreas } from "./features/forestMap/forestMapAPI";
import { useAppDispatch } from "./app/hooks";
import { addArea } from "./features/forestMap/forestMapSlice";
import { Routes, Route, Link } from "react-router-dom";
import About from "./features/about/About";

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
        <Routes>
          <Route path="/" element={<ForestMap />} />
          <Route path="area/:areaKey" element={<ForestMap />} />
          <Route path="about" element={<About />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
