import React, { FunctionComponent, useEffect } from "react";
// Redux Toolkit
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setDestination } from "../../slices/nav/navSlice";
// Helper
import { RouteProp, useRoute } from "@react-navigation/native";
// Types
import { RouteParamListMap } from "./types";
// Native Comps
import { StyleSheet, View } from "react-native";
// Components
import { Map } from "../../components/map";
import { StackNavMapScreen } from "../../navigation";

export const MapScreen: FunctionComponent = () => {
  const route = useRoute<RouteProp<RouteParamListMap, "entry">>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setDestination(null));
  }, []);

  return (
    <View>
      <View style={styles.mapContainer}>
        <Map />
      </View>
      <View style={styles.lowerContainer}>
        <StackNavMapScreen />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    height: "50%",
  },
  lowerContainer: {
    height: "50%",
  },
});
