import React, { FunctionComponent, useRef, useEffect } from "react";
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

  // Refs
  const mapRef = useRef<MapView | null>(null);

  // UseEffects
  useEffect(() => {
    if (origin && destination) {
      mapRef &&
        mapRef.current &&
        mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
          edgePadding: {
            top: 50,
            right: 50,
            bottom: 50,
            left: 50,
          },
        });
    } else if (origin && !destination) {
      mapRef &&
        mapRef.current &&
        mapRef.current.fitToSuppliedMarkers(["origin"], {
          edgePadding: {
            top: 50,
            right: 50,
            bottom: 50,
            left: 50,
          },
        });
    }
  }, [destination, origin]);

  return (
    <MapView
      ref={mapRef}
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
          // ref={mapRef}
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
      {destination && destination.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          description={destination.description ? destination.description : ""}
          identifier="destination"
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
