import React from 'react';
import {
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Router from './router';

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
