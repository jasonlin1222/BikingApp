import profilestyle from "../style/profilestyle";

import React, { Component } from "react";
import { Stylesheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function FriendProfile({ navigation, route }) {
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
          <Text style={profilestyle.name}>Devin</Text>
          <Text style={profilestyle.info}>Ranking: 230</Text>
          <Text style={profilestyle.description}>
            Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum
            electram expetendis, omittam deseruisse consequuntur ius an,
          </Text>
        </View>
      </View>
    </View>
  );
}
