import React, { Component } from 'react';
import {View,Text, StyleSheet, ScrollView, TouchableOpacity, TouchableHighlight} from 'react-native';
import Icon from 'react-native-ico';
import CardKomoditas from '../../component/CardKomoditas.js';
import FloatingButton from '../../component/FloatingPlusButton.js';

import HeaderPage from '../../component/HeaderPage.js';
import Tombol from '../../component/Tombol';

const HalamanKomoditas = (props) =>{

    const {navigation} = props;


    return(
        <View  style={{flex:1}}>
            <HeaderPage/>
            <ScrollView>    
                <View style={{marginBottom:24}}></View>
                <View style={card.container}>
            <TouchableHighlight 
            activeOpacity={0.5}
            underlayColor="#DDDDDD"
            onPress={() => {navigation.navigate('NavKomoditas')}}>
                <View style={card.margin}>
                    <View style={card.leftside}>
                        <View style={card.photo}></View>
                        <View style={card.infokomoditas}>
                            <Text style={card.namakomoditas}>Sapi</Text>
                            <View style ={card.infokomoditas2}>
                                <View>
                                    <Text style={card.subjudul}>Rumpun</Text>
                                    <Text style={card.infodetail}>Belgian Blue</Text>
                                </View>
                                <View>
                                    <Text style={card.subjudul}>Klasifikasi</Text>
                                    <Text style={card.infodetail}>Penggemukan</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={card.icon}>
                        <Icon color="grey" width="16" height="16" name="right-chevron" group="font-awesome"/>
                    </View>
                </View>
            </TouchableHighlight>
        </View>
                <View style={{marginBottom:84}}></View>
            </ScrollView>
            <View style={styles.fab}>
                <TouchableOpacity
                style={styles.touchable}
                onPress={() => {navigation.navigate('TambahKomoditas')}}
                >
                    <Icon style={styles.icon} name="plus" group="ui-interface" color="white"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const card = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#EBEBEB',
        marginHorizontal: '4%',
        marginTop: 0,
        marginBottom: 16,
        borderRadius: 8,
        height: 84,
        maxHeight: 100,
        elevation: 8,
    },
    margin:{
        margin:8,
        flexDirection:'row',
        justifyContent:'center',
        
    },
    leftside:{
        flexDirection:'row',
    },
    photo:{
        height:68,
        width:68,
        backgroundColor:'grey',
        borderRadius:8
    },
    infokomoditas:{
        paddingLeft:'4%',
        justifyContent:'space-between',
        width: '78%'
    },
    infokomoditas2:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    icon:{
        alignItems:'center',
        justifyContent:'center'
    },
    subjudul:{
        fontSize:12,
        fontWeight:'normal',
        marginBottom: 4,
        color:'grey'
    },
    infodetail:{
        fontSize:14,
    },
    namakomoditas:{
        fontSize: 16
    }



})

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
    }
})



export default HalamanKomoditas;