import React from "react";
// Redux Tolkit
import { Provider } from "react-redux";
import { store } from "./store/store";
// Helpers
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
// Native Comps
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
// Components
import { StackNavigator } from "./src/navigation";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <StatusBar style="auto" />
          <StackNavigator />
        </SafeAreaProvider>
      </NavigationContainer>
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
