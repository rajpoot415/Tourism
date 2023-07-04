import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ImageDetailsScreen = () => {
  const route = useRoute();
  const { place } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{place.title}</Text>

      <Image style={styles.placeImage} source={place.image} />

      <Text style={styles.placeDetails}>{place.details}</Text>
    </View>
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
    marginTop: 10,
    marginBottom: 20,
  },
  placeImage: {
    width: 400,
    height: 300,
    marginVertical: 10,
    borderRadius:20,
  },
  placeDetails: {
    fontSize: 18,
    marginVertical: 20,
    padding:20,
  },
});

export default ImageDetailsScreen;
