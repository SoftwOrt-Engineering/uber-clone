import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Point } from "react-native-google-places-autocomplete";

export type NavState = {
  origin: MapsInfo | null;
  destination: MapsInfo | null;
  travelTimeInformation: TravelInfo | null;
};

export type NavOptionEntry = {
  id: string;
  title: string;
  image: string;
  screen: "EatsScreen" | "MapScreen";
};

export type Favorites = {
  id: string;
  icon: string;
  location: string;
  destination: string;
};

export type UberOptions = {
  id: string;
  title: string;
  multiplier: number;
  image: string;
};

export type RootStackParamList = {
  HomeScreen: undefined;
  RideOptionsCard: undefined;
  EatsScreen: undefined;
  NavigateCard: undefined;
  MapScreen: {
    entry: NavOptionEntry;
  };
};

export type MainScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  "EatsScreen" | "MapScreen" | "RideOptionsCard" | "NavigateCard" | "HomeScreen"
>;

export type MapsInfo = {
  location: Point | null;
  description: string | null;
};

export type TravelInfo = {
  distance: {
    text: string;
    value: number;
  };
  duration: {
    text: string;
    value: number;
  };
  status: string;
};
