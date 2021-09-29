import React, { FunctionComponent } from "react";
// Redux Toolkit
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { setOrigin, setDestination } from "../../../slices/nav/navSlice";
// Helper
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_KEY } from "@env";

export const WhereFrom: FunctionComponent = () => {
  const dispatch = useAppDispatch();

  return (
    <GooglePlacesAutocomplete
      query={{
        key: GOOGLE_MAPS_KEY,
        language: "en",
      }}
      onPress={(data, details = null) => {
        dispatch(
          setOrigin({
            location: details ? details.geometry.location : null,
            description: data.description,
          })
        );
        dispatch(setDestination(null));
      }}
      fetchDetails={true}
      enablePoweredByContainer={false}
      minLength={2}
      placeholder="Where from?"
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={400}
      styles={{
        container: {
          flex: 0,
        },
        textInput: {
          fontSize: 18,
        },
      }}
    />
  );
};
