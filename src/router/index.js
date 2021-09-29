import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HalamanBeranda from "../pages/Beranda/HalamanBeranda";

import { HalamanKalender } from "../pages/Kalender";
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
            <Stack.Screen name="Firstsplash" component={FirstSplash}/>
            <Stack.Screen name="HalamanBeranda" component={HalamanBeranda}/>
            <Stack.Screen name="Secondsplash" component={SecondSplash}/>
            <Stack.Screen name="Thirdsplash" component={ThirdSplash}/>
            <Stack.Screen name="Fourthsplash" component={FourthSplash}/>
        </Stack.Navigator>
    )
}

export default Router;