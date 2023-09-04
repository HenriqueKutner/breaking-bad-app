import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Home({ navigation }) {
  const goToColorsList = () => {
    navigation.navigate("Colors");
  };

  return (
    <View style={styles.container}>
      <View style={styles.greenBackground}>
        <Text style={styles.titleText}>Breaking Bad</Text>
      </View>
      <Button
        title="Colors"
        onPress={goToColorsList}
        color="#001a03" // Set the color of the button here
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121F12",
  },
  greenBackground: {
    padding: 20,
    borderRadius: 10,
  },
  titleText: {
    fontSize: 20,
    color: "white",
  },
});
