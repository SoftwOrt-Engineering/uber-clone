import React, { FunctionComponent } from "react";
// Types
import { MainScreenProp } from "../../../slices/nav/types";
// Helper
import { useNavigation } from "@react-navigation/native";
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

export const RideOptionsCard: FunctionComponent = () => {
  const navigation = useNavigation<MainScreenProp>();

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
      <View style={styles.infoContainer}></View>
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
