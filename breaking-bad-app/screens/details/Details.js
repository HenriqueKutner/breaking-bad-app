import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Details({ navigate }) {
  const doSomething = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      {/* <Text>Breaking Bad!</Text> */}
      <View style={styles.box}>Outra</View>
      <View style={styles.button}>
        <Button title="Back to home" onPress={doSomething} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  box: {
    height: "100px",
    backgroundColor: "black",
  },
  // button: {
  //   backgroundColor: "purple",
  //   width: "100px",
  // },
});
