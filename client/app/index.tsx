import { router } from 'expo-router';
import React from 'react';
import { View, StyleSheet, ImageBackground, ScrollView, Image,Button as NativeButtion } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';
// import Header from '@/components/Header';
const LandingPage = ({navigation}:any) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    
      <View>
    </View>
      {/* Hero Section */}
      <ImageBackground
        source={require('./../assets/images/background.webp')} // Replace with your image path
        style={styles.hero}
      >
        <Text style={styles.heroTitle}>Plan Your Perfect Trip</Text>
        <Button mode="contained" style={styles.heroButton} onPress={() => router.push('/login')}>
          Get Started
        </Button>
      </ImageBackground>

      {/* Features Section */}
      <View style={styles.features}>
        <Text style={styles.sectionTitle}>Why Choose Us?</Text>
        <Card style={styles.card}>
          <Card.Content>
            <Image source={require('./../assets/images/background.webp')} style={styles.featureImage} />
            <Text style={styles.featureTitle}>Feature 1</Text>
            <Text style={styles.featureDescription}>
              Description of why this feature is beneficial for the user.
            </Text>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Image source={require('./../assets/images/background.webp')} style={styles.featureImage} />
            <Text style={styles.featureTitle}>Feature 2</Text>
            <Text style={styles.featureDescription}>
              Description of why this feature is beneficial for the user.
            </Text>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Image source={require('./../assets/images/background.webp')} style={styles.featureImage} />
            <Text style={styles.featureTitle}>Feature 3</Text>
            <Text style={styles.featureDescription}>
              Description of why this feature is beneficial for the user.
            </Text>
          </Card.Content>
        </Card>
      </View>

      {/* Call to Action Section */}
      <View style={styles.cta}>
        <Text style={styles.ctaTitle}>Ready to Explore?</Text>
        <Button mode="contained" style={styles.ctaButton} onPress={() => console.log('Explore Pressed')}>
          Start Now
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  hero: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF8C00', // Fallback color
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  heroButton: {
    backgroundColor: '#000',
    paddingHorizontal: 30,
  },
  features: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF8C00',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  featureImage: {
    width: '100%',
    height: 150,
    marginBottom: 15,
    borderRadius: 10,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  featureDescription: {
    fontSize: 16,
    color: '#666',
  },
  cta: {
    padding: 20,
    
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  ctaButton: {
    backgroundColor: '#000',
    paddingHorizontal: 30,
  },
});

export default LandingPage;
