import React from 'react';
import { View, Image, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { Text, TextInput, Button, Card } from 'react-native-paper';

const HomeScreen = () => {
  // Array of card data
  const cardData = [
    { id: 1, imageUri: 'https://via.placeholder.com/600x300', location: 'India, Goa' },
    { id: 2, imageUri: 'https://via.placeholder.com/600x300', location: 'India, Goa' },
    { id: 3, imageUri: 'https://via.placeholder.com/600x300', location: 'India, Goa' },
    { id: 4, imageUri: 'https://via.placeholder.com/600x300', location: 'India, Goa' },
    { id: 4, imageUri: 'https://via.placeholder.com/600x300', location: 'India, Goa' },
    { id: 4, imageUri: 'https://via.placeholder.com/600x300', location: 'India, Goa' },
    { id: 4, imageUri: 'https://via.placeholder.com/600x300', location: 'India, Goa' },
    { id: 4, imageUri: 'https://via.placeholder.com/600x300', location: 'India, Goa' },
    { id: 4, imageUri: 'https://via.placeholder.com/600x300', location: 'India, Goa' },
    { id: 4, imageUri: 'https://via.placeholder.com/600x300', location: 'India, Goa' },
    { id: 4, imageUri: 'https://via.placeholder.com/600x300', location: 'India, Goa' },
  ];

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/background.png')}
        style={styles.background}
        blurRadius={20}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Hello</Text>
          <Text style={styles.subGreeting}>Good Morning</Text>
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }}
            style={styles.profileImage}
          />
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            mode="outlined"
            placeholder="Search Location"
            style={styles.searchInput}
            left={<TextInput.Icon icon="magnify" name="magnify" />}
            theme={{ colors: { primary: '#ccc' } }}
          />
        </View>

        {/* Tab Buttons */}
        <View style={styles.tabContainer}>
          <Button
            mode="contained"
            style={styles.activeTab}
            labelStyle={styles.tabText}
          >
            My Request
          </Button>
          <Button
            mode="text"
            style={styles.inactiveTab}
            labelStyle={styles.tabText}
          >
            My Plan
          </Button>
        </View>

        {/* Image Cards */}
        <ScrollView contentContainerStyle={styles.cardsContainer}>
          {cardData.map((card) => (
            <Card key={card.id} style={styles.card}>
              <Image
                source={{ uri: card.imageUri }}
                style={styles.cardImage}
              />
              <Text style={styles.cardText}>{card.location}</Text>
            </Card>
          ))}
        </ScrollView>

        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
          <Button icon="home" />
          <Button mode="contained" icon="map-marker" style={styles.navButton} />
          <Button icon="compass-outline" />
          <Button icon="account" />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    paddingHorizontal: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subGreeting: {
    fontSize: 14,
    color: 'gray',
    marginLeft: 5,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 'auto',
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  searchInput: {
    backgroundColor: 'white',
    borderRadius: 25,
    height: 50,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  activeTab: {
    borderRadius: 25,
    backgroundColor: '#FF8C00',
    marginHorizontal: 5,
    flex: 1,
  },
  inactiveTab: {
    borderRadius: 25,
    backgroundColor: 'white',
    marginHorizontal: 5,
    flex: 1,
  },
  tabText: {
    fontSize: 14,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  card: {
    width: '47%',
    marginVertical: 10,
    borderRadius: 15,
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 15,
  },
  cardText: {
    textAlign: 'center',
    marginVertical: 5,
    fontSize: 14,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navButton: {
    backgroundColor: '#FF8C00',
  },
});

export default HomeScreen;
