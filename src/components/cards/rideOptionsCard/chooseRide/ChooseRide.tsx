import React, { FunctionComponent } from "react";
// Native Comps
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface IProps {
  disabled: boolean;
  title: string | null;
}

export const ChooseRide: FunctionComponent<IProps> = ({
  disabled,
  title = "",
}) => {
  return (
    <View>
      <TouchableOpacity
        disabled={disabled}
        style={[
          styles.touchChoose,
          { backgroundColor: disabled ? "lightgrey" : "black" },
        ]}
      >
        <Text style={styles.chooseText}>Choose: {title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
