import React, { FunctionComponent } from "react";
// Types
import { MainScreenProp } from "../../slices/nav/types";
// Helper
import { useNavigation } from "@react-navigation/core";
// Native Comps
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { screenData } from "../../../static/navMenu/screenData";
import { NavOptionsItem } from "../navOptionsItem";

export const NavOptions: FunctionComponent = () => {
  const data = screenData();
  const navigation = useNavigation<MainScreenProp>();

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => navigation.navigate(item.screen)}
        >
          <NavOptionsItem entry={item} />
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 8,
    paddingLeft: 24,
    paddingBottom: 32,
    paddingTop: 16,
    backgroundColor: "lightgrey",
    margin: 8,
    width: 160,
  },
});
