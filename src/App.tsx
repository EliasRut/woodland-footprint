import { useEffect } from "react";
import { ForestMap } from "./features/forestMap/ForestMap";
import { fetchForestAreas } from "./features/forestMap/forestMapAPI";
import { useAppDispatch } from "./app/hooks";
import { addArea } from "./features/forestMap/forestMapSlice";
import { DesktopNavigation } from "./components/DesktopNavigation";
import "./App.css";
import { Routes, Route } from "react-router-dom";
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
        <DesktopNavigation />
        <h3>ForestMap</h3>
      </header>
      <Routes>
        <Route path="/" element={<ForestMap />} />
        <Route path="area/:areaKey" element={<ForestMap />} />
        <Route path="about" element={<About />} />
      </Routes>
      <div>
        <ForestMap />
      </div>
    </div>
  );
}

export default App;
