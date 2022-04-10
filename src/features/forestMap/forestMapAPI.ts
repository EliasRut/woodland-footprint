import MapArea from "../../types/MapArea";
import ForestType from "../../types/ForestType";
import { Dictionary } from "../../types/Dictionary";

export const fakeAreas: Dictionary<MapArea> = {
  "abcd-1234": {
    geoPoints: [
      { lat: 48.21, lon: 16.36 },
      { lat: 48.22, lon: 16.35 },
      { lat: 48.2, lon: 16.34 },
    ],
    name: "Schönbrunn",
    forestType: ForestType.MODERATE,
  },
};

// A mock function to mimic making an async request for data
export function fetchForestAreas() {
  return new Promise<{ data: Dictionary<MapArea> }>((resolve) =>
    setTimeout(() => resolve({ data: fakeAreas }), 500)
  );
}
