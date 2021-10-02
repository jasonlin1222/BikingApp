import React from "react";

import MyTabs from "./src/assets/tabs/tabs";
import Welcome from "./src/pages/startscreen/Welcome";
import Friends from "./src/pages/Friends";
import History from "./src/pages/History";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={MyTabs} />
        <Stack.Screen name="Friends" component={Friends} />
        <Stack.Screen name="History" component={History} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
