import React from 'react';
import { View, Text,ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const imageWidth = width * 0.8;

const WinterPlacesScreen = () => {
  const navigation = useNavigation();
 

  // Winter places data
  const winterPlaces = [
    {
      id: 1,
      title: 'Sakdu',
      image: require('../assets/skardu.jpg'),
      details: 'Skardu is one of the Cold Places in Pakistan on our list. It is a city in the Gilgit Baltistan province of Pakistan. It is also the administrative center of the Skardu District. Because of its accessibility to the Karakoram mountain range, the city also acts as an important region.The climate in the city is chilly and semi-arid. Because of the mountain range, the climate is pleasant during the summer. The heat from the lower areas does not reach the city due to the steep mountains. They also hinder the monsoon, resulting in minimal rainfall in the region.',
    },
    {
      id: 2,
      title: 'Gilgit Baltistan',
      image: require('../assets/gilgit.jpeg'),
      details: 
      'Gilgit Baltistan is a magical region in Pakistans north region. The Karakoram and the Hindu Kush, are just a few of the famous glaciers and mountain ranges. It is also home to the K2. K2 is the second-highest mountain in the world (8611 meters)The challenging mountainous region is home to Nanga Parbat, one of the world tallest peaks. In the winter, this is one of the nicest spots to visit. Fairy meadow is well-known for camping and trekking in the summer, and visiting these locations in the winter will be a difficult task. Someone willing to take up the challenge should visit.',
    },
    {
      id: 3,
      title: 'Hunza Valley',
      image: require('../assets/hunza.jpg'),
      details:
      'Hunza is one of Pakistans quiet, mysterious and untamed regions. It was originally a regal state. It is open all year and visitors can visit at any time. Hunza tourism nearly vanishes in the winter. In the winter, there will be no evidence of flora in Hunza, and the entire region will be covered in snow.In the winter, the views from Atta-Abad Lake and the high summits Ultar Sar, Hunza Peak, and Passu Peak are stunning.',
    },
    {
      id: 4,
      title: 'kalam Valley',
      image: require('../assets/Kalam.jpg'),
      details: 
      'Kalaam is a scenic valley in Pakistan Khyber Pakhtunkhwa. It is located 99 kilometers (62 miles) north of Mingora in the northern upper portions of the Swat valley, along the banks of the Swat Rivers. Kalaam is one of Pakistan most well-known tourist sites. It has stunning mountains, forests, and unusual lakes.A three-day Winter Snow Festival takes place in the center of Kalams heavily covered snow peaks.',
    },
    // Add more winter places data here
  ];

  const handlePlacePress = (place) => {
    navigation.navigate('ImageDetails', { place });
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.heading}>Winter Places</Text>

      {winterPlaces.map((place) => (
        <TouchableOpacity
          key={place.id}
          style={styles.placeContainer}
          onPress={() => handlePlacePress(place)}
        >
          <Image style={styles.placeImage} source={place.image} />
          <Text style={styles.placeTitle}>{place.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 20,
  },
  placeContainer: {
    marginBottom: 20,
  },
  placeImage: {
    width: 400,
    height: 300,
    marginVertical: 10,
    borderRadius:20,
  },
  placeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WinterPlacesScreen;
