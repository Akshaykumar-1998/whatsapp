import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const chats = [
  {
    id: "1",
    name: "Suraj",
    message: "Hey, what's up?",
    time: "10:30 AM",
    unread: 2,
    image: require("../assets/images.jpg"),
    status: "Online",
  },
  {
    id: "2",
    name: "Mohin",
    message: "Send the files.",
    time: "09:12 AM",
    unread: 0,
    image: require("../assets/imagess.jpg"),
    status: "Offline",
  },
  {
    id: "3",
    name: "Rahi",
    message: "Call me ASAP!",
    time: "Yesterday",
    unread: 1,
    image: require("../assets/user3.jpg"),
    status: "Online",
  },
  {
    id: "4",
    name: "Akshay",
    message: "Okay bro 👍",
    time: "Yesterday",
    unread: 0,
    image: require("../assets/images.jpg"),
    status: "Offline",
  },
  {
    id: "5",
    name: "Neha",
    message: "This is a special chat screen.",
    time: "08:45 AM",
    unread: 3,
    image: require("../assets/user4.jpg"),
    status: "Online",
  },
];

export default function ChatsScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.chatContainer}
      onPress={() =>
        navigation.navigate("SpecificChat", {
          chat: item,
          name: item.name,
          avatar: item.image,
          status: item.status,
        })
      }
    >
      <Image source={item.image} style={styles.profileImage} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message} numberOfLines={1}>
          {item.message}
        </Text>
      </View>

      <View style={styles.rightContainer}>
        <Text style={styles.time}>{item.time}</Text>
        {item.unread > 0 && (
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadText}>{item.unread}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  chatContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: width * 0.03,
    paddingHorizontal: width * 0.04,
    borderBottomWidth: 0.5,
    borderColor: "#ddd",
  },

  profileImage: {
    width: width * 0.14,
    height: width * 0.14,
    borderRadius: width * 0.07,
    marginRight: width * 0.04,
  },

  textContainer: { flex: 1 },

  name: {
    fontSize: width * 0.045,
    fontWeight: "600",
  },

  message: {
    fontSize: width * 0.035,
    color: "#666",
    marginTop: 2,
  },

  rightContainer: { width: width * 0.18, alignItems: "flex-end" },

  time: {
    fontSize: width * 0.032,
    color: "#075E54",
    marginBottom: 4,
  },

  unreadBadge: {
    backgroundColor: "#075E54",
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 20,
  },

  unreadText: {
    color: "#fff",
    fontSize: width * 0.03,
    fontWeight: "bold",
  },
});
