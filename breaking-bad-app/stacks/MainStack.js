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
        headerStyle: {
          backgroundColor: "#121F12", // Set the background color of the header bar
        },
        headerTintColor: "white", // Set the text color of the header bar
        headerTitleStyle: {
          fontWeight: "bold", // Set the font weight of the header title
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Colors"
        component={ColorsList}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};
