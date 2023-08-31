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
      container: "Blue",
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
      <Text style={styles.containerText}>{item.container}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={containerValues}
      renderItem={renderContainerItem}
      keyExtractor={(item) => item.key.toString()}
      contentContainerStyle={styles.listContainer}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 10,
  },
  container: {
    width: "100%",
    height: 100,
    marginBottom: 20,
  },
});
