import React, { FunctionComponent } from "react";
// Helper
import { RouteProp, useRoute } from "@react-navigation/native";
// Types
import { RouteParamListMap } from "./types";
// Native Comps
import { StyleSheet, Text, View } from "react-native";

export const MapScreen: FunctionComponent = () => {
  const route = useRoute<RouteProp<RouteParamListMap, "entry">>();

  return (
    <View>
      <View style={styles.mapContainer}>
        <Text>MapScreen</Text>
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
