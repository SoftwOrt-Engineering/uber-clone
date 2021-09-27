import React, { FunctionComponent } from "react";
// Native Comps
import { StyleSheet, Image, View, SafeAreaView } from "react-native";
// Components
import { NavOptions } from "../../components/navOptions";
import { WhereFrom } from "../../components/inputs";

export const HomeScreen: FunctionComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <Image
          style={styles.image}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <WhereFrom />
        <NavOptions />
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
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
