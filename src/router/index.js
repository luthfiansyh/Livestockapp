import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstSplash from "../pages/Splashscreen/FirstSplash";
import SecondSplash from "../pages/Splashscreen/SecondSplash";
import ThirdSplash from "../pages/Splashscreen/ThirdSplash";
import FourthSplash from "../pages/Splashscreen/FourthSplash";
import Beranda from "../pages/Beranda";
import HalamanKalender from "../pages/Kalender";
import NavHome from "../pages/Beranda";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HalamanKomoditas from "../pages/Komoditas/HalamanKomoditas";
import HalamanPengaturan from "../pages/Pengaturan/HalamanPengaturan";
import Icon from 'react-native-ico';
import HalamanLogin from "../pages/Login/HalamanLogin";
import NavLogin from "../pages/Login";

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
            <Stack.Screen name="NavigationLogin" component={NavLogin}/>
            <Stack.Screen name="HalamanBeranda" component={Home}/>
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#57B860',
            tabBarStyle: { position: 'absolute' },
            tabBarInactiveTintColor:'grey'
        }}
        >
      <Tab.Screen
        name="Beranda"
        component={NavHome}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" group="ui-interface" color={color} size={size}/>
          ),
        }}
      />
      <Tab.Screen
        name="Komoditas"
        component={HalamanKomoditas}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="sheep" group="miscellaneous" color={color} size={size}/>
          ),
        }}
        />
      <Tab.Screen
        name="Kalender"
        component={HalamanKalender}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="calendar-daily-page-on-day-31" group="lodgicons" color={color} size={size}/>
          ),
        }}
        />
      <Tab.Screen
        name="Pengaturan"
        component={HalamanPengaturan}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="settings" group="ui-interface"  color={color} size={size}/>
          ),
        }}
        />
    </Tab.Navigator>
  );
}

export default Router;