import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const { width, height } = Dimensions.get("window");

export default function AgreeScreen({ navigation }) {
  return (
    <View style={styles.container}>
    
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Terms & Privacy Policy</Text>
        <Text style={styles.desc}>
          Welcome to our App! Please read the following terms and conditions carefully. By tapping "Agree & Continue", you accept these terms.
          
          {"\n\n"}1. **Acceptance of Terms**: You agree to our privacy policy and terms of service.
          {"\n\n"}2. **User Obligations**: You are responsible for maintaining the confidentiality of your account.
          {"\n\n"}3. **Prohibited Activities**: Do not misuse the app for illegal activities.
          {"\n\n"}4. **Content**: All messages, data, and information you send are subject to our guidelines.
          {"\n\n"}5. **Changes to Terms**: We may update these terms from time to time.
          {"\n\n"}6. **Contact**: For any questions, reach out to support@example.com.
          {"\n\n"}Please scroll to the bottom to continue.
        </Text>
      </ScrollView>

    
      <TouchableOpacity
        onPress={() => navigation.navigate("Register")}
        activeOpacity={0.8}
        style={styles.buttonWrapper}
      >
        <LinearGradient
          colors={['#00C853', '#075E54']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.btn}
        >
          <Text style={styles.btnText}>Agree & Continue</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.05,
  },

  scrollContent: {
    paddingBottom: height * 0.02,
  },

  title: {
    fontSize: width * 0.07,
    fontWeight: "bold",
    marginBottom: height * 0.02,
  },

  desc: {
    fontSize: width * 0.04,
    lineHeight: width * 0.06,
    textAlign: "left",
    marginBottom: height * 0.02,
  },

  buttonWrapper: {
    marginBottom: height * 0.03,
  },

  btn: {
    paddingVertical: height * 0.02,
    borderRadius: width * 0.02,
    alignItems: "center",
  },

  btnText: {
    color: "#fff",
    fontSize: width * 0.045,
    fontWeight: "600",
  },
});
