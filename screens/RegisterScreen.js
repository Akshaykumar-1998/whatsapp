import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default function RegisterScreen({ navigation }) {
  const [number, setNumber] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Phone Number</Text>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="number-pad"
          placeholderTextColor={"#777"}
          value={number}
          onChangeText={setNumber}
          maxLength={10}
        />

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            if (number.length >= 10) navigation.replace("MainTabs");
          }}
        >
          <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: width * 0.07,
    justifyContent: "flex-start",
    paddingTop: height * 0.15, 
  },

  title: {
    fontSize: width * 0.065,
    fontWeight: "bold",
    marginBottom: height * 0.02,
    textAlign: "center",
  },

  formContainer: {
    width: "100%",
    alignItems: "center",
  },

  input: {
    width: "90%",
    borderWidth: 1,
    borderRadius: width * 0.02,
    paddingVertical: height * 0.017,
    paddingHorizontal: width * 0.05,
    fontSize: width * 0.045,
    borderColor: "#ccc",
    marginBottom: height * 0.035,
  },

  btn: {
    width: "90%",
    backgroundColor: "#25D366",
    paddingVertical: height * 0.02,
    borderRadius: width * 0.02,
    alignItems: "center",
  },

  btnText: {
    color: "#fff",
    fontSize: width * 0.045,
    fontWeight: "700",
  },
});
