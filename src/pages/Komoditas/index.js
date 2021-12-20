import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailKomoditas from './DetailKomoditas';
import DetailHewan from './DetailHewan';
import TambahPendataan from './TambahPendataan';
import DetailPengukuran from './DetailPengukuran';
import DetailHewanNav from './DetailHewanNav';
import PengukuranHewan from './PengukuranHewan';
import HalamanKomoditas from './HalamanKomoditas';


const Stack = createNativeStackNavigator();

function NavKomoditas(){
  return (
    <Stack.Navigator  
      screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="HalamanKomoditas" component={HalamanKomoditas}/>
            {/* <Stack.Screen name="DetailKomoditas" component={DetailKomoditas}/> */}
            <Stack.Screen name="DetailHewan" component={DetailHewan}/>
            <Stack.Screen name="Pengukuran Hewan" component={DetailPengukuran}/>
            <Stack.Screen name="TambahPendataan" component={TambahPendataan}/>
        </Stack.Navigator>
  );
}



export default NavKomoditas;