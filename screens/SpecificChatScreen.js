import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default function SpecificChatScreen({ route, navigation }) {
  const { chat } = route.params;

  const [messageText, setMessageText] = useState('');

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
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={90}
    >
   
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => navigation.navigate('MainTabs')} style={styles.backButton}>
            <Icon name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>

          <Image
            source={{ uri: chat.avatar }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.headerName}>{chat.name}</Text>
            <Text style={styles.headerStatus}>{chat.status || "Online"}</Text>
          </View>
        </View>

        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="call-outline" size={22} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <MaterialIcon name="videocam" size={22} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="ellipsis-vertical" size={22} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

 
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={{ padding: 10 }}
        showsVerticalScrollIndicator={false}
      />

   
      <View style={styles.inputContainer}>
        <TouchableOpacity style={{ marginHorizontal: 5 }}>
          <Icon name="happy-outline" size={28} color="#555" />
        </TouchableOpacity>
        <TextInput
          style={styles.textInput}
          placeholder="Type a message"
          value={messageText}
          onChangeText={setMessageText}
          placeholderTextColor={'black'}
        />
        <TouchableOpacity style={{ marginHorizontal: 5 }}>
          <Icon name="send" size={28} color="#075E54" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  header: {
    width: "100%",
    padding: 10,
    backgroundColor: "#075E54",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  backButton: {
    marginRight: 10,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },

  headerName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  headerStatus: {
    color: "#fff",
    fontSize: 12,
  },

  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconButton: {
    marginHorizontal: 5,
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

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: 0.5,
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },

  textInput: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    fontSize: 16,
  },
});
