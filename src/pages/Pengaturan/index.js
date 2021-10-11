import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HalamanPengaturan from "./HalamanPengaturan";
import NavLogin from "../Login";
import HalamanKomoditas from "../Komoditas/HalamanKomoditas";
import HalamanProfil from "./HalamanProfil";

const Stack = createNativeStackNavigator();

const NavPengaturan = () => {
    return (
        <Stack.Navigator  
        screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="HalamanPengaturan" component={HalamanPengaturan}/>
            <Stack.Screen name="HalamanProfil" component={HalamanProfil}/>
            <Stack.Screen name="Keluar" component={NavLogin}/>


        </Stack.Navigator>
    )
}

export default NavPengaturan;