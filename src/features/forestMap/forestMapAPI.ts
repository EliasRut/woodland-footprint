import MapArea from "../../types/MapArea";
import ForestType from "../../types/ForestType";
import { Dictionary } from "../../types/Dictionary";

export const fakeAreas: Dictionary<MapArea> = {
  "abcd-1234": {
    geoPoints: [
      [48.11, 16.36],
      [48.11, 16.26],
      [48.21, 16.26],
      [48.21, 16.36],
    ],
    name: "Schönbrunn",
    labelCenter: [42.16, 16.31],
    forestType: ForestType.MODERATE,
  },
};

// A mock function to mimic making an async request for data
export function fetchForestAreas() {
  return new Promise<{ data: Dictionary<MapArea> }>((resolve) =>
    setTimeout(() => resolve({ data: fakeAreas }), 500)
  );
}
