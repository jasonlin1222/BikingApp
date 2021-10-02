import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

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
});

const FlatListBasics = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: "2021-12-15" },
          { key: "2021-10-14" },
          { key: "2021-9-8" },
          { key: "2021-8-20" },
          { key: "2021-7-15" },
          { key: "2021-5-30" },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};

export default FlatListBasics;
