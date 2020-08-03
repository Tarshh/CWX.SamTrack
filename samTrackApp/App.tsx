import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef, RefObject } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import Logo from './assets/samtrans.png';

export default function App() {

  const [name, setName] = useState<string | null>();

  const userNameRef = useRef<any>();

  function sendName() {

  }

  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
      <Image source={Logo} />
      <Text style={styles.title}>Gelieve je naam hieronder in te geven </Text>
      <TextInput ref={userNameRef} style={styles.input} onChangeText={(value) => setName(value)} />
      <TouchableOpacity style={styles.continueButton}
        onPress={sendName} >
        <Text>Ga verder</Text>
      </TouchableOpacity>

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 20,
    color: 'white'
  },
  input: {
    backgroundColor: '#424b54',
    width: 300,
    padding: 10,
    textAlign: 'center',
    color: 'white'
  },
  continueButton: {
    backgroundColor: "#F9C23B",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
});
