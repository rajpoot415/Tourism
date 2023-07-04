import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ImageBackground, TouchableOpacity, Text, Alert, KeyboardAvoidingView } from 'react-native';
import axios from 'axios';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
        try {
          await axios.post('http://localhost:8000/api/v1/register', {
            name,
            password,
            email,
          });
    // console.log("Working")
          // Optionally, you can automatically log in the user after signup
          navigation.navigate('Login');
          Alert.alert('Success', 'Signup successful. Please log in.');
        } catch (error) {
          console.log("not Working")
          Alert.alert('Error', 'Signup failed. Please try again.');
        }
      };

  return (
    <ImageBackground source={require('../assets/register.png')} style={styles.backgroundImage}>
      <View style={styles.container} behavior="padding">
        <Text style={styles.text}>Name</Text>
        <TextInput style={styles.input} placeholder="name" value={name} onChangeText={text => setName(text)} />
        <Text style={styles.text}>E mail</Text>
        <TextInput style={styles.input} placeholder="email" value={email} onChangeText={text => setEmail(text)} />
        <Text style={styles.text}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

// Styles...



const styles = StyleSheet.create({

  backgroundImage:{

    flex:1,
    resizeMode:'cover',
  },
  container: {
    //flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop:300,
  },
  text:{
    color:"white",
    fontSize:15,
    marginRight:300,
    


  },
  input: {
    width: '100%',
    height: 60,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    padding: 10,
    marginBottom: 7,
    justifyContent:'center',
    alignItems:'center',
    color:'#000',
    backgroundColor:"#f0f2f5",
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#3f51b5',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 1,
    paddingHorizontal: 75,
  },
});

export default RegisterScreen;
