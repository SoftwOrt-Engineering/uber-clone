import React, { FunctionComponent, useEffect } from "react";
// Redux Toolkit
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setDestination } from "../../slices/nav/navSlice";
// Types
import { MainScreenProp } from "../../slices/nav/types";
// Helper
import { useNavigation } from "@react-navigation/native";
// Native Comps
import { StyleSheet, TouchableOpacity, View } from "react-native";
// Components
import { Map } from "../../components/map";
import { StackNavMapScreen } from "../../navigation";
import { Icon } from "react-native-elements";

export const MapScreen: FunctionComponent = () => {
  const navigation = useNavigation<MainScreenProp>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setDestination(null));
  }, []);

  return (
    <View>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Icon name="chevron-left" type="font-awesome" size={20} />
      </TouchableOpacity>
      <View style={styles.mapContainer}>
        <Map />
      </View>
      <View style={styles.lowerContainer}>
        <StackNavMapScreen />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuButton: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: 32,
    left: 24,
    zIndex: 50,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  },
  mapContainer: {
    height: "50%",
  },
  lowerContainer: {
    height: "50%",
  },
});
