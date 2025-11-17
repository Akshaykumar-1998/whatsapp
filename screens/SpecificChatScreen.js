import React from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default function SpecificChatScreen({ route }) {
  const { chat } = route.params;

  const messages = [
    { id: "1", text: "Hey, how are you?", sender: "other" },
    { id: "2", text: "I'm good bro!", sender: "me" },
    { id: "3", text: "Send the documents.", sender: "other" },
    { id: "4", text: "Wait 2 mins, sending…", sender: "me" },
    { id: "5", text: "Okay 👍", sender: "other" },
  ];

  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.messageBubble,
        item.sender === "me" ? styles.myBubble : styles.theirBubble,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerName}>{chat.name}</Text>
      </View>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={{ padding: 10 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  header: {
    width: "100%",
    padding: 15,
    backgroundColor: "#25D366",
  },

  headerName: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },

  messageBubble: {
    maxWidth: "75%",
    padding: 10,
    borderRadius: 12,
    marginVertical: 5,
  },

  myBubble: {
    alignSelf: "flex-end",
    backgroundColor: "#DCF8C6",
  },

  theirBubble: {
    alignSelf: "flex-start",
    backgroundColor: "#ECECEC",
  },

  messageText: { fontSize: 16 },
});
