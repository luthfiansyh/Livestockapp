import React from 'react';
import {
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Router from './router';
import auth from '@react-native-firebase/auth';
import { AuthContext } from './router/AuthProvider';
import LoginProvider from './utils/LoginProvider';
import AppStack from './utils/AppStack';

const App = ()  =>{

  return(
    <View style={{flex:1}}>
      <LoginProvider>
        <AppStack/>
      </LoginProvider>
    </View>

  )
}

const Stack = createNativeStackNavigator();


export default App;
