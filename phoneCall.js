import { Linking } from 'react-native';

// Inside your component
const phoneNumber = '1234567890'; // Replace with the phone number you want to call

const openPhoneCallApp = () => {
  const url = `tel:${phoneNumber}`;

  Linking.canOpenURL(url)
    .then(supported => {
      if (supported) {
        return Linking.openURL(url);
      } else {
        console.log("Phone call app is not available");
      }
    })
    .catch(error => console.log('An error occurred', error));
};

// Render your component
// ...
// Inside your button onPress event, call the openPhoneCallApp function
<Button onPress={openPhoneCallApp} title="Call" />
