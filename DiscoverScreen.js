import { View, ScrollView,Text,Image,ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Attractions, Avatar, Hotels, NotFound, Restaurants } from '../assets';
import MenuContainer from '../components/MenuContainer';
import { FontAwesome } from '@expo/vector-icons';
import ItemCarDontainer from '../components/ItemCarDontainer';
import { getPlacesData } from '../api';
import { Dimensions } from 'react-native';


const DiscoverScreen = () => {
  const windowWidth = Dimensions.get('window').width;

  const navigation =useNavigation();
  const [type,setType]=useState("restaurants")
  const [isLoading,setIsLoading] =useState(false)
  const [mainData, setMainData] = useState([])
  const [bl_lat, setBl_lat] = useState(null)
  const [bl_lng, setBl_lng] = useState(null)
  const [tr_lat, setTr_lat] = useState(null)
  const [tr_lng, setTr_lng] = useState(null)


    useLayoutEffect(() =>{
      navigation.setOptions({
          headerShown:false,
      });

  },[]);

  useEffect(() =>{
    setIsLoading(true);
    getPlacesData(bl_lat,bl_lng,tr_lat,tr_lng,type).then(data => {setMainData(data);
      setInterval(() => {
        setIsLoading(false );
      }, 2000);
    })
  },[ bl_lat,bl_lng,tr_lat,tr_lng,type]);



  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View  className="flex-row items-center justify-between px-8">
        <View >
        <Text className="text-[40px] text-[#0b646b] font-bold">Grand</Text>
        <Text className="text-[#527283] text-[36px]">Travels & Tour</Text>
        </View>
        <View className="w-20 h-12 bg-white rounded-md items-end justify-center ">
        <TouchableOpacity 
        onPress={() => navigation.navigate("Login")
      }className="flex-row items-center justify-center space-x-2 ">
              {/* <Text className="text-[#48b0b9] text-[20px] font-bold "> Login  </Text> */}
                <FontAwesome name="bars" size={24} color="#A0C4C7" />
              
            </TouchableOpacity>
        </View>
      </View>
      <View className="flex-row items-center bg-white m-4 rounded-xl py-1 px-4 shadow-lg">
      <GooglePlacesAutocomplete
      GooglePlacesDetailsQuery={{fields:"geometry"}}
      placeholder='Search'
      fetchDetails={true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(details?.geometry?.viewport);
        setBl_lat(details?.geometry?.viewport?.southwest?.lat)
        setBl_lng(details?.geometry?.viewport?.southwest?.lng)
        setTr_lat(details?.geometry?.viewport?.northeast?.lat)
        setTr_lng(details?.geometry?.viewport?.northeast?.lng)
      }}
      query={{
        key: 'AIzaSyDWpuVw2apN-XgX3gmrzsHrZgr1AG4sCxQ',
        language: 'en',
      }}
    />

      </View>

      {/* Menu Container */}
      {isLoading ?(
         <View className="flex-1 items-center justify-center ">
         <ActivityIndicator size="large" color="#0B646B"  />
         
      
      </View>
      ):(
      <ScrollView >
        <View className="flex-row items-center justify-between  px-8 mt-8">
        <MenuContainer 
        key={"hotels"}
        title='Hotels'
        imageSrc= {Hotels}
        type={type}
        setType={setType}
        />
        <MenuContainer 
        key={"attractions"}
        title='Attractions'
        imageSrc= {Attractions}
        type={type}
        setType={setType}
        />
        {/* <MenuContainer 
        key={"restaurants"}
        title='Restaurants'
        imageSrc= {Restaurants}
        type={type}
        setType={setType}
        /> */}
        </View>


        <View >
          <View className="flex-row items-center justify-between px-4 mt-10 ">
            <Text className="text-[#A0C4C7] text-[20px] font-bold "> Top Tips</Text>
            <TouchableOpacity
               onPress={() => navigation.navigate("Images") }
            className="flex-row items-center justify-center space-x-2 ">
              <Text className="text-[#48b0b9] text-[20px] font-bold "> Histrocial Places  </Text>
                <FontAwesome name="long-arrow-right" size={24} color="#A0C4C7" />
              
            </TouchableOpacity>
          </View>
          <View className="px-4 mt-0 flex-row items-center justify-evenly flex-wrap ">

        {mainData?.length >0 ?  (
        <> 

           
      
         
         {mainData?.map(( data , i) =>(
            <ItemCarDontainer
            key={i}
            imageSrc={
              data?.photo?.images?.medium?.url?
               data?.photo?.images?.medium?.url:"https://cdn.pixbay.com/photo/2015/10/30/12/22/eat-1014025_1280"

            }
            title={data?.name}
            location={data?.location_string}
            data={data}
            />


          ))} 
        
        </> ):(<>
          <View className="w-full h-[600px] items-center space-y-8 justify-center"> 
            <Image  
            source={NotFound} className="w-32 h-32 object-contain"
            />   
              <Text>Oops.... not Data Found</Text>
            </View>
        
        
        </> )}





          {/* <ItemCarDontainer 
         
         key={"101"}
         imageSrc={
          "https://cdn.pixabay.com/photo/2022/12/19/13/50/oak-7665740_1280.jpg"
         }
         title="Something"
         location="fsd"
         />
         <ItemCarDontainer 
         
         key={"102"}
         imageSrc={
          "https://cdn.pixabay.com/photo/2022/12/19/13/50/oak-7665740_1280.jpg"
         }
         title="Something"
         location="fsd"
         />

            </> 
            ): ( 
            <>
            
            <View className="w-full h-[600px] items-center space-y-8 justify-center"> 
            <Image  
            source={NotFound} className="w-32 h-32 object-contain"
            />   
              <Text>Usman is best</Text>
            </View>
            
             </>
             )}

 */}


            




            
            {/* {mainData?.length > 0 ? (
            <>

            </> 
            ): ( 
            <>
            
            <View className="w-full h-[600px] items-center space-y-8 justify-center"> 
            <Image  
            source={NotFound} className="w-32 h-32 object-contain"
            />   
              <Text>Usman is best</Text>
            </View>
            
             </>
             )}

          {mainData?.map(( data , i,) =>(
            <ItemCarDontainer
            key={i}
            imageSrc={
              data?.photo?.images?.medium?.url?
               data?.photo?.images?.url:"https://cdn.pixbay.com/photo/2015/10/30/12/22/eat-1014025_1280"

            }
            title={data?.name}
            location={data?.location_string}
            data={data}
            />


          ))} */}

     
     
     
            

            
          </View>

        </View>


      </ScrollView>
     ) }

      
    </SafeAreaView>
    );
  
};

export default DiscoverScreen;