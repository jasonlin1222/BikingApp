import React from "react";
import MapView from "react-native-maps";

export default function Navi() {
  return (
    <View>
      <MapView showsUserLocation={true} followsUserLocation={true}></MapView>
    </View>
  );
}
