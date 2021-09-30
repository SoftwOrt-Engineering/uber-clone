import React, { FunctionComponent } from "react";
// Types
import { NavOptionEntry } from "../../slices/nav/types";
// Nateive Comps
import { Image, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";

interface IProps {
  entry: NavOptionEntry;
  disable: boolean;
}

export const NavOptionsItem: FunctionComponent<IProps> = ({
  entry,
  disable,
}) => {
  return (
    <View style={{ opacity: disable ? 0.2 : 1 }}>
      <Image
        style={styles.image}
        source={{
          uri: entry.image,
        }}
      />
      <Text style={styles.text}>{entry.title}</Text>
      <Icon
        style={styles.icon}
        type="antdesign"
        color="white"
        name="arrowright"
      />
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
  icon: {
    padding: 8,
    backgroundColor: "black",
    width: 40,
    marginTop: 16,
    borderRadius: 20,
  },
});
