import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Text, TextInput, Button, Card } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Header from '@/components/Header';
import { router } from 'expo-router';
import axios from 'axios';

const RegisterScreen = ({ navigation }: any) => {
  // Define the validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Please enter a valid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters long').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match') // Ensure this is correct
      .required('Please confirm your password'),
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async (data:any) => {
    try {
        const response = await axios.post(`http://localhost:7171/api/create-user`, data);
alert('here')
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
        source={require('./../assets/images/background.webp')}
        style={styles.background}
      >
        <View style={styles.overlay}>
          <Card style={styles.card}>
            <Card.Content style={{ borderRadius: 30 }}>
              <Text style={styles.title}>Create an Account</Text>

              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  password: '',
                  confirmPassword: '',
                  phone_no:'',
                }}
                validationSchema={validationSchema}
                onSubmit={(values:any) => {
                  handleRegister(values)
                }}
              >
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  errors,
                  touched,
                }) => (
                  <>
                    <TextInput
                      label="Name"
                      mode="outlined"
                      style={styles.input}
                      onChangeText={handleChange('name')}
                      onBlur={handleBlur('name')}
                      value={values.name}
                      error={touched.name && !!errors.name}
                      theme={{ colors: { primary: '#FF8C00' } }} // Orange theme
                    />
                    {touched.name && errors.name && (
                      <Text style={styles.errorText}>{errors.name as string}</Text>
                    )}

                    <TextInput
                      label="Email"
                      mode="outlined"
                      style={styles.input}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      keyboardType="email-address"
                      error={touched.email && !!errors.email}
                      theme={{ colors: { primary: '#FF8C00' } }} // Orange theme
                    />
                    {touched.email && errors.email && (
                      <Text style={styles.errorText}>{errors.email as string}</Text>
                    )}
                    <TextInput
                      label="Phone Number"
                      mode="outlined"
                      style={styles.input}
                      onChangeText={handleChange('phone_no')}
                      onBlur={handleBlur('phone_no')}
                      value={values.phone_no}
                      // keyboardType="phone-number"
                      error={touched.phone_no && !!errors.phone_no}
                      theme={{ colors: { primary: '#FF8C00' } }} // Orange theme
                    />
                    {touched.phone_no && errors.phone_no && (
                      <Text style={styles.errorText}>{errors.phone_no as string}</Text>
                    )}

                    <TextInput
                      label="Password"
                      mode="outlined"
                      style={styles.input}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      secureTextEntry
                      error={touched.password && !!errors.password}
                      theme={{ colors: { primary: '#FF8C00' } }} // Orange theme
                    />
                    {touched.password && errors.password && (
                      <Text style={styles.errorText}>{errors.password as string}</Text>
                    )}

                    <TextInput
                      label="Confirm Password"
                      mode="outlined"
                      style={styles.input}
                      onChangeText={handleChange('confirmPassword')}
                      onBlur={handleBlur('confirmPassword')}
                      value={values.confirmPassword}
                      secureTextEntry
                      error={touched.confirmPassword && !!errors.confirmPassword}
                      theme={{ colors: { primary: '#FF8C00' } }} // Orange theme
                    />
                    {touched.confirmPassword && errors.confirmPassword && (
                      <Text style={styles.errorText}>{errors.confirmPassword as string}</Text>
                    )}

                    <Button
                      mode="contained"
                      style={styles.button}
                      onPress={() => handleSubmit()} 
                    >
                      Sign Up
                    </Button>

                    <Button mode="text" onPress={() => router.push('./login')}>
                      Already have an account? Login
                    </Button>
                  </>
                )}
              </Formik>
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
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  card: {
    width: '90%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 30,
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
    fontSize: 12,
    marginBottom: 10,
    marginTop:-15,
  },
});

export default RegisterScreen;
