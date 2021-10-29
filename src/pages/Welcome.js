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

export default function Welcome({ navigation }) {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 2,
      }}
    >
      <Image style={styles.image} source={require("../assets/logo.png")} />
      <Text style={styles.text}>Welcome To GoBike</Text>
      <TouchableOpacity
        color="#4b7ddb"
        style={{
          alignItems: "center",
          backgroundColor: "#69c3ff",
          padding: 10,
          margin: 20,
          borderRadius: 10,
        }}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text style={{ fontSize: 20 }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
