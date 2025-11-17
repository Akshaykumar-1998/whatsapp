import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default function AgreeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Terms & Privacy Policy</Text>
      <Text style={styles.desc}>Tap "Agree & Continue" to accept the terms.</Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.btnText}>Agree & Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
    padding: width * 0.05, 
    backgroundColor: "#fff",
  },

  title: {
    fontSize: width * 0.07,
    fontWeight: "bold",
    marginBottom: height * 0.01,
  },

  desc: {
    textAlign: "center",
    fontSize: width * 0.04,
    marginBottom: height * 0.05,
    paddingHorizontal: width * 0.08,
  },

  btn: {
    backgroundColor: "#25D366",
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.15,
    borderRadius: width * 0.02,
  },

  btnText: {
    color: "white",
    fontSize: width * 0.045,
    fontWeight: "600",
  },
});
