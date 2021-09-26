import React from "react";
// Redux Tolkit
import { Provider } from "react-redux";
import { store } from "./store/store";
// Helpers
import { SafeAreaProvider } from "react-native-safe-area-context";
// Native Comps
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
// Components
import { HomeScreen } from "./src/screens";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <HomeScreen />
      </SafeAreaProvider>
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
