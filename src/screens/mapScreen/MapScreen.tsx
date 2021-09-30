import React, { FunctionComponent } from "react";
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
