import React from "react";
import MyTabs from "./src/assets/tabs/tabs";
import Welcome from "./src/pages/Welcome";
import Friends from "./src/pages/Friends";
import History from "./src/pages/History";
import FriendProfile from "./src/pages/FriendProfile";
import Login from "./src/pages/Login";
import { StyleSheet, Text, View } from "react-native";
import styles from "./style/style";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navi from "./src/pages/Navi";
import Finish from "./src/pages/Finish";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: "GoBike",
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={MyTabs} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Friends" component={Friends} />
        <Stack.Screen name="FriendProfile" component={FriendProfile} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Navi" component={Navi} />
        <Stack.Screen name="Finish" component={Finish} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
