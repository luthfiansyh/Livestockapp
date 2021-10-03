import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Router from './router';
import HalamanBeranda from './pages/Beranda/HalamanBeranda';
import HalamanKalender from './pages/Kalender';
import FirstSplash from './pages/Splashscreen/FirstSplash';
import SecondSplash from './pages/Splashscreen/SecondSplash';
import ThirdSplash from './pages/Splashscreen/ThirdSplash';
import FourthSplash from './pages/Splashscreen/FourthSplash';

const App = ()  =>{
  return(
    <View style={{flex:1}}>
      <NavigationContainer>
        <Router/>
      </NavigationContainer>
    </View>

  )
}

const Stack = createNativeStackNavigator();


export default App;
