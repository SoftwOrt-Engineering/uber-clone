import React, { FunctionComponent } from "react";
// Helper
import { RouteProp, useRoute } from "@react-navigation/native";
// Types
import { RouteParamListMap } from "./types";
// Native Comps
import { StyleSheet, Text, View } from "react-native";
import { Map } from "../../components/map";

export const MapScreen: FunctionComponent = () => {
  const route = useRoute<RouteProp<RouteParamListMap, "entry">>();

  return (
    <View>
      <View style={styles.mapContainer}>
        <Map />
      </View>
      <View style={styles.lowerContainer}></View>
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
