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
  screen: "MapScreen" | "EatsScreen";
};

export type RootStackParamList = {
  MapScreen: {
    entry: NavOptionEntry;
  };
  EatsScreen: undefined;
};

export type MainScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  "MapScreen" | "EatsScreen"
>;
