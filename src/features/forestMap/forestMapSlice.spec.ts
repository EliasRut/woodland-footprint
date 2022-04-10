import ForestType from "../../types/ForestType";
import MapArea from "../../types/MapArea";
import forestMapReducer, {
  ForestMapState,
  addArea,
  removeArea,
  setSelected,
} from "./forestMapSlice";

describe("forest map reducer", () => {
  const initialState: ForestMapState = {
    areas: {},
  };
  it("should handle initial state", () => {
    expect(forestMapReducer(undefined, { type: "unknown" })).toEqual({
      areas: {},
    });
  });

  it("should handle addArea", () => {
    const testAreaKey = "lobau";
    const lobauEntry: MapArea = {
      geoPoints: [],
      forestType: ForestType.HEAVY,
      labelCenter: [16, 48],
      label: "Lobau",
      key: testAreaKey,
      area: 4216.12,
      owner: "Lohnbot",
      until: "31.12.2035",
      carbonCaptured: 8.4652,
    };
    const actual = forestMapReducer(
      initialState,
      addArea([testAreaKey, lobauEntry])
    );
    expect(actual.areas).toEqual({ [testAreaKey]: lobauEntry });
  });

  // Todo: Add testcase for removeArea

  it("should handle setSelected", () => {
    const testAreaKey = "lobau";
    const actual = forestMapReducer(initialState, setSelected(testAreaKey));
    expect(actual.selectedArea).toEqual(testAreaKey);
  });
});
