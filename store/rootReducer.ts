import { combineReducers } from "@reduxjs/toolkit";
import { NavState } from "../src/slices/nav/types";
import navReducer from "../src/slices/nav/navSlice";

const rootReducer = combineReducers({
  nav: navReducer,
});

export default rootReducer;

export type State = {
  nav: NavState;
};
