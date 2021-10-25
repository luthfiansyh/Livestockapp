import React from "react";
import {
    View
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DetailHewan from "./DetailHewan";
import { NavigationContainer } from '@react-navigation/native';
import TopTabs from "./TabViewNavigator";

const Stack = createNativeStackNavigator();

const DetailHewanNav = () => {
    return(
    <View style={{flex:1}}>
        <DetailHewan/>
    </View>

  )
}

// const Tab = createMaterialTopTabNavigator();

// function TopTabs(){
//     return(
//         <Tab.Navigator
//         tabBarOption={{
//             activeTintColor : 'pink',
//             labelStyles: {fontSize: 12},
//             style: {backgroundColor:'white'}
//         }}
//         >
//             <Tab.Screen
//                 name="Profil"
//                 component={FirstRoute}
//                 options={{tabBarLabel:"Profil"}}
//             />
//             <Tab.Screen
//                 name="Pertumbuhan"
//                 component={FirstRoute}
//                 options={{tabBarLabel:"Pertumbuhan"}}
//             />
//             <Tab.Screen
//                 name="Pengukuran"
//                 component={FirstRoute}
//                 options={{tabBarLabel:"Pengukuran"}}
//             />
//         </Tab.Navigator>
//     )
// }

export default DetailHewanNav;
