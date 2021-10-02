import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import homescreenstyle from "../style/homescreenstyle";
import Leaderboard from "react-native-leaderboard";

const Item = ({ title }) => (
  <View style={homescreenstyle.item}>
    <Text style={homescreenstyle.title}>{title}</Text>
  </View>
);

// add friend and ranking

export default function HomeScreen() {
  const renderItem = ({ item }) => <Item title={item.title} />;
  const data = [
    { userName: "Joe", highScore: 200 },
    { userName: "Jenny", highScore: 153 },
    { userName: "Fred", highScore: 132 },
    { userName: "Bonnie", highScore: 120 },
    { userName: "Jack", highScore: 89 },
  ];
  return (
    <View style={homescreenstyle.container}>
      <Leaderboard data={data} sortBy="highScore" labelBy="userName" />
      <StatusBar style="auto" />
    </View>
  );
}
