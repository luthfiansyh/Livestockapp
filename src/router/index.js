import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HalamanBeranda from "../pages/Beranda/HalamanBeranda";

import Kalender, { HalamanKalender } from "../pages/Kalender";
import FirstSplash from "../pages/Splashscreen/FirstSplash";
import SecondSplash from "../pages/Splashscreen/SecondSplash";
import ThirdSplash from "../pages/Splashscreen/ThirdSplash";
import FourthSplash from "../pages/Splashscreen/FourthSplash";
import HalamanLogin from "../pages/Login/HalamanLogin";

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator  
        screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="SecondSplash" component={SecondSplash}/>
            <Stack.Screen name="ThirdSplash" component={ThirdSplash}/>
            <Stack.Screen name="FourthSplash" component={FourthSplash}/>
            <Stack.Screen name="HalamanBeranda" component={HalamanBeranda}/>
            <Stack.Screen name="HalamanKalender" component={Kalender}/>
        </Stack.Navigator>
    )
}

export default Router;