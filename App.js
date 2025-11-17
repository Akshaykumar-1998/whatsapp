import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';

import AppNavigator from "./navigation/AppNavigator";
import FlashScreen from "./screens/FlashScreen";
import AgreeScreen from "./screens/AgreeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import SpecificChatScreen from "./screens/SpecificChatScreen";
import { SafeAreaView } from "react-native-safe-area-context"; 
const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>         
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Flash" component={FlashScreen} />
          <Stack.Screen name="Agree" component={AgreeScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="SpecificChat" component={SpecificChatScreen}
           options={{
    headerShown: true,        
    headerBackTitleVisible: false, 
    title: "Chat",             
    headerStyle: {
      backgroundColor: "#fff",  
    },
    headerTintColor: "#000",   
  }} />
          <Stack.Screen name="MainTabs" component={AppNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
export default App;
