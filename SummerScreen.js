import React from 'react';
import { View, Text,ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const imageWidth = width * 0.8;

const SummerScreen = () => {
  const navigation = useNavigation();
 

  // Winter places data
  const SummerPlaces = [
    {
      id: 6,
      title: 'jocobabad',
      image: require('../assets/jocobabad.jpg'),
      details: 'Jacobabad city in Sindh was also on the list. With 46.4 degrees, Jacobabad made it to the world’s hottest places category. And in Pakistan, it was at the 4th number. Of course, it may not be the case anymore now that evening approaches. But this was the case during noon.',
    },
    {
      id: 7,
      title: 'Sibi',
      image: require('../assets/sibi.jpg'),
      details: 
      'Sibi, Balochistan was not on the list of the world’s hottest places but that doesn’t mean it didn’t have an extremely high temperature. In fact, in Pakistan, it is probably the 5th hottest place. The temperature that the town experienced today was 45-degree celsius.',
    },
    {
      id: 8,
      title: 'Dalbandin',
      image: require('../assets/Dalbandin.jpg'),
      details:
      'Dalbandin is a town located in the Chagai District of Balochistan province in southwestern Pakistan. It is situated in the western part of the province, close to the border with Iran. Dalbandin serves as a gateway to several tourist attractions in the surrounding areas. One of the notable attractions is the Mud Volcanoes of Hingol National Park, located approximately 150 kilometers away.',
    },
   
    // Add more winter places data here
  ];

  const handlePlacePress = (place) => {
    navigation.navigate('ImageDetails', { place });
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.heading}>Summer Places</Text>

      {SummerPlaces.map((place) => (
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

export default SummerScreen;
