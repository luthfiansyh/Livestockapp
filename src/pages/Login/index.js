import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HalamanLogin from "./HalamanLogin";
import HalamanDaftar from "./HalamanDaftar";

const Stack = createNativeStackNavigator();

const NavLogin = () => {
    return (
        <Stack.Navigator  
        screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="HalamanLogin" component={HalamanLogin}/>
            <Stack.Screen name="HalamanDaftar" component={HalamanDaftar}/>
        </Stack.Navigator>
    )
}

export default NavLogin;