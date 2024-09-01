import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LocationScreen: React.FC = () => {
  const handleBackPress = () => {
    // Handle the back button press here, e.g., navigate back
    Alert.alert('Back button pressed!');
  };

  return (
    <ImageBackground
        source={require('../assets/images/background.png')}
        style={styles.background}
        blurRadius={6}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Header with back button and profile icon */}
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
            <Icon name="chevron-left" size={30} color="#ff6347" />
          </TouchableOpacity>
          <Icon name="user" size={30} color="#ff6347" />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
           {/* Image slider */}
            <Image
              source={{ uri: 'https://via.placeholder.com/300x200' }} // Dummy image for the slider
              style={styles.sliderImage}
            />
            <Image
              source={{ uri: 'https://via.placeholder.com/300x200' }} // Dummy image for the slider
              style={styles.sliderImage}
            />
            <Image
              source={{ uri: 'https://via.placeholder.com/300x200' }} // Dummy image for the slider
              style={styles.sliderImage}
            />
        </ScrollView>
        {/* Best places to visit */}
        <Text style={styles.sectionTitle}>Best places to visit</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
          <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
          <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
          <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
          <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
          <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
          <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
          <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
        </ScrollView>

        {/* Food you should try here */}
        <Text style={styles.sectionTitle}>Food you should try here</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
          <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
          <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
          <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
          <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
          <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
          <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
          <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
        </ScrollView>

        {/* Famous market */}
        <Text style={styles.sectionTitle}>Famous market</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
          <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
          <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
          <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
          <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
          <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
          <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
          <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
          <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
        </ScrollView>
      </ScrollView>
    </ImageBackground>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent', // Keep it transparent to show the background image
  },
  scrollViewContent: {
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 20, // Add some padding at the bottom if needed
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButton: {
    padding: 10, // Add padding to make it easier to tap
  },
  imageSlider: {
    alignItems: 'center',
    marginBottom: 20,
  },
  sliderImage: {
    width: 400,
    height: 200,
    borderRadius: 10,
    marginRight: 10
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  horizontalScrollView: {
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginRight: 10, // Spacing between images
  },
});
