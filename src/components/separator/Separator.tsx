import React, { FunctionComponent } from "react";
// Native Comps
import { StyleSheet, View } from "react-native";

export const Separator: FunctionComponent = () => {
  return <View style={styles.seperator} />;
};

const styles = StyleSheet.create({
  seperator: {
    backgroundColor: "#e7e7e7",
    height: StyleSheet.hairlineWidth,
  },
});
