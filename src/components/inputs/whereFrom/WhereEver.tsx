import React, { FunctionComponent } from "react";
// Redux Toolkit
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { setOrigin, setDestination } from "../../../slices/nav/navSlice";
// Helper
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_KEY } from "@env";

interface IProps {
  placeHolder: string;
  onPress: (data: GooglePlaceData, detail: GooglePlaceDetail | null) => void;
  toInputBoxStyles: Object;
}

export const WhereEver: FunctionComponent<IProps> = ({
  placeHolder,
  onPress,
  toInputBoxStyles,
}) => {
  return (
    <GooglePlacesAutocomplete
      query={{
        key: GOOGLE_MAPS_KEY,
        language: "en",
      }}
      onPress={(data, details = null) => {
        onPress(data, details);
      }}
      fetchDetails={true}
      enablePoweredByContainer={false}
      minLength={2}
      placeholder={placeHolder}
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={400}
      styles={toInputBoxStyles}
    />
  );
};
