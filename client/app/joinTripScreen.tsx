import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, ImageBackground,ScrollView,TextInput } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

const data = [
    { id: 1, name: 'Goa', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Manali', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Shimla', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Rishikesh', image: 'https://via.placeholder.com/150' },
];

const SwiperScreen = () => {
    const [iconsSwapped, setIconsSwapped] = useState(false);
    let swiperRef = null;

    const swipeLeft = () => {
        swiperRef.swipeLeft();
        setIconsSwapped(!iconsSwapped);
    };

    const swipeRight = () => {
        swiperRef.swipeRight();
        setIconsSwapped(!iconsSwapped);
    };

    const renderCard = (card) => {
        return (
            <View style={styles.card}>
                <Image source={{ uri: card.image }} style={styles.cardImage} />
                <View style={styles.cardFooter}>
                    <TouchableOpacity style={styles.iconButton} onPress={swipeLeft}>
                        <Icon name="times" size={30} color="#ff6347" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bookButton}>
                        <Text style={styles.bookButtonText}>Book IT NOW</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton} onPress={swipeRight}>
                        <Icon name="heart" size={30} color="#ff6347" />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
        <ImageBackground
            source={require('../assets/images/background.png')}
            style={styles.background}
            blurRadius={5}
        >
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
          </View>
          <View style={styles.container}>
              <Swiper
                  ref={(swiper) => { swiperRef = swiper }}
                  cards={data}
                  renderCard={renderCard}
                  stackSize={2}
                  verticalSwipe={false}
                  backgroundColor={'transparent'}
                  cardIndex={0}
                  infinite
              />
              <View style={styles.footer}>
                  <Icon name="home" size={30} color="#ff6347" />
                  <Icon name="search" size={30} color="#ff6347" />
                  <Icon name="compass" size={30} color="#ff6347" />
                  <Icon name="user" size={30} color="#ff6347" />
              </View>
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
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    categoriesScroll: {
      marginTop: 20, 
      paddingHorizontal: 20,
    },
    profileImage: {
      width: 40, 
      height: 40, 
      borderRadius: 20, 
      marginLeft: 10,
    },
    searchInput: {
      flex: 1, 
      padding: 10, 
      backgroundColor: '#f0f0f0', 
      borderRadius: 10,
    },
    categoryImage: {
      width: 60, 
      height: 60, 
      borderRadius: 30,
    },
    categoryItem: {
      alignItems: 'center', 
      marginRight: 20,
    },
    card: {
        flex: 0.7,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#e8e8e8',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginHorizontal: 10,
    },
    cardImage: {
        width: width - 40,
        height: 300,
        borderRadius: 10,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        padding: 20,
        marginTop: 10,
    },
    iconButton: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 50,
    },
    bookButton: {
        backgroundColor: '#ff6347',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
    },
    bookButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingVertical: 10,
        backgroundColor: 'rgba(240, 240, 240, 0.8)',
        position: 'absolute',
        bottom: 0,
    },
});

export default SwiperScreen;
