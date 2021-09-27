import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HalamanBeranda from "../pages/Beranda/HalamanBeranda";

import { HalamanKalender } from "../pages/Kalender";

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator  
        screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Beranda" component={HalamanBeranda}/>
            <Stack.Screen name="Kalender" component={HalamanKalender}/>
        </Stack.Navigator>
    )
}

export default Router;