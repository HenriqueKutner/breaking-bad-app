import React, { useEffect, useState } from "react";
import { View, Image, Text, StyleSheet, FlatList } from "react-native";

export default function Details({ route }) {
  const [colorData, setColorData] = useState([]);
  const routeParam = route.params.color;

  const blueData = [
    {
      key: 1,
      image:
        "https://ntvb.tmsimg.com/assets/p8696131_b_h10_aa.jpg?w=1280&h=720",
      text: "Text 1Text 1Text 1Text 1Text 1Text 1Text 1Text 1Text 1Text 1Text 1Text 1Text 1Text 1Text 1",
    },
    {
      key: 2,
      image:
        "https://ntvb.tmsimg.com/assets/p8696131_b_h10_aa.jpg?w=1280&h=720",
      text: "Text 1",
    },
  ];

  const redData = [
    {
      key: 1,
      image:
        "https://ntvb.tmsimg.com/assets/p8696131_b_h10_aa.jpg?w=1280&h=720",
      text: "red",
    },
  ];

  useEffect(() => {
    if (routeParam === "blue") {
      setColorData(blueData);
    }
    if (routeParam === "red") {
      setColorData(redData);
    }
  }, [routeParam]);

  const renderListItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.introText}>
        Introduction Text Goes HereIntroduction Text Goes HereIntroduction Text
        Goes HereIntroduction Text Goes HereIntroduction Text Goes
      </Text>
      <FlatList
        data={colorData}
        renderItem={renderListItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  introText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  listContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  image: {
    flex: 1,
    width: 400,
    height: 200,
    resizeMode: "cover",
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
