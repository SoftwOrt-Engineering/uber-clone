import React, { FunctionComponent, useState } from "react";
// Types
import { MainScreenProp, UberOptions } from "../../../slices/nav/types";
// Helper
import { useNavigation } from "@react-navigation/native";
import { driverOptions } from "../../../../static/options/options";
// Native Comps
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
// Components
import { Separator } from "../../separator";
import { RideList } from "./rideList";
import { ChooseRide } from "./chooseRide";

export const RideOptionsCard: FunctionComponent = () => {
  const navigation = useNavigation<MainScreenProp>();
  const data = driverOptions();

  // States
  const [selected, setSelected] = useState<UberOptions | null>(null);

  // Handler
  const handleSelectItem = (entry: UberOptions) => {
    setSelected(entry);
  };

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
        <RideList
          entries={data}
          selectedId={selected && selected.id}
          selectItem={handleSelectItem}
        />
        <ChooseRide
          disabled={selected === null}
          title={selected && selected.title}
        />
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
});
