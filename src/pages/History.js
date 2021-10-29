import React from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  item: {
    padding: 30,
    fontSize: 40,
    height: 120,
  },
  user: {
    margin: 20,
    fontSize: 20,
  },
  date: {
    fontSize: 20,
  },
  des: {
    fontSize: 15,
  },
});

const users = [
  {
    date: "2018-11-12",
    des: "X route",
  },
  {
    date: "2021-2-2",
    des: "X route",
  },
  {
    date: "2021-9-12",
    des: "X route",
  },
];

const FlatListBasics = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Card containerStyle={{ padding: 5 }}>
        {users.map((u, i) => {
          return (
            <View key={i} style={styles.user}>
              <TouchableOpacity
                onclick={() => {
                  console.log("hello");
                }}
              >
                <Text style={styles.date}>{u.date}</Text>
                <Card.Divider />
                <Text style={styles.des}>{u.des}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </Card>
    </View>
  );
};

export default FlatListBasics;
