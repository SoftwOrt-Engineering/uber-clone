import React, { FunctionComponent, useState } from "react";
// Types
import { MainScreenProp, UberOptions } from "../../../slices/nav/types";
// Helper
import { useNavigation } from "@react-navigation/native";
import { driverOptions } from "../../../../static/options/options";
// Native Comps
import {
  Image,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
// Components
import { Separator } from "../../separator";

export const RideOptionsCard: FunctionComponent = () => {
  const navigation = useNavigation<MainScreenProp>();
  const data = driverOptions();

  // States
  const [selected, setSelected] = useState<UberOptions | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={styles.touchHeader}
        >
          <Icon
            name="chevron-left"
            type="font-awesome"
            size={20}
            color="grey"
          />
        </TouchableOpacity>
        <Text style={styles.textHeader}>Select a Ride</Text>
      </View>
      <Separator />
      <View style={styles.infoContainer}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item: { id, title, multiplier, image }, item }) => (
            <TouchableOpacity
              onPress={() => setSelected(item)}
              style={[
                styles.touchOptions,
                {
                  backgroundColor:
                    selected && selected.id === id ? "lightgrey" : "white",
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
      </View>
      <View>
        <TouchableOpacity
          disabled={!selected}
          style={[
            styles.touchChoose,
            { backgroundColor: !selected ? "lightgrey" : "black" },
          ]}
        >
          <Text style={styles.chooseText}>
            Choose: {selected ? selected.title : ""}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  touchHeader: {
    position: "absolute",
    top: 13,
    left: 16,
    padding: 12,
    zIndex: 50,
    borderRadius: 20,
  },
  textHeader: {
    textAlign: "center",
    paddingVertical: 20,
    fontSize: 24,
  },
  infoContainer: {
    flexGrow: 1,
  },
  listImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginTop: -20,
  },
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
  ridesHeader: {
    fontSize: 24,
  },
  costsText: {
    fontSize: 24,
  },
  touchChoose: {
    paddingVertical: 12,
    marginHorizontal: 16,
  },
  chooseText: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
});
