import React from 'react';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import FirstRoute from './TabProfil';
import SecondRoute from './TabPertumbuhan';

const Tab = createMaterialTopTabNavigator();

function TopTabs(){
    return(
        <Tab.Navigator
        tabBarOption={{
            activeTintColor : 'pink',
            labelStyles: {fontSize: 12},
            style: {backgroundColor:'white'}
        }}
        >
            <Tab.Screen
                name="Profil"
                component={FirstRoute}
                options={{tabBarLabel:"Profil"}}
            />
            <Tab.Screen
                name="Pertumbuhan"
                component={FirstRoute}
                options={{tabBarLabel:"Pertumbuhan"}}
            />
            <Tab.Screen
                name="Pengukuran"
                component={FirstRoute}
                options={{tabBarLabel:"Pengukuran"}}
            />
        </Tab.Navigator>
    )
}

export default TopTabs;
