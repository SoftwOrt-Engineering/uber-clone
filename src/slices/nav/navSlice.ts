import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NavState, OriginType } from "./types";

const initialState: NavState = {
  origin: {
    location: null,
    description: null,
  },
  destination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action: PayloadAction<OriginType>) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;

export default navSlice.reducer;
