import React, { FunctionComponent } from "react";
// Redux Toolkit
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setOrigin, setDestination } from "../../slices/nav/navSlice";
// Helper
import {
  GooglePlaceData,
  GooglePlaceDetail,
} from "react-native-google-places-autocomplete";
// Native Comps
import { StyleSheet, Image, View, SafeAreaView } from "react-native";
// Components
import { NavOptions } from "../../components/navOptions";
import { WhereEver } from "../../components/inputs";
import { NavFavorites } from "../../components/favorites";

export const HomeScreen: FunctionComponent = () => {
  const dispatch = useAppDispatch();

  const handleOnPress = (
    data: GooglePlaceData,
    detail: GooglePlaceDetail | null = null
  ) => {
    dispatch(
      setOrigin({
        location: detail ? detail.geometry.location : null,
        description: data.description,
      })
    );
    dispatch(setDestination(null));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <Image
          style={styles.image}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <WhereEver
          placeHolder={"Where from?"}
          onPress={handleOnPress}
          toInputBoxStyles={toInputBoxStyles}
        />
        <NavOptions />
        <NavFavorites />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
  },
  viewContainer: {
    padding: 20,
    width: 410,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});

const toInputBoxStyles = StyleSheet.create({
  container: {
    flex: 0,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 6,
    borderColor: "#9e9e9e",
    width: 355,
  },
  textInput: {
    fontSize: 18,
  },
});
