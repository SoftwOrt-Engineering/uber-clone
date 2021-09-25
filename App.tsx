import React from "react";
// Redux Tolkit
import { Provider } from "react-redux";
import { store } from "./store/store";
// Native Comps
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { HomeScreen } from "./src/screens";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <HomeScreen />
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
