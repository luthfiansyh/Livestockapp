import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HalamanBeranda from './HalamanBeranda';
import HalamanKomoditas from '../Komoditas/HalamanKomoditas';

const Tab = createBottomTabNavigator();

function Root(){
  return (
    <Tab.Navigator>
        <Tab.Screen name="Beranda" component={HalamanBeranda} />
        <Tab.Screen name="Komoditas" component={HalamanKomoditas} />
    </Tab.Navigator>
  );
}               

export default Root;