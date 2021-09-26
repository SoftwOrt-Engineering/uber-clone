import React, { FunctionComponent } from "react";
// Helper
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Components
import { EatsScreen, HomeScreen, MapScreen } from "../screens";

export const StackNavigator: FunctionComponent = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="EatsScreen"
        component={EatsScreen}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};
