import React, { FunctionComponent } from "react";
// Redux Toolkit
import { useAppSelector } from "../../hooks/reduxHooks";
import { getDestination, getOrigin } from "../../slices/nav/navSelector";
// Helper
import MapView, { Marker } from "react-native-maps";
import { GOOGLE_MAPS_KEY } from "@env";
// Native Comps
import { StyleSheet } from "react-native";
import MapViewDirections from "react-native-maps-directions";

export const Map: FunctionComponent = () => {
  const origin = useAppSelector(getOrigin);
  const destination = useAppSelector(getDestination);

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
      {origin && origin.location && destination && destination.location && (
        <MapViewDirections
          origin={origin.description ? origin.description : ""}
          destination={destination.description ? destination.description : ""}
          apikey={GOOGLE_MAPS_KEY}
          strokeColor="black"
          strokeWidth={3}
        />
      )}
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
