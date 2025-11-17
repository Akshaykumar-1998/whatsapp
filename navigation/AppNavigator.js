import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";

import ChatsScreen from "../screens/ChatsScreen";
import StatusScreen from "../screens/StatusScreen";
import CallsScreen from "../screens/CallsScreen";

const Tab = createBottomTabNavigator();

const GradientHeader = ({ title }) => (
  <LinearGradient
     colors={['#00C853', '#075E54']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={styles.headerContainer}
  >
    <Text style={styles.headerTitle}>{title}</Text>
  </LinearGradient>
);

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        header: () => <GradientHeader title={route.name} />, 
        tabBarActiveTintColor: "#075E54",
        tabBarInactiveTintColor: "#999",
        tabBarStyle: {
          backgroundColor: "#fff",
          height: 60,
          paddingBottom: 8,
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: "600",
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Chats") iconName = "chatbubble-ellipses-outline";
          else if (route.name === "Status") iconName = "ellipse-outline";
          else if (route.name === "Calls") iconName = "call-outline";
          return <Ionicons name={iconName} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Chats" component={ChatsScreen} />
      <Tab.Screen name="Status" component={StatusScreen} />
      <Tab.Screen name="Calls" component={CallsScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
  },
});
