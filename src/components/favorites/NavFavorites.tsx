import React, { FunctionComponent } from "react";
// Helper
import { favoritesData } from "../../../static/favs/favoritesData";
// Native Comps
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";

export const NavFavorites: FunctionComponent = () => {
  const data = favoritesData();

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity style={styles.container}>
          <Icon
            style={styles.icon}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={styles.favHeader}>{location}</Text>
            <Text style={styles.favInfo}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    paddingLeft: 5,
    paddingRight: 20,
  },
  separator: {
    backgroundColor: "#e0e0e0",
    height: StyleSheet.hairlineWidth,
  },
  icon: {
    marginRight: 16,
    padding: 12,
    backgroundColor: "#e0e0e0",
    borderRadius: 20,
  },
  favHeader: {
    fontSize: 18,
  },
  favInfo: {
    color: "grey",
  },
});
