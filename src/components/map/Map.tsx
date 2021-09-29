import React, { FunctionComponent } from "react";
// Redux Toolkit
import { useAppSelector } from "../../hooks/reduxHooks";
import { getOrigin } from "../../slices/nav/navSelector";
// Helper
import MapView, { Marker } from "react-native-maps";
// Native Comps
import { StyleSheet, View } from "react-native";

export const Map: FunctionComponent = () => {
  const origin = useAppSelector(getOrigin);

  return (
    <View>
      <MapView
        style={styles.mapView}
        mapType="mutedStandard"
        initialRegion={{
          latitude: origin && origin.location ? origin.location.lat : 0,
          longitude: origin && origin.location ? origin.location.lng : 0,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
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
