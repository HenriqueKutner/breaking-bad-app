import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

export default function Home({ navigation }) {
  const goToColorsList = () => {
    navigation.navigate("ColorsList");
  };
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Breaking Bad</Text>
      </View>
      <Button title="Colors" onPress={goToColorsList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  title: {
    flexDirection: "row",
    justifyContent: "center",
  },
  titleText: {
    fontSize: "20px",
    marginBottom: "10px",
  },
});
