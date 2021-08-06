import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import homescreenstyle from "../style/homescreenstyle";
import styles from "../style/style";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Goup one",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Group two",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Group three",
  },
];

const Item = ({ title }) => (
  <View style={homescreenstyle.item}>
    <Text style={homescreenstyle.title}>{title}</Text>
  </View>
);

export default function HomeScreen() {
  const renderItem = ({ item }) => <Item title={item.title} />;
  return (
    <View style={homescreenstyle.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <StatusBar style="auto" />
    </View>
  );
}
