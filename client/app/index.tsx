import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';

const LandingPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.heroSection}>
        <Image
          source={{ uri: 'https://your-image-url.com/hero-image.jpg' }}
          style={styles.heroImage}
        />
        <Text style={styles.heroTitle}>Explore the World with Wander Mate</Text>
        <Text style={styles.heroSubtitle}>Your Journey Starts Here</Text>
        <Button mode="contained" style={styles.ctaButton} onPress={() => console.log('Explore Now')}>
          Book Now
        </Button>
      </View>

      <View style={styles.featuresSection}>
        <Text style={styles.sectionTitle}>Why Choose Us?</Text>
        <View style={styles.feature}>
          <Text style={styles.featureTitle}>Curated Experiences</Text>
          <Text style={styles.featureDescription}>
            Handpicked destinations and activities to make your trip unforgettable.
          </Text>
        </View>
        <View style={styles.feature}>
          <Text style={styles.featureTitle}>Seamless Booking</Text>
          <Text style={styles.featureDescription}>
            Easy and secure booking process with instant confirmations.
          </Text>
        </View>
        <View style={styles.feature}>
          <Text style={styles.featureTitle}>24/7 Support</Text>
          <Text style={styles.featureDescription}>
            Our team is here to help you anytime, anywhere.
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Wander Mate. All rights reserved.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF', // White background
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroSection: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FF8C00',  // Light Orange background
    width: '100%',
  },
  heroImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000', // Black text
    marginTop: 20,
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#000000', // Black text
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
  },
  ctaButton: {
    backgroundColor: '#000000', // Black button
    color: '#FFFFFF', // White text on the button
    marginTop: 20,
  },
  featuresSection: {
    padding: 20,
    width: '100%',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF8C00', // Light Orange text
    marginBottom: 20,
    textAlign: 'center',
  },
  feature: {
    marginBottom: 20,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000', // Black text
    marginBottom: 5,
  },
  featureDescription: {
    fontSize: 16,
    color: '#555555', // Grey text for subtlety
  },
  footer: {
    padding: 20,
    backgroundColor: '#000000', // Black background
    width: '100%',
    alignItems: 'center',
  },
  footerText: {
    color: '#FF8C00', // Light Orange text
    fontSize: 14,
  },
});

export default LandingPage;
