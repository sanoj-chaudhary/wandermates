import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const LandingPage = () => {
  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={styles.background}
      blurRadius={20}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{ flex: 1 }}>
          {/* Header Section */}
          <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24 }}>Hello</Text>
            <Text style={{ fontSize: 18, color: 'gray' }}>Good Morning</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
              <TextInput 
                placeholder="Search Location" 
                style={styles.searchInput}
              />
              <Image 
                source={{ uri: 'https://via.placeholder.com/150' }} 
                style={styles.profileImage}
              />
            </View>
          </View>

          {/* Categories Section */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
            {['Goa', 'Manali', 'Shimla', 'Rishikesh', 'Leh', 'Jaipur', 'Kashi'].map((place, index) => (
              <View key={index} style={styles.categoryItem}>
                <Image 
                  source={{ uri: `https://via.placeholder.com/150` }} 
                  style={styles.categoryImage}
                />
                <Text>{place}</Text>
              </View>
            ))}
          </ScrollView>

          {/* Buttons Section */}
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.createButton}>
              <Text style={styles.buttonText}>New Create</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.joinButton}>
              <Text style={styles.joinButtonText}>Join Now</Text>
            </TouchableOpacity>
          </View>

          {/* Cards Section */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Array.from({ length: 6 }).map((_, index) => (
              <View key={index} style={styles.cardContainer}>
                <Image 
                  source={{ uri: 'https://via.placeholder.com/300x200' }} 
                  style={styles.cardImage}
                />
                <Text style={styles.cardTitle}>Rishikesh View</Text>
                <Text>India</Text>
                <View style={styles.cardFooter}>
                  <Text>⭐ 4.8</Text>
                  <Icon name="heart-outline" size={20} color="red" />
                </View>
              </View>
            ))}
          </ScrollView>

          {/* Banner Section */}
          {Array.from({ length: 2 }).map((_, index) => (
            <View key={index} style={styles.bannerContainer}>
              <Image 
                source={{ uri: 'https://via.placeholder.com/600x300' }} 
                style={styles.bannerImage} 
              />
            </View>
          ))}
        </View>

        {/* <View style={styles.footer}>
          <Text style={styles.footerText}>© 2024 Wander Mate. All rights reserved.</Text>
        </View> */}
      </ScrollView>
      {/* Footer Section */}
      <View style={styles.footerIconsContainer}>
        <Icon name="home-outline" size={30} color="#FF7F50" />
        <Icon name="compass-outline" size={30} color="#A0A0A0" />
        <Icon name="notifications-outline" size={30} color="#A0A0A0" />
        <Icon name="person-outline" size={30} color="#A0A0A0" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flexGrow: 1,
    backgroundColor: 'transparent', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    flex: 1, 
    padding: 10, 
    backgroundColor: '#f0f0f0', 
    borderRadius: 10,
  },
  profileImage: {
    width: 40, 
    height: 40, 
    borderRadius: 20, 
    marginLeft: 10,
  },
  categoriesScroll: {
    marginTop: 20, 
    paddingHorizontal: 20,
  },
  categoryItem: {
    alignItems: 'center', 
    marginRight: 20,
  },
  categoryImage: {
    width: 60, 
    height: 60, 
    borderRadius: 30,
  },
  buttonsContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    padding: 20,
    margin: 10,
  },
  createButton: {
    flex: 1, 
    marginRight: 10, 
    backgroundColor: '#FF7F50', 
    padding: 15, 
    borderRadius: 10,
  },
  joinButton: {
    flex: 1, 
    backgroundColor: '#E0E0E0', 
    padding: 15, 
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center', 
    color: '#fff',
  },
  joinButtonText: {
    textAlign: 'center', 
    color: '#333',
  },
  cardContainer: {
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    width: 150,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
  cardTitle: {
    marginTop: 10, 
    fontWeight: 'bold',
  },
  cardFooter: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 10,
  },
  bannerContainer: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  bannerImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  footerIconsContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    paddingVertical: 20, 
    borderTopWidth: 1, 
    borderColor: '#E0E0E0',
    backgroundColor: '#ffffff',
    borderRadius: 50,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  footer: {
    padding: 20,
    backgroundColor: '#000000', 
    width: '100%',
    alignItems: 'center',
  },
  footerText: {
    color: '#FF8C00', 
    fontSize: 14,
  },
});

export default LandingPage;
