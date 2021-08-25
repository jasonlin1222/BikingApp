import { Picker } from "@react-native-picker/picker";
import React, { useEffect, useState } from "react";
import { View, Text, Button, Animated } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

const Route = [
  "基隆河沿岸自行車道(右)",
  "基隆河沿岸自行車道(左)",
  "金色水岸自行車道",
  "八里左岸自行車道",
  "大漢溪右岸新店土城線",
  "景美溪河濱自行車道",
  "淡水河河濱自行車道",
  "雙溪河濱自行車道",
  "南港六張犁自行車道",
];
const markers = [
  {
    latlng: { latitude: 25.125403444767883, longitude: 121.46677489722994 },
    title: "基隆河沿岸自行車道(右)",
    description: "關渡捷運站",
  },
  {
    latlng: { latitude: 25.050153876407784, longitude: 121.57834989645482 },
    title: "基隆河沿岸自行車道(左)",
    description: "中山捷運站",
  },
  {
    latlng: { latitude: 25.167912309123707, longitude: 121.44623346178521 },
    title: "金色水岸自行車道",
    description: "淡水捷運站",
  },
  {
    latlng: { latitude: 25.122762273323886, longitude: 121.45268415633248 },
    title: "八里左岸自行車道",
    description: "關渡大橋左岸",
  },
  {
    latlng: { latitude: 24.957969249045025, longitude: 121.53706778376859 },
    title: "大漢溪右岸新店土城線",
    description: "新店捷運站",
  },
  {
    latlng: { latitude: 25.050153876407784, longitude: 121.57834989645482 },
    title: "景美溪河濱自行車道",
    description: "動物園站",
  },
  {
    latlng: { latitude: 25.035338308960156, longitude: 121.4998192692327 },
    title: "淡水河河濱自行車道",
    description: "龍山寺站",
  },
  {
    latlng: { latitude: 25.08746320064233, longitude: 121.5151725264449 },
    title: "雙溪河濱自行車道",
    description: "",
  },
  {
    latlng: { latitude: 25.023837749201185, longitude: 121.5531201115598 },
    title: "南港六張犁自行車道",
    description: "六張犁捷運站",
  },
];

const defaultRegion = { latitude: 25.105497, longitude: 121.597366 };

export default function Bike() {
  const [pickedRoute, setPickedRoute] = useState();

  let index = 0;
  let animation = new Animated.Value(0);


  return (
    <View>
      <View style={{ position: "relative", height: 500 }}>
        <MapView
          ref={(map) => (this.map = map)}
          followsUserLocation={true}
          showsUserLocation={true}
          showsMyLocationButton={true}
          showsCompass={true}
          toolbarEnabled={true}
          zoomEnabled={true}
          rotateEnabled={true}

          style={{ flex: 1 }}
          region={{
            latitude: 51.4718,
            longitude: -0.0749,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
          }}
        >
          {markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
            >
              <Animated.View></Animated.View>
            </Marker>
          ))}
        </MapView>
      </View>
      <Picker
        selectedValue={pickedRoute}
        onValueChange={(itemValue, itemIndex) => {
          setPickedRoute(itemIndex);
        }}
      >
        {Route.map((value, index) => {
          return <Picker.Item key={index} label={value} value={index} />;
        })}
      </Picker>
      <Button title="Select"
        onPress={this.map.animateToRegion(this.randomRegion())} />
    </View>
  );
}