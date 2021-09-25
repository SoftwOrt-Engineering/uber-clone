import { combineReducers } from "@reduxjs/toolkit";
import { NavState } from "../slices/nav/types";
import navReducer from "../slices/nav/navSlice";

const rootReducer = combineReducers({
  nav: navReducer,
});

export default rootReducer;

export type State = {
  nav: NavState;
};
