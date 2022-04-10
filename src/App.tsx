import { useEffect } from "react";
import { ForestMap } from "./features/forestMap/ForestMap";
import { fetchForestAreas } from "./features/forestMap/forestMapAPI";
import { useAppDispatch } from "./app/hooks";
import { addArea } from "./features/forestMap/forestMapSlice";
import { DesktopNavigation } from "./components/DesktopNavigation";
import "./App.css";

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
      <header
        className="App-header"
        // style={{
        //   backgroundImage: `${getBasePath()}/logo192.png`,
        //   backgroundColor: "green",
        // }}
      >
        <DesktopNavigation />
        <h3>ForestMap</h3>
        {/* <ForestMap /> */}
      </header>
      <div>
        <ForestMap />{" "}
      </div>
    </div>
  );
}

export default App;
