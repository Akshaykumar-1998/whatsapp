import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const calls = [
  {
    id: '1',
    name: 'Mohin',
    time: 'Today, 10:20 AM',
    type: 'incoming',
    image: require('../assets/user1.png'),
  },
  {
    id: '2',
    name: 'Akshay',
    time: 'Yesterday, 8:45 PM',
    type: 'missed',
    image: require('../assets/user2.png'),
  },
  {
    id: '3',
    name: 'Rahi',
    time: 'Yesterday, 6:12 PM',
    type: 'outgoing',
    image: require('../assets/user3.jpg'),
  },
];

export default function CallsScreen() {
  const renderCall = ({ item }) => (
    <TouchableOpacity style={styles.callContainer}>
      <Image source={item.image} style={styles.profileImage} />

      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
          <Text
            style={[styles.time, item.type === 'missed' && { color: 'red' }]}
          >
            {item.time}
          </Text>
        </View>
      </View>

      <Ionicons
        name="call-outline"
        size={26}
        color="#25D366"
        style={{ marginLeft: 10 }}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Recent Calls</Text>

      <FlatList
        data={calls}
        keyExtractor={item => item.id}
        renderItem={renderCall}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 10 },

  sectionTitle: {
    marginTop: 10,
    marginBottom: 10,
    color: '#555',
    fontWeight: '700',
    fontSize: width * 0.045,
  },

  callContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },

  profileImage: {
    width: width * 0.14,
    height: width * 0.14,
    borderRadius: width * 0.07,
    marginRight: 12,
  },

  textContainer: { flex: 1 },

  name: {
    fontSize: width * 0.045,
    fontWeight: '600',
  },

  time: {
    fontSize: width * 0.035,
    color: '#777',
  },
});
