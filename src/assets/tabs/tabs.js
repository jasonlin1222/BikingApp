import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../pages/Homescreen";
import Profile from "../../pages/Profile";
import Ionicons from "react-native-vector-icons/Ionicons";
import Bike from "../../pages/Bike";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Ride") {
            iconName = focused ? "add-circle" : "ios-add-circle-outline";
            return (
              <View
                style={{
                  position: "absolute",
                  bottom: 0, // space from bottombar
                  height: 68,
                  width: 68,
                  borderRadius: 68,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name={iconName} color={color} size={66} />
              </View>
            );
          } else if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person-circle" : "ios-person-circle-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Ride" component={Bike} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default MyTabs;
