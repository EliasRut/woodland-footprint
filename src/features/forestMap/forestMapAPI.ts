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
    label: "Schönbrunn",
    key: "abcd-1234",
    labelCenter: [42.16, 16.31],
    forestType: ForestType.MODERATE,
    area: 4216.12,
    owner: "Lohnbot",
    until: "31.12.2035",
    carbonCaptured: 8.4652,
  },
};

// A mock function to mimic making an async request for data
export function fetchForestAreas() {
  return new Promise<{ data: Dictionary<MapArea> }>((resolve) =>
    setTimeout(() => resolve({ data: fakeAreas }), 500)
  );
}
