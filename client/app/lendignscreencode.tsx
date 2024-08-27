import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-paper';

const LandingPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        {/* Header Section */}
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 24 }}>Hello</Text>
          <Text style={{ fontSize: 18, color: 'gray' }}>Good Morning</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
            <TextInput 
              placeholder="Search Location" 
              style={{
                flex: 1, 
                padding: 10, 
                backgroundColor: '#f0f0f0', 
                borderRadius: 10 
              }}
            />
            <Image 
              source={{ uri: 'https://via.placeholder.com/150' }} 
              style={{ width: 40, height: 40, borderRadius: 20, marginLeft: 10 }}
            />
          </View>
        </View>

        {/* Categories Section */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 20, paddingHorizontal: 20 }}>
          {/* Each Circle */}
          {['Goa', 'Manali', 'Shimla', 'Rishikesh', 'Leh', 'Jaipur', 'Kashi'].map((place, index) => (
            <View key={index} style={{ alignItems: 'center', marginRight: 20 }}>
              <Image 
                source={{ uri: `https://via.placeholder.com/150` }} 
                style={{ width: 60, height: 60, borderRadius: 30 }}
              />
              <Text>{place}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Buttons Section */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
          <TouchableOpacity style={{ flex: 1, marginRight: 10, backgroundColor: '#FF7F50', padding: 15, borderRadius: 10 }}>
            <Text style={{ textAlign: 'center', color: '#fff' }}>New Create</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, backgroundColor: '#E0E0E0', padding: 15, borderRadius: 10 }}>
            <Text style={{ textAlign: 'center', color: '#333' }}>Join Now</Text>
          </TouchableOpacity>
        </View>

        {/* Cards Section */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginLeft: 20 }}>
          {/* Each Card */}
          {Array.from({ length: 3 }).map((_, index) => (
            <View key={index} style={{ backgroundColor: '#fff', borderRadius: 10, padding: 10, marginRight: 20, width: 200 }}>
              <Image 
                source={{ uri: 'https://via.placeholder.com/300x200' }} 
                style={{ width: '100%', height: 120, borderRadius: 10 }}
              />
              <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Rishikesh View</Text>
              <Text>India</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                <Text>⭐ 4.8</Text>
                <Icon name="heart-outline" size={20} color="red" />
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Banner Section */}
        <View style={styles.bannerContainer}>
          <Image 
            source={{ uri: 'https://via.placeholder.com/600x300' }} 
            style={styles.bannerImage} 
          />
          <View style={styles.bannerTextContainer}>
          </View>
        </View>
        <View style={styles.bannerContainer}>
          <Image 
            source={{ uri: 'https://via.placeholder.com/600x300' }} 
            style={styles.bannerImage} 
          />
          <View style={styles.bannerTextContainer}>
          </View>
        </View>

        {/* Footer Section */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 20, borderTopWidth: 1, borderColor: '#E0E0E0' }}>
          <Icon name="home-outline" size={30} color="#FF7F50" />
          <Icon name="compass-outline" size={30} color="#A0A0A0" />
          <Icon name="notifications-outline" size={30} color="#A0A0A0" />
          <Icon name="person-outline" size={30} color="#A0A0A0" />
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
  bannerContainer: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  bannerImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  bannerTextContainer: {
    position: 'absolute',
    top: 30,
    left: 30,
  },
  bannerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  bannerSubtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    marginVertical: 10,
  },
  bannerButton: {
    backgroundColor: '#FF7F50',
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
