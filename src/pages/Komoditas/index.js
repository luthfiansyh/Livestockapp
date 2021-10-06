import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TambahKomoditas from './TambahKomoditas';
import HalamanKomoditas from './HalamanKomoditas';
import NavLogin from '../Login';
import DetailKomoditas from './DetailKomoditas';


const Stack = createNativeStackNavigator();

function NavKomoditas(){
  return (
    <Stack.Navigator  
      screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="DetailKomoditas" component={DetailKomoditas}/>
            <Stack.Screen name="TambahKomoditas" component={TambahKomoditas}/>

        </Stack.Navigator>
  );
}               

export default NavKomoditas;