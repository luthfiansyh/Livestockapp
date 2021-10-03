import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstSplash from "./FirstSplash";
import SecondSplash from "./SecondSplash";
import ThirdSplash from "./ThirdSplash";
import FourthSplash from "./FourthSplash";

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator  
        screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="FirstSplash" component={FirstSplash}/>
            <Stack.Screen name="SecondSplash" component={SecondSplash}/>
            <Stack.Screen name="ThirdSplash" component={ThirdSplash}/>
            <Stack.Screen name="FourthSplash" component={FourthSplash}/>
        </Stack.Navigator>
    )
}

export default Router;