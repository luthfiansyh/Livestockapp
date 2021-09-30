import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HalamanKalender from './HalamanKalender';
export {HalamanKalender};

const Kalender = () => {
    return(
        <Stack.Navigator  
            screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="HalamanKalender" component={HalamanKalender}/>
            </Stack.Navigator>
    )
}

export default Kalender;