import React, { FunctionComponent } from "react";
import { StyleSheet, Image, View, SafeAreaView } from "react-native";
import tw from "tailwind-react-native-classnames";
import { NavOptions } from "../../components/navOptions";

interface IProps {}

export const HomeScreen: FunctionComponent = (props: IProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <Image
          style={styles.image}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
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
