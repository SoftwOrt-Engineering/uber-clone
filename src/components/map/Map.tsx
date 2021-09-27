import React, { FunctionComponent } from "react";
// Helper
import MapView, { Marker } from "react-native-maps";
// Native Comps
import { StyleSheet, View } from "react-native";

export const Map: FunctionComponent = () => {
  return (
    <View>
      <MapView
        style={styles.mapView}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mapView: {
    height: "100%",
  },
});
