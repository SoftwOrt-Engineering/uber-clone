import React, { FunctionComponent } from "react";
// Helper
import { RouteProp, useRoute } from "@react-navigation/native";
// Types
import { RouteParamListEats } from "./types";
// Native Comps
import { StyleSheet, Text, View } from "react-native";

export const EatsScreen: FunctionComponent = () => {
  const route = useRoute<RouteProp<RouteParamListEats, "entry">>();

  return (
    <View>
      <Text>EatsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
