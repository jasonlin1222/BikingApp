import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../pages/Homescreen";
import Profile from "../../pages/Profile";
import Ionicons from "react-native-vector-icons/Ionicons";
import Bike from "../../pages/Bike";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

function MyTabs({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Ride") {
            return (
              <View
                style={{
                  position: "absolute",
                  bottom: 5,
                  height: 58,
                  width: 58,
                  borderRadius: 58,
                  backgroundColor: "#5a95ff",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name={"ios-bicycle"} size={size} color={"white"} />
              </View>
            );
          } else if (route.name === "Ranking") {
            iconName = focused ? "ios-bar-chart" : "ios-bar-chart-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person-circle" : "ios-person-circle-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#4b7ddb",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Ranking" component={HomeScreen} />
      <Tab.Screen name="Ride" component={Bike} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default MyTabs;
