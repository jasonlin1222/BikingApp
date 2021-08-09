import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import MapView from "react-native-maps";

export default function Bike() {
  const [lag, setLag] = useState(37.78825);
  const [long, setLong] = useState(-122.4324);
  const [track, setTrack] = useState(true);

  return (
    <View style={{ position: "relative", height: 500 }}>
      <MapView
        style={{ left: 0, right: 0, top: 0, bottom: 0, position: "absolute" }}
        showsUserLocation={true}
        followsUserLocation={track}
      />
    </View>
  );
}
