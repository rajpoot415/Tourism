import React from 'react';
import { View, ImageBackground, StyleSheet, TouchableOpacity, Text } from 'react-native';

const GetStartedScreen = ({ navigation }) => {
  const handleGetStarted = () => {
    navigation.navigate('Discover');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/top2.png')} style={styles.backgroundImage}>
        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </ImageBackground>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#333',
    paddingHorizontal: 20,
    paddingVertical: 19,
    marginRight:189,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,

  },
});

export default GetStartedScreen;
