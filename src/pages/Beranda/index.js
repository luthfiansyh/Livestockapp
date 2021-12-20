import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HalamanBeranda from './HalamanBeranda';
import HalamanKomoditas from '../Komoditas/HalamanKomoditas';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import KalkulatorBobot from './KalkulatorBobot';
import LoadingScreen from './LoadingScreen';
import HomeScreen from './HomeScreen';
import Home from './Home';


const Stack = createNativeStackNavigator();

function NavHome(){
  return (
    <Stack.Navigator  
      screenOptions={{
            headerShown: false
        }}>
            {/* <Stack.Screen name="BerandaScreen" component={HalamanBeranda}/> */}
            <Stack.Screen name="Kalkulator Hewan" component={KalkulatorBobot}/>
        </Stack.Navigator>
  );
}               

export default NavHome;