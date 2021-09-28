import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HalamanBeranda from "../pages/Beranda/HalamanBeranda";

import { HalamanKalender } from "../pages/Kalender";
import FirstSplash from "../pages/Splashscreen/FirstSplash";
import SecondSplash from "../pages/Splashscreen/SecondSplash";
import ThirdSplash from "../pages/Splashscreen/ThirdSplash";

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator  
        screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Beranda" component={ThirdSplash}/>
            <Stack.Screen name="Kalender" component={HalamanKalender}/>
        </Stack.Navigator>
    )
}

export default Router;