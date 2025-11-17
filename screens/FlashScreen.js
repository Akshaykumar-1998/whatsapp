import React, { useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

const { width, height } = Dimensions.get("window");

export default function FlashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => navigation.replace("Agree"), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo.png")}
        style={styles.logoImage}
        resizeMode="cover"
      />
      <Text style={styles.logo}>MyChat App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", 
  },

  logoImage: {
    width: width * 0.35,
    height: width * 0.35,
    
   
    borderRadius: (width * 0.35) / 2,

    marginBottom: height * 0.03,
  },

  logo: {
    fontSize: width * 0.075,
    color: "#25D366",
    fontWeight: "bold",
  },
});
