import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Point } from "react-native-google-places-autocomplete";

export type NavState = {
  origin: OriginType;
  destination: string | null;
  travelTimeInformation: string | null;
};

export type NavOptionEntry = {
  id: string;
  title: string;
  image: string;
  screen: "EatsScreen" | "MapScreen";
};

export type RootStackParamList = {
  EatsScreen: undefined;
  MapScreen: {
    entry: NavOptionEntry;
  };
};

export type MainScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  "EatsScreen" | "MapScreen"
>;

export type OriginType = {
  location: Point | null;
  description: string | null;
};
