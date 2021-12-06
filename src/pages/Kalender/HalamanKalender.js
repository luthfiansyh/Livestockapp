import React, { Component } from 'react';
import {View,Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { FAB } from 'react-native-paper';
import Icon from 'react-native-ico';

import HeaderPage from '../../component/HeaderPage.js';
import Plusbutton from '../../component/assets/icons/Plus';
import ThumbnailArtikel from '../../component/ThumbnailArtikel.js';

const HalamanKalender = (props) =>{

    const {navigation} = props;


    return(
        <View  style={{flex:1}}>
            <View style={styles.container}>
                <View style={styles.margins}></View>
                <Text style={styles.Text}>Kalender Jadwal</Text>
                <View style={styles.inside}></View>
            </View>
            <ScrollView>
                <Text>Halaman kalender</Text>
            </ScrollView>
            <View style={styles.fab}>
                <TouchableOpacity
                style={styles.touchable}
                onPress={() => {navigation.navigate('NavKomoditas')}}
                >
                    <View style={styles.icon}>
                        <Plusbutton/>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    fab:{
        position: 'absolute',
        right: "4%",
        bottom: "10%",
    },
    touchable:{
        backgroundColor: "#57B860",
        opacity: 0.8,
        borderRadius: 100,
        width: 48,
        height: 48, 
    },
    icon:{
        margin:14
    },
    container:{
        height: 64,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom:16,
        justifyContent: 'space-between',
        backgroundColor:'#57B860'
    },
    margins:{
        height: 24,
        width:24,
        marginLeft: 24,
        marginTop:16
    },
    Text:{
        marginTop:16,
        fontSize: 20,
        fontWeight: "600",
        color:'white'
    },
    inside:{
        height: 24,
        width:24,
        marginRight: 24,
        marginTop:16
    }
})



export default HalamanKalender;