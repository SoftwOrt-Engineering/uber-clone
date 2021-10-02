import React, { FunctionComponent } from "react";
// Types
import { NavOptionEntry } from "../../slices/nav/types";
import { MainScreenProp } from "../../slices/nav/types";
// Helper
import { useNavigation } from "@react-navigation/native";
// Native Comps
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";

interface IProps {
  entry: NavOptionEntry;
  disable: boolean;
}

export const NavOptionsItem: FunctionComponent<IProps> = ({
  entry,
  disable,
}) => {
  const navigation = useNavigation<MainScreenProp>();

  return (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => navigation.navigate(entry.screen)}
      disabled={disable}
    >
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
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    paddingTop: 16,
    paddingBottom: 8,
    paddingHorizontal: 24,
    backgroundColor: "#e0e0e0",
    margin: 8,
    width: 160,
  },
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
