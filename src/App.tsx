import { useEffect } from "react";
import { ForestMap } from "./features/forestMap/ForestMap";
import { fetchForestAreas } from "./features/forestMap/forestMapAPI";
import { useAppDispatch } from "./app/hooks";
import { addArea } from "./features/forestMap/forestMapSlice";
import { DesktopNavigation } from "./components/DesktopNavigation";
import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import About from "./features/about/About";
import backgroundBlue from "./resources/background_blue.jpg";
import { ParallaxBanner } from "react-scroll-parallax";
import { Navigation } from "./components/Navigation";

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
      <Navigation />
      <ParallaxBanner
        layers={[{ image: backgroundBlue, speed: 15 }]}
        className={styles.parallaxBanner}
      />
      <div className={styles.foreground}>
        <Routes>
          <Route path="/" element={<ForestMap />} />
          <Route path="area/:areaKey" element={<ForestMap />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
      {/* <div className={styles.wrapper}>
        <div className={styles.parallaxContainer}>
          <div className={styles.background}>
            <img
              src={backgroundBlue}
              className={styles.parallaxBackgroundImage}
            />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
