import React, { FunctionComponent } from "react";
// Types
import { NavOptionEntry } from "../../slices/nav/types";
// Native Comps
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const data: NavOptionEntry[] = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order Food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

export const NavOptions: FunctionComponent = () => {
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.listItem}>
          <View>
            <Image
              style={styles.image}
              source={{
                uri: item.image,
              }}
            />
            <Text style={styles.text}>{item.title}</Text>
          </View>
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
