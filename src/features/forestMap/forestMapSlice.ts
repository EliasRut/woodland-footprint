import { createSlice, Dictionary, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import MapArea from "../../types/MapArea";

export interface ForestMapState {
  areas: Dictionary<MapArea>;
  selectedArea?: string;
}

const initialState: ForestMapState = {
  areas: {},
};

export const forestMapSlice = createSlice({
  name: "forestMap",
  initialState,
  reducers: {
    addArea: (state, action: PayloadAction<[string, MapArea]>) => {
      const [key, value] = action.payload;
      state.areas[key] = value;
    },
    removeArea: (state, action: PayloadAction<string>) => {
      delete state.areas[action.payload];
    },
    setSelected: (state, action: PayloadAction<string | undefined>) => {
      state.selectedArea = action.payload;
    },
  },
});

export const { addArea, removeArea, setSelected } = forestMapSlice.actions;

export const getSelectedArea = (state: RootState) =>
  state.forestMap.selectedArea
    ? state.forestMap.areas[state.forestMap.selectedArea]
    : undefined;
export const getAllForestAreas = (state: RootState) => state.forestMap.areas;
export const getAllForestAreasAsList = (state: RootState) =>
  Object.entries(state.forestMap.areas) as [string, MapArea][];

export const selectedForestArea = (state: RootState) =>
  state.forestMap.selectedArea;

export default forestMapSlice.reducer;
