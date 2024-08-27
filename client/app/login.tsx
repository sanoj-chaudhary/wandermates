import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Text, TextInput, Button, Card } from 'react-native-paper';
import Header from '@/components/Header';
import axios from 'axios'
const LoginScreen = ({ navigation }:any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const handleLogin = async () => {
      try {
          const response = await axios.post(`http://localhost:7171/api/login`, {
              email,
              password,
          });

          if (response.data.success === true) {
            navigation.navigate('HomeScreen');
        } else {
            setErrorMessage(response.data.error);
        }
      } catch (error:any) {
        // Check if the error has a response from the backend
        if (error.response && error.response.data) {
            setErrorMessage(error.response.data.error || 'An error occurred');
        } else {
            setErrorMessage('An unexpected error occurred');
        }

        console.log('Error:', error.message);
    }
  };
  return (
    <>
    <Header />
    <ImageBackground
        source={require('./../assets/images/background.webp')} // Replace with your image URL or local path
      style={styles.background}
    >
        
      <View style={styles.overlay}>

        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.title}>Welcome Back</Text>

            <TextInput
              label="Email"
              mode="outlined"
              style={styles.input}
              onChangeText={text => setEmail(text)}
              keyboardType="email-address"
              theme={{ colors: { primary: '#FF8C00' } }} // Orange theme
            />

            <TextInput
              label="Password"
              mode="outlined"
              style={styles.input}
              onChangeText={text => setPassword(text)}
              secureTextEntry
              theme={{ colors: { primary: '#FF8C00' } }} // Orange theme
            />
            {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
            <Button mode="contained" style={styles.button} onPress={handleLogin}>
              Login
            </Button>

            <Button mode="text" onPress={() => router.push('./register')}>
              Don't have an account? Sign Up
            </Button>
          </Card.Content>
        </Card>
      </View>
    </ImageBackground>
    </>
    
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    // backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent overlay
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  card: {
    width: '90%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#FF8C00', // Orange
  },
  input: {
    marginBottom: 20,
  },
  button: {
    marginVertical: 20,
    backgroundColor: '#FF8C00', // Orange
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 10,
},
});

export default LoginScreen;
