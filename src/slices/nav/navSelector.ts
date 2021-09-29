import { State } from "../../../store/rootReducer";

export const getOrigin = (state: State) => state.nav.origin;
export const getDestination = (state: State) => state.nav.destination;
export const getTravelTimeInformation = (state: State) =>
  state.nav.travelTimeInformation;
