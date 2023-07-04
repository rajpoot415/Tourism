import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

const ImagesScreen = ({ navigation }) => {
  const handleSummerPress = () => {
    navigation.navigate('Winter');
  };

  const handleWinterPress = () => {
    navigation.navigate('Summer');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSummerPress} style={styles.imageContainer}>
        <Image source={require('../assets/muree.jpg')} style={styles.image} />
        <Text style={styles.imageText}>Winter</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleWinterPress} style={styles.imageContainer}>
        <Image source={require('../assets/hotplace.png')} style={styles.image} />
        <Text style={styles.imageText}>Summer</Text>
      </TouchableOpacity>
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
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#000',
  },
  imageText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ImagesScreen;
