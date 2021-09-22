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



import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import HalamanBeranda from './pages/HalamanBeranda';
import KalkulatorBerat from './pages/KalkulatorBerat';
import InfoHarga from './pages/InfoHarga';
import HalamanKalender from './pages/HalamanKalender';
import HalamanKomoditas from './pages/HalamanKomoditas';


const App = ()  =>{
  return(
    <View style={{flex:1}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Beranda" component={HalamanBeranda}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>

  )
}

const Stack = createNativeStackNavigator();


export default App;