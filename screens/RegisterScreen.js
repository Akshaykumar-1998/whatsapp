import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const { width, height } = Dimensions.get('window');

export default function RegisterScreen({ navigation }) {
 
  const [number, setNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+91');

  const handleNext = () => {
    if (number.length !== 10) {
      Alert.alert('Invalid Number', 'Please enter a valid 10-digit phone number');
      return;
    }
    navigation.replace('MainTabs');
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
       
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' }}
          style={styles.logo}
        />

      
        <Text style={styles.title}>Enter your phone number</Text>
        <Text style={styles.desc}>
          WhatsApp will send an SMS message to verify your phone number.
        </Text>

     
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.countryCode}>
            <Text style={styles.countryCodeText}>{countryCode}</Text>
            <Icon name="caret-down-outline" size={18} color="#000" />
          </TouchableOpacity>

          <TextInput
            style={styles.input}
            placeholder="Phone number"
            keyboardType="number-pad"
            placeholderTextColor="#777"
            value={number}
            onChangeText={setNumber}
            maxLength={10}
          />
        </View>

       
        <TouchableOpacity
          onPress={handleNext}
          activeOpacity={0.8}
          style={styles.buttonWrapper}
        >
          <LinearGradient
            colors={['#00C853', '#075E54']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.btn}
          >
            <Text style={styles.btnText}>Next</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: width * 0.07,
    paddingTop: height * 0.12,
    alignItems: 'center',
  },

  logo: {
    width: 100,
    height: 100,
    marginBottom: height * 0.03,
    resizeMode: 'contain',
  },

  title: {
    fontSize: width * 0.065,
    fontWeight: 'bold',
    marginBottom: height * 0.015,
    textAlign: 'center',
  },

  desc: {
    fontSize: width * 0.04,
    color: '#555',
    textAlign: 'center',
    marginBottom: height * 0.04,
  },

  inputContainer: {
    flexDirection: 'row',
    width: '90%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: width * 0.02,
    alignItems: 'center',
    paddingHorizontal: width * 0.03,
    marginBottom: height * 0.04,
  },

  countryCode: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: width * 0.03,
  },

  countryCodeText: {
    fontSize: width * 0.045,
    fontWeight: '600',
    marginRight: 5,
  },

  input: {
    flex: 1,
    fontSize: width * 0.045,
    paddingVertical: height * 0.017,
  },

  buttonWrapper: {
    width: '90%',
    marginTop: 'auto',
    marginBottom: height * 0.05,
  },

  btn: {
    paddingVertical: height * 0.02,
    borderRadius: width * 0.02,
    alignItems: 'center',
  },

  btnText: {
    color: '#fff',
    fontSize: width * 0.045,
    fontWeight: '700',
  },
});
