import React, { FunctionComponent } from "react";
// Redux Toolkit
import { useAppSelector } from "../../hooks/reduxHooks";
import { getOrigin } from "../../slices/nav/navSelector";
import { screenData } from "../../../static/navMenu/screenData";
// Native Comps
import { FlatList } from "react-native";
import { NavOptionsItem } from "../navOptionsItem";

export const NavOptions: FunctionComponent = () => {
  const data = screenData();

  // Selectors
  const origin = useAppSelector(getOrigin);

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <NavOptionsItem entry={item} disable={origin === null} />
      )}
    />
  );
};
