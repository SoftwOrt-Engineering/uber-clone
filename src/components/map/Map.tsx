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
    <MapView
      style={styles.mapView}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin && origin.location ? origin.location.lat : 48.137154,
        longitude: origin && origin.location ? origin.location.lng : 11.576124,
        latitudeDelta:
          origin && origin.location && origin.location.lng ? 0.005 : 0.07,
        longitudeDelta:
          origin && origin.location && origin.location.lng ? 0.005 : 0.07,
      }}
    >
      {origin && origin.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description ? origin.description : ""}
          identifier="origin"
        />
      )}
    </MapView>
  );
};

const styles = StyleSheet.create({
  mapView: {
    height: "100%",
  },
});
