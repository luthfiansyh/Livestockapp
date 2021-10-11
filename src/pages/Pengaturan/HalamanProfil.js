import React, { Component } from 'react';
import {View,Text, ScrollView, StyleSheet, TouchableHighlight} from 'react-native';
import Icon from 'react-native-ico';
import NavLogin from '../Login';
import HalamanLogin from '../Login/HalamanLogin';

const HalamanProfil = () =>{
    return(
        <View style={{flex:1}}>
            <ScrollView>
                <View style={styles.header}>
                    <View style={styles.photo}>
                        <Text>profil</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#57B860',
        height:240,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    photo:{
        height:100,
        width:100,
        backgroundColor:'white',
        borderRadius:100,
    },
    card:{
        width:'100%',
        height:72,
        backgroundColor:'#fff',
        borderBottomColor: '#E0E0E0',
        borderBottomWidth:1,
        justifyContent:'flex-start',
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:24
    },
    text:{
        paddingLeft:24,
        fontSize:16,
        fontWeight:"600"
    }
})

export default HalamanProfil;