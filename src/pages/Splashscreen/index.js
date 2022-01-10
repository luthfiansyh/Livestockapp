import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstSplash from "./FirstSplash";
import SecondSplash from "./SecondSplash";
import ThirdSplash from "./ThirdSplash";
import FourthSplash from "./FourthSplash";
import LoginScreen from "../Login/LoginScreen";
import OnboardingScreen from "./OnBoardingScreen";
import HalamanDaftar from "../Login/HalamanDaftar";
import LoadingSplash from "./LoadingSplash";

const Stack = createNativeStackNavigator();

const SplashScreens = () => {
    return (
        <Stack.Navigator  
        screenOptions={{
            headerShown: false
        }}>
            {/* <Stack.Screen name="LoadingSplash" componrn={LoadingSplash}/> */}
            <Stack.Screen name="FirstSplash" component={FirstSplash}/>
            <Stack.Screen name="OnBoarding" component={OnboardingScreen}/>
            <Stack.Screen name="SignIn" component={LoginScreen}/>
            <Stack.Screen name="SignUp" component={HalamanDaftar}/>
        </Stack.Navigator>
    )
}

export default SplashScreens;