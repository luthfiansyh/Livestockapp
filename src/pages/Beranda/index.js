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
import KontakKeswan from './KontakKeswan';
import DetailKontakKeswan from './DetailKontakKeswan';
import FilterKontakKeswan from './FilterKontakKeswan';
import KatalogPejantan from './KatalogPejantan';
import DetailKatalogPejantan from './DetailKatalogPejantan';
import FilterKatalogPejantan from './FilterKatalogPejantan';

const Stack = createNativeStackNavigator();

function NavHome(){
  return (
    <Stack.Navigator  
      screenOptions={{
            headerShown: false
        }}>
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
              <Stack.Screen name="KalkulatorBobot" component={KalkulatorBobot} />
              <Stack.Screen name="KontakKeswan" component={KontakKeswan} />
              <Stack.Screen name="DetailKontakKeswan" component={DetailKontakKeswan} />
              <Stack.Screen name="FilterKontakKeswan" component={FilterKontakKeswan}/>
              <Stack.Screen name="KatalogPejantan" component={KatalogPejantan}/>
              <Stack.Screen name="DetailKatalogPejantan" component={DetailKatalogPejantan} />
              <Stack.Screen name="FilterKatalogPejantan" component={FilterKatalogPejantan}/>
        </Stack.Navigator>
  );
}               

export default NavHome;