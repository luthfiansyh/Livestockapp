import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailKomoditas from './DetailKomoditas';
import DetailHewan from './DetailHewan';
import TambahPendataan from './TambahPendataan';
import DetailPengukuran from './DetailPengukuran';
import DetailHewanNav from './DetailHewanNav';


const Stack = createNativeStackNavigator();

function NavKomoditas(){
  return (
    <Stack.Navigator  
      screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="DetailKomoditas" component={DetailKomoditas}/>
            <Stack.Screen name="TambahPendataan" component={TambahPendataan}/>
            <Stack.Screen name="DetailHewan" component={DetailHewan}/>
        </Stack.Navigator>
  );
}



export default NavKomoditas;