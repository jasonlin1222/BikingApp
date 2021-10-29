import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

const styles = StyleSheet.create({
  image: {
    padding: 20,
    width: 300,
    height: 300,
    borderRadius: 80,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    justifyContent: "center",
    fontSize: 40,
    width: 400,
  },
});

export default function Finish({ navigation }) {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 2,
      }}
    >
      <Text style={styles.text}>Well Done!</Text>
      <Text style={styles.text}>You've ride 3.4 Km </Text>
      <TouchableOpacity
        color="#4b7ddb"
        style={{
          alignItems: "center",
          backgroundColor: "#69c3ff",
          padding: 10,
          margin: 100,
          borderRadius: 10,
        }}
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: "Home" }],
          });
        }}
      >
        <Text style={{ fontSize: 20 }}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}
