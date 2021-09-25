import React from "react";
// Redux Tolkit
import { Provider } from "react-redux";
import { store } from "./store/store";
// Native Comps
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Lets build UBER!</Text>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
