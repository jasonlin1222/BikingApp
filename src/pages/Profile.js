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
          uri: "https://bootdey.com/img/Content/avatar/avatar1.png",
        }}
      />
      <View style={profilestyle.body}>
        <View style={profilestyle.bodyContent}>
          <Text style={profilestyle.name}>John Doe</Text>
          <Text style={profilestyle.info}>Ranking: 110</Text>
          <Text style={profilestyle.description}>
            Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum
            electram expetendis, omittam deseruisse consequuntur ius an,
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
                navigation.navigate("History ");
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
