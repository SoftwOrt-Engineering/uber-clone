import { State } from "../../../store/rootReducer";

export const selectOrigin = (state: State) => state.nav.origin;
export const selectDestination = (state: State) => state.nav.destination;
export const selectTravelTimeInformation = (state: State) =>
  state.nav.travelTimeInformation;
