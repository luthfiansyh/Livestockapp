import React, { Component } from 'react';
import {View,Text, StyleSheet, ScrollView} from 'react-native';
import { FAB } from 'react-native-paper';

import HeaderPage from '../../component/HeaderPage.js';

const HalamanKalender = (props) =>{

    const {navigation} = props;


    return(
        <View  style={{flex:1}}>
            <ScrollView>
                <HeaderPage/>
            </ScrollView>
            <FAB
                style={styles.fab}
                small
                icon="plus"
                onPress={() => {navigation.navigate('NavKalender')}}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    fab:{
        position: 'absolute',
        right: "4%",
        bottom: "10%",
        width: 48,
        height: 48,
        backgroundColor: "#57B860"
    }
})



export default HalamanKalender;