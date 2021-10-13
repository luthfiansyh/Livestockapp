import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HalamanBeranda from './HalamanBeranda';
import HalamanKomoditas from '../Komoditas/HalamanKomoditas';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import KalkulatorBobot from './KalkulatorBobot';


const Stack = createNativeStackNavigator();

function NavHome(){
  return (
    <Stack.Navigator  
      screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="BerandaScreen" component={HalamanBeranda}/>
        </Stack.Navigator>
  );
}               

export default NavHome;