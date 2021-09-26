import React, { FunctionComponent } from "react";
// Types
import { NavOptionEntry } from "../../slices/nav/types";
// Nateive Comps
import { Image, StyleSheet, Text, View } from "react-native";

interface IProps {
  entry: NavOptionEntry;
}

export const NavOptionsItem: FunctionComponent<IProps> = ({ entry }) => {
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: entry.image,
        }}
      />
      <Text style={styles.text}>{entry.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  text: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "600",
  },
});
