import React, { FunctionComponent } from "react";
// Helper
import { RouteProp, useRoute } from "@react-navigation/native";
// Types
import { RouteParamList } from "./types";
// Native Comps
import { StyleSheet, Text, View } from "react-native";

export const MapScreen: FunctionComponent = () => {
  const route = useRoute<RouteProp<RouteParamList, "entry">>();

  return (
    <View>
      <Text>MapScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
