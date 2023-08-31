import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Home({ navigation }) {
  const doSomething = () => {
    console.log(4444);
    navigation.navigate("Details");
  };
  return (
    <View style={styles.container}>
      {/* <Text>Breaking Bad!</Text> */}
      <View style={styles.box}></View>
      <View style={styles.button}>
        <Button title="test" onPress={doSomething} />
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
