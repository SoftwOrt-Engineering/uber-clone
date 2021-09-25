import React, { FunctionComponent } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

interface IProps {}

export const HomeScreen: FunctionComponent = (props: IProps) => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>I am the HomeScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "violet",
    textAlign: "center",
    marginTop: 100,
    fontSize: 32,
    fontWeight: "500",
  },
});
