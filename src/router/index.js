import React from "react";
import Icon from 'react-native-ico';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import FirstSplash from "../pages/Splashscreen/FirstSplash";
import SecondSplash from "../pages/Splashscreen/SecondSplash";
import ThirdSplash from "../pages/Splashscreen/ThirdSplash";
import FourthSplash from "../pages/Splashscreen/FourthSplash";
import NavLogin from "../pages/Login";

import NavHome from "../pages/Beranda";

import HalamanPengaturan from "../pages/Pengaturan/HalamanPengaturan";

import NavKalender from "../pages/Kalender";
import HalamanKalender from "../pages/Kalender/HalamanKalender";

import NavKomoditas from "../pages/Komoditas";
import HalamanKomoditas from "../pages/Komoditas/HalamanKomoditas";
import TambahKomoditas from "../pages/Komoditas/TambahKomoditas";
import NavPengaturan from "../pages/Pengaturan";
import DetailPengukuran from "../pages/Komoditas/DetailPengukuran";
import TabViewExample from "../pages/Komoditas/TabView";
import KalkulatorBobot from "../pages/Beranda/KalkulatorBobot";
import InfoHargaHewan from "../pages/Beranda/InfoHargaHewan";
import KontakKeswan from "../pages/Beranda/KontakKeswan";



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
            <Stack.Screen name= "NavKomoditas" component={NavKomoditas}/>
            <Stack.Screen name="KalkulatorBobot" component={KalkulatorBobot}/>
            <Stack.Screen name="InfoHargaHewan" component={InfoHargaHewan}/>
            <Stack.Screen name="KontakKeswan" component={KontakKeswan}/>
            <Stack.Screen name= "NavKalender" component={NavKalender}/>
            <Stack.Screen name= "NavPengaturan" component={NavPengaturan}/>
            <Stack.Screen name="TambahKomoditas" component={TambahKomoditas}/>
            <Stack.Screen name="HalamanPengaturan" component={HalamanPengaturan}/>



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
            tabBarInactiveTintColor:'grey',
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
        component={NavPengaturan}
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