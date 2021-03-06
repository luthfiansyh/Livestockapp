import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TambahPengingat from './TambahPengingat';


const Stack = createNativeStackNavigator();

function NavKalender(){
  return (
    <Stack.Navigator  
      screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="TambahPengingat" component={TambahPengingat}/>
        </Stack.Navigator>
  );
}               

export default NavKalender;