import React, { FunctionComponent } from "react";
// Redux Toolkit
import { useAppSelector } from "../../hooks/reduxHooks";
import { getOrigin } from "../../slices/nav/navSelector";
// Types
import { MainScreenProp } from "../../slices/nav/types";
// Helper
import { useNavigation } from "@react-navigation/core";
import { screenData } from "../../../static/navMenu/screenData";
// Native Comps
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { NavOptionsItem } from "../navOptionsItem";

export const NavOptions: FunctionComponent = () => {
  const data = screenData();
  const navigation = useNavigation<MainScreenProp>();

  // Selectors
  const origin = useAppSelector(getOrigin);

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => navigation.navigate(item.screen)}
          disabled={origin === null}
        >
          <NavOptionsItem entry={item} disable={origin === null} />
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
    backgroundColor: "#e0e0e0",
    margin: 8,
    width: 160,
  },
});
