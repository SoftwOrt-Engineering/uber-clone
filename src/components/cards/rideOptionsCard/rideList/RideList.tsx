import React, { FunctionComponent, useState } from "react";
// Types
import { TravelInfo, UberOptions } from "../../../../slices/nav/types";
// Native Comps
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface IProps {
  entries: UberOptions[];
  selectedId: string | null;
  selectItem: (item: UberOptions) => void;
  travelInfo: TravelInfo;
}

export const RideList: FunctionComponent<IProps> = ({
  entries,
  selectedId = null,
  selectItem,
  travelInfo,
}) => {
  // UseStates
  const [chargeRate] = useState<number>(1.5);

  // Handler
  const handlePrice = (multiplier: number): string => {
    const price = new Intl.NumberFormat("de-de", {
      style: "currency",
      currency: "EUR",
    }).format((travelInfo.duration.value * chargeRate * multiplier) / 100);

    return price;
  };

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
            <Text>{travelInfo.duration.text} Travel Time</Text>
          </View>
          <Text style={styles.costsText}>{handlePrice(multiplier)}</Text>
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
