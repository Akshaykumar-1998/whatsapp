import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const NewsCard = ({ title, slug }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.slug}>{slug}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: width * 0.03,
    padding: width * 0.04,
    marginBottom: height * 0.015,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: width * 0.045,
    fontWeight: "600",
    color: "#333",
    marginBottom: 6,
  },
  slug: {
    fontSize: width * 0.035,
    color: "#666",
  },
});

export default NewsCard;
