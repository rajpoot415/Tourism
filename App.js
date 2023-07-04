import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DiscoverScreen from "./screens/DiscoverScreen";
import GetStart from "./screens/GetStart";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ItemScreen from "./screens/ItemScreen";

import WinterScreen from "./screens/WinterScreen";
import SummerScreen from "./screens/SummerScreen";
import ImageScreen from "./screens/ImagesScreen";
import ImageDetailsScreen from "./screens/ImageDetailsScreen";
import BookScreen from "./screens/BookScreen";
// import Test from "./screens/test";



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator   screenOptions={{
          headerShown: false // Hide the header for all screens
        }}>
          {/* <Stack.Screen name="test" component={Test} /> */}
          
          <Stack.Screen name="Get" component={GetStart} />
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="Register" component={RegisterScreen}/>
           <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Discover" component={DiscoverScreen}/>
          <Stack.Screen  name="ItemScreen"   component={ ItemScreen}/>
          <Stack.Screen name="Images" component={ImageScreen} />
          <Stack.Screen name="Winter" component={WinterScreen} />
          <Stack.Screen name="Summer" component={SummerScreen} />
          <Stack.Screen name="ImageDetails" component={ImageDetailsScreen}/>
          <Stack.Screen name="Book" component={BookScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
