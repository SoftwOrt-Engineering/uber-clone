import React, { FunctionComponent } from "react";
// Redux Toolkit
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { setDestination } from "../../../slices/nav/navSlice";
// Types
import { MainScreenProp } from "../../../slices/nav/types";
// Helper
import {
  GooglePlaceData,
  GooglePlaceDetail,
} from "react-native-google-places-autocomplete";
import { useNavigation } from "@react-navigation/native";
// Native Comps
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
// Components
import { WhereEver } from "../../inputs";
import { NavFavorites } from "../../favorites";

export const NavigateCard: FunctionComponent = () => {
  const navigation = useNavigation<MainScreenProp>();
  const dispatch = useAppDispatch();

  const handleOnPress = (
    data: GooglePlaceData,
    detail: GooglePlaceDetail | null = null
  ) => {
    dispatch(
      setDestination({
        location: detail ? detail.geometry.location : null,
        description: data.description,
      })
    );
    navigation.navigate("RideOptionsCard");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{"Hello ${User}"}</Text>
      <View style={styles.seperator} />
      <View style={styles.navContainer}>
        <View>
          <WhereEver
            placeHolder={"Where to?"}
            onPress={handleOnPress}
            toInputBoxStyles={toInputBoxStyles}
          />
        </View>
        <NavFavorites />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  text: {
    textAlign: "center",
    paddingVertical: 20,
    fontSize: 24,
  },
  seperator: {
    backgroundColor: "#e7e7e7",
    height: StyleSheet.hairlineWidth,
  },
  navContainer: {
    flexShrink: 1,
  },
});

const toInputBoxStyles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "white",
    paddingTop: 20,
  },
  textInput: {
    fontSize: 18,
    backgroundColor: "#dddddf",
    borderRadius: 8,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
