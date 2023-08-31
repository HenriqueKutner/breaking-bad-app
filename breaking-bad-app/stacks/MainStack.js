import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "../screens/home/Home";
import ColorsList from "../screens/colorsList/ColorsList";
import Details from "../screens/details/Details";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        initialRouteName: "Home",
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ColorsList" component={ColorsList} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};
