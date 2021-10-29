import { Picker } from "@react-native-picker/picker";
import React, { useEffect, useState } from "react";
import { View, Text, Button, Animated, Alert } from "react-native";
import { Card } from "react-native-elements/dist/card/Card";
import { TouchableOpacity } from "react-native-gesture-handler";
import MapView from "react-native-maps";
import { Marker, Polyline } from "react-native-maps";
import ReactWeather from "react-open-weather-widget";

const defaultRegion = { latitude: 25.105497, longitude: 121.597366 };

export default function Navi({ navigation, coord }) {
  const [pickedRoute, setPickedRoute] = useState();

  const createTwoButtonAlert = () =>
    Alert.alert("You've fallen", "Are you ok?", [
      {
        text: "Yes",
        onPress: () => console.log("Ask me later pressed"),
      },
      {
        text: "No",
        onPress: () => console.log("Cancel Pressed"),
      },
    ]);

  return (
    <View style={{ position: "relative", margin: 10 }}>
      <View style={{ position: "relative", height: 500 }}>
        <MapView
          style={{
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            position: "absolute",
          }}
          showsUserLocation={true}
          defaultRegion={defaultRegion}
        >
          <Polyline
            coordinates={[
              { latitude: 25.125403444767883, longitude: 121.46677489722994 },
              { latitude: 25.050153876407784, longitude: 121.57834989645482 },
            ]}
            strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
            strokeColors={["#7F0000"]}
            strokeWidth={6}
          />
        </MapView>
      </View>
      <Text style={{ fontSize: 30 }}>Traveled: 3.4 Km</Text>
      <TouchableOpacity onPress={createTwoButtonAlert} activeOpacity={1}>
        <Text style={{ fontSize: 30 }}> UV: 0 </Text>
      </TouchableOpacity>
      <TouchableOpacity
        color="#4b7ddb"
        style={{
          position: "relative",
          alignItems: "center",
          backgroundColor: "#69c3ff",
          padding: 10,
          margin: 20,
          borderRadius: 10,
        }}
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: "Finish" }],
          });
        }}
      >
        <Text style={{ fontSize: 20 }}>End Trip</Text>
      </TouchableOpacity>
    </View>
  );
}
