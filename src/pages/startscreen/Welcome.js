import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Welcome({ navigation }) {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 2,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontWeight: "bold",
          justifyContent: "center",
          fontSize: 50,
          width: 400,
        }}
      >
        Welcome
      </Text>
      <TouchableOpacity
        color="#4b7ddb"
        style={{
          alignItems: "center",
          backgroundColor: "#69c3ff",
          padding: 10,
          margin: 20,
        }}
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: "Home" }],
          });
        }}
      >
        <Text style={{ fontSize: 20 }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
