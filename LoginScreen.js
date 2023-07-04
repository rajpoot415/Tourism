import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text, ImageBackground, Alert } from 'react-native';
import axios from 'axios'
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
        try {
          const response = await axios.post('http://localhost:8000/api/v1/login', {
            email,
            password
          });
    // console.log(response)
          // Assuming server returns a token upon successful login
          const token = response.data.token;
    
          // Store the token or perform any necessary actions
          // For example, you can store it in AsyncStorage for future use
    
          // Navigate to the Home screen
          navigation.navigate('Discover');
        } catch (error) {
          console.log("not Working")
          Alert.alert('Error', 'Invalid username or password');
        }
      };

  const handleSignup = () => {
    navigation.navigate('Register');
  };

  return (
    <ImageBackground source={require('../assets/login1.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text
        style={{color:'white',marginRight:"80%",fontSize:15,marginBottom:10}}
        >Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
                <Text
        style={{color:'white',marginRight:"80%",fontSize:15,marginBottom:10}}
        >Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignup}>
          <Text style={styles.registerLink}>Don't have an account? Register</Text>
        </TouchableOpacity>
         {/* <Button title="Signup" onPress={handleSignup} /> */}

      </View>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    //justifyContent: 'center',
    //alignItems: 'center',
  },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      marginTop:200,
    },
    input: {
      width: '100%',
      height: 50,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 10,
      padding: 10,
      marginBottom: 10,
      color:'black',
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
    paddingHorizontal: 95,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerLink: {
    color: '#888',
    //textDecorationLine: 'underline',
    marginTop: 10,
    fontSize:18,
  },
});

export default LoginScreen;
