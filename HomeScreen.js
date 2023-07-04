import { Text, Image,SafeAreaView, View, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable';
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { HeroImage } from '../assets';

const HomeScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() =>{
        navigation.setOptions({
            headerShown:false,
        });

    });
  return (
    <SafeAreaView className="bg-white flex-1 justify-center">
        {/* First Section */}
        <View className="flex-row px-6 mt-10 items-center space-x-2">
            <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
        <Text className="text-[#5349a5] text-3xl font-semibold"> Go</Text>
        </View>
        <Text className="text-[#2b523a] text-3xl font-semibold">Travel</Text>
        </View>


        {/* Second Scetion */}
        <View className="px-6 mt-8 space-y-3 ">
            <Text className="text-[#4980a5] text-[35px]">Enjoy the trip with</Text>

            <Text className="text-[#71ccd3] text-[30px] font-bold"> Good Moments</Text>
            <Text className="text-[#141322] text-base"> Feel free to adjust the styles and modify the code further to meet your design requirements.

                             </Text>
        </View>
        {/* Circle Scection */}

        <View className="w-[400px] h-[200px] bg-[#4ca8d3] rounded-full absolute bottom-36 -right-36"></View>

        <View className="w-[400px] h-[300px] bg-[#b17b49] rounded-full absolute -bottom-28 -left-36"></View>

        {/* Image container */}

        <View className="flex-1 relative items-center justify-center"> 

            < Animatable.Image
            animation="fadeIn"
            easing={'ease-in-out'} 

            source={HeroImage}
                
            className="w-full h-full object-cover mt-20"

            />


            <TouchableOpacity 
            onPress={() => navigation.navigate("Discover")
            }
            className="absolute bottom-20 w-24 h-24     border-l-2 border-r-2 border-t-4 border-[#307e9c] rounded-full items-center justify-center">
                
                <Animatable.View animation={'pulse'}
                easing={"ease-in-out"}
                iterationCount={'infinite'} className="w-20 h-20 items-center justify-center rounded-full bg-[#219dd6]">
                    <Text className="text-gray-50 text-[36px] font-semibold"> Go</Text>
                </Animatable.View>
                
            </TouchableOpacity>
        </View>


      
    </SafeAreaView>
  )
}

export default HomeScreen;