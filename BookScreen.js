import React, { useState } from 'react';
import { View, Text, TextInput,StyleSheet, Button } from 'react-native';
import Toast from 'react-native-toast-message';

const BookNowPage = () => {
  const [name, setName] = useState('');
  const [idCard, setIdCard] = useState('');
  const [dateIn, setDateIn] = useState('');
  const [dateOut, setDateOut] = useState('');

  const handleBookNow = () => {
    // Validate if all fields are filled
    if (!name || !idCard || !dateIn || !dateOut) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please fill in all fields',
        visibilityTime: 3000,
        autoHide: true,
      });
      return;
    }

    // Handle the book now action here
    // You can access the entered values using name, idCard, dateIn, and dateOut variables

    // Show success toast
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: 'Booking successful',
      visibilityTime: 3000,
      autoHide: true,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
      style={styles.input}
        placeholder="Enter name"
        value={name}
        onChangeText={text => setName(text)}
      />

      <Text style={styles.label}>ID Card:</Text>
      <TextInput
      style={styles.input}
        placeholder="Enter ID Card"
        value={idCard}
        onChangeText={text => setIdCard(text)}
      />

      <Text style={styles.label}>Date In:</Text>
      <TextInput
      style={styles.input}
        placeholder="Enter Date In"
        value={dateIn}
        onChangeText={text => setDateIn(text)}
      />

      <Text style={styles.label}>Date Out:</Text>
      <TextInput
      style={styles.input}
        placeholder="Enter Date Out"
        value={dateOut}
        onChangeText={text => setDateOut(text)}
      />

      <Button style={styles.Button}title="Book Now" onPress={handleBookNow} />

      {/* Toast container */}
      <Toast ref={ref => Toast.setRef(ref)} />
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    //alignItems: 'center',
  },
  leble:{
    marginRight:'70%',
    marginBottom:5,
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
      margin:10,
  },
  Button:{
    borderRadius:20,
  },
});

export default BookNowPage;
