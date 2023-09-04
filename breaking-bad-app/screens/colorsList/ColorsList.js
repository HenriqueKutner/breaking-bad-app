import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function ColorsList({ navigation }) {
  const goToDetails = (color) => {
    navigation.navigate("Details", { color: color });
  };

  const containerValues = [
    {
      key: 1,
      container: "Lealdade, paz",
      value: "blue",
    },
    {
      key: 2,
      container: "Red",
      value: "red",
    },
    {
      key: 3,
      container: "Green",
      value: "green",
    },
    {
      key: 4,
      container: "Yellow",
      value: "yellow",
    },
    {
      key: 5,
      container: "Purple",
      value: "purple",
    },
  ];

  const renderContainerItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => goToDetails(item.value)}
      style={[styles.container, { backgroundColor: item.value }]}
    >
      <Text style={styles.content}>{item.container}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.wrapper}>
      {/* <Text style={styles.introText}>Toda cor tem um significado</Text> */}
      <FlatList
        data={containerValues}
        renderItem={renderContainerItem}
        keyExtractor={(item) => item.key.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  container: {
    height: 150,
  },
  listContainer: {},
  content: {
    textAlign: "center",
  },
  introText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 10,
  },
});
