import profilestyle from "../style/profilestyle";

import React, { Component } from "react";
import { Stylesheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Profile({ navigation }) {
  return (
    <View style={profilestyle.container}>
      <View style={profilestyle.header}></View>
      <Image
        style={profilestyle.avatar}
        source={{
          uri: "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049_1280.png",
        }}
      />
      <View style={profilestyle.body}>
        <View style={profilestyle.bodyContent}>
          <Text style={profilestyle.name}>John Doe</Text>
          <Text style={profilestyle.info}>Ranking: 110</Text>
          <Text style={profilestyle.description}>
            Lorem ipsum dolor sit amet
          </Text>
          <View style={profilestyle.button}>
            <TouchableOpacity
              style={profilestyle.buttonContainer}
              onPress={() => {
                navigation.navigate("Friends");
              }}
            >
              <Text>Friends</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={profilestyle.buttonContainer}
              onPress={() => {
                navigation.navigate("History");
              }}
            >
              <Text>History</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
