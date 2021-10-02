import React, { FunctionComponent } from "react";
// Native Comps
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";

interface IProps {
  onPressRide: (event: GestureResponderEvent) => void;
  onPressEats: (event: GestureResponderEvent) => void;
}

export const NavigateCardOptions: FunctionComponent<IProps> = ({
  onPressRide,
  onPressEats,
}) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.touchItemCar} onPress={onPressRide}>
        <Icon name="car" type="font-awesome" color="white" size={16} />
        <Text style={styles.textInfoCar}>Rides</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchItemFood} onPress={onPressEats}>
        <Icon name="fast-food-outline" type="ionicon" color="black" size={16} />
        <Text style={styles.textInfoFood}>Eats</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    marginTop: "auto",
    borderTopWidth: 0.5,
    borderColor: "#e7e7e7",
    paddingVertical: 8,
    justifyContent: "space-evenly",
  },
  touchItemCar: {
    flexDirection: "row",
    backgroundColor: "black",
    justifyContent: "space-between",
    width: 96,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 50,
  },
  touchItemFood: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 96,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 50,
  },
  textInfoCar: {
    color: "#fff",
    textAlign: "center",
  },
  textInfoFood: {
    textAlign: "center",
  },
});
