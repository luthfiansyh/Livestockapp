import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HalamanLogin from "../Login/HalamanLogin";
import HalamanPengaturan from "./HalamanPengaturan";

const Stack = createNativeStackNavigator();

const NavPengaturan = () => {
    return (
        <Stack.Navigator  
        screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="HalamanPengaturan" component={HalamanPengaturan}/>
        </Stack.Navigator>
    )
}

export default NavPengaturan;