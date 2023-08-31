import React from "react";
import { View, Image, Text, StyleSheet, FlatList } from "react-native";

export default function Details({ route }) {
  const c = route.params.color;
  const myData = [
    {
      key: 1,
      image: "image_url_1",
      text: "Text 1",
    },
    {
      key: 2,
      image: "image_url_2",
      text: "Text 2",
    },
  ];

  const renderListItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return (
    <FlatList
      data={myData}
      renderItem={renderListItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.listContainer}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1, // Fill the available space
    justifyContent: "center", // Vertically center items
    alignItems: "center", // Horizontally center items
    paddingVertical: 10,
  },
  itemContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
