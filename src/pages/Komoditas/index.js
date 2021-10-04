import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TambahKomoditas from './TambahKomoditas';


const Stack = createNativeStackNavigator();

function NavKomoditas(){
  return (
    <Stack.Navigator  
      screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="TambahKomoditas" component={TambahKomoditas}/>
        </Stack.Navigator>
  );
}               

export default NavKomoditas;