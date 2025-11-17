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

const statuses = [
  {
    id: "1",
    name: "Mohin",
    time: "Just now",
    image: require("../assets/images.jpg"),
    viewed: false,
  },
  {
    id: "2",
    name: "Akshay",
    time: "Today, 8:30 AM",
    image: require("../assets/imagess.jpg"),
    viewed: true,
  },
  {
    id: "3",
    name: "Rahi",
    time: "Yesterday, 10:45 PM",
    image: require("../assets/user3.jpg"),
    viewed: false,
  },
];

export default function StatusScreen() {
  const renderStatus = ({ item }) => (
    <TouchableOpacity style={styles.statusContainer}>
      <View
        style={[
          styles.statusBorder,
          { borderColor: item.viewed ? "#999" : "#25D366" },
        ]}
      >
        <Image source={item.image} style={styles.profileImage} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>

    
      <View style={styles.myStatusContainer}>
        <View style={styles.myStatusImageWrapper}>
          <Image
            source={require("../assets/images.jpg")}
            style={styles.profileImage}
          />
          <View style={styles.addIcon}>
            <Text style={styles.addIconText}>+</Text>
          </View>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.name}>My Status</Text>
          <Text style={styles.time}>Tap to add status update</Text>
        </View>
      </View>

    
      <Text style={styles.sectionTitle}>Recent updates</Text>

  
      <FlatList
        data={statuses}
        keyExtractor={(item) => item.id}
        renderItem={renderStatus}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 10 },

  myStatusContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  myStatusImageWrapper: {
    position: "relative",
    marginRight: 12,
  },
  addIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#25D366",
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
  },
  addIconText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },

  statusBorder: {
    width: width * 0.16,
    height: width * 0.16,
    borderRadius: width * 0.08,
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  profileImage: {
    width: width * 0.14,
    height: width * 0.14,
    borderRadius: width * 0.07,
  },

  textContainer: {
    flex: 1,
  },

  name: {
    fontSize: width * 0.045,
    fontWeight: "600",
  },

  time: {
    fontSize: width * 0.035,
    color: "#777",
  },

  sectionTitle: {
    marginTop: 10,
    marginBottom: 5,
    color: "#555",
    fontWeight: "700",
  },
});
