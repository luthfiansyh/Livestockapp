import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import BottomNav from './BottomNav';
import HomeTab from './HomeTab';
import KomoditasTab from './KomoditasTab';
import HalamanBeranda from '../pages/Beranda/HalamanBeranda';

const Tab = createMaterialBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator style={{flex:1}}>
      <Tab.Screen name="This is bottom navigator" component={HalamanBeranda}/>
    </Tab.Navigator>
  );
}

export default BottomTab;