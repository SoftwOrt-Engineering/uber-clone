import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type NavState = {
  origin: string | null;
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
