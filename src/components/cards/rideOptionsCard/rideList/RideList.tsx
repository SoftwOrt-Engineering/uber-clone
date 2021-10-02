import React, { FunctionComponent } from "react";
// Native Comps
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { UberOptions } from "../../../../slices/nav/types";

interface IProps {
  entries: UberOptions[];
  selectedId: string | null;
  selectItem: (item: UberOptions) => void;
}

export const RideList: FunctionComponent<IProps> = ({
  entries,
  selectedId = null,
  selectItem,
}) => {
  return (
    <FlatList
      data={entries}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { id, title, multiplier, image }, item }) => (
        <TouchableOpacity
          onPress={() => selectItem(item)}
          style={[
            styles.touchOptions,
            {
              backgroundColor:
                selectedId && selectedId === id ? "lightgrey" : "white",
            },
          ]}
        >
          <Image style={styles.listImage} source={{ uri: image }} />
          <View style={styles.ridesList}>
            <Text style={styles.ridesHeader}>{title}</Text>
            <Text>Travel time...</Text>
          </View>
          <Text style={styles.costsText}>€99</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  touchOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 40,
    height: 80,
  },
  ridesList: {
    marginLeft: -24,
  },
  listImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginTop: -20,
  },
  ridesHeader: {
    fontSize: 24,
  },
  costsText: {
    fontSize: 24,
  },
});
