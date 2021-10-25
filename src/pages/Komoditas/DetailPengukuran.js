import React, { Component } from 'react';
import {View,Text, StyleSheet, ScrollView, TouchableOpacity, TouchableHighlight} from 'react-native';
import Icon from 'react-native-ico';

const DetailPengukuran = (props) =>{

    const {navigation} = props;


    return(
        <View  style={{flex:1}}>
            <View style={style.container}>
                <TouchableOpacity 
                onPress={() => {navigation.goBack()}} 
                style={style.icons}>
                    <Icon name="go-back-left-arrow" group="material-design" color="#fff" size={24}/>
                </TouchableOpacity>
                <Text style={style.header}>Detail Hewan</Text>
                <View style={style.icons}>
                <TouchableOpacity 
                onPress={() => {navigation.goBack()}} 
                >
                    <Icon Icon name="trash" group="ui-interface" color="#fff" size={24}/>
                </TouchableOpacity>
                </View>
            </View>
            <View  style={style.section2}>
                <View style={style.row}>
                    <Text  style={style.name}>detail</Text>
                    <Text  style={style.name}>-</Text>
                    <Text  style={style.name}>0078</Text>
                </View>
                <View>
                    <View style={style.row}>
                        <View style={style.margins}>
                            <Text style={style.judul}>Rumpun</Text>
                            <Text style={style.isi}>Brahman</Text>
                        </View>
                        <View style={style.margins}>
                            <Text style={style.judul}>Klasifikasi</Text>
                            <Text style={style.isi}>Penggemukan</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        width:'100%',
        height:64,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#57B860',
    },
    header:{
        marginTop:16,
        fontSize: 20,
        fontWeight: "600",
        color:'white',
        marginBottom:16,
    },
    icons:{
        flexDirection:'row',
        paddingHorizontal:16,
    },
    margin:{
        marginRight:16
    },
    margins:{
        marginTop:24,
        marginRight: "20%",
    },
    section2:{
        backgroundColor:'#57B860',
        paddingHorizontal: 24,
        paddingVertical: 16
    },
    name:{
        fontSize:24,
        color:'white',
        marginRight:'4%'
    },
    row:{
        flexDirection:'row',
    },
    judul:{
        fontSize:12,
        color:'white',
        fontWeight:'400',
        marginBottom:8
    },
    isi:{
        fontSize:14,
        color:'white',
        fontWeight:'400',
    }
})



export default DetailPengukuran;