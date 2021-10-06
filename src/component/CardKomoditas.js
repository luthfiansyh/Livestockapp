import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper';
import Icon from 'react-native-ico';

const CardKomoditas = (props) =>{
    const {navigation} = props;

    return(
        <View style={card.container}>
            <TouchableHighlight 
            activeOpacity={0.5}
            underlayColor="#DDDDDD"
            onPress={() => {navigation.navigate('DetailKomoditas')}}>
                <View style={card.margin}>
                    <View style={card.leftside}>
                        <View style={card.photo}></View>
                        <View style={card.infokomoditas}>
                            <Text style={card.namakomoditas}>Nama Komoditas</Text>
                            <View style ={card.infokomoditas2}>
                                <View>
                                    <Text style={card.subjudul}>Rumpun</Text>
                                    <Text style={card.infodetail}>Nama Rumpun</Text>
                                </View>
                                <View>
                                    <Text style={card.subjudul}>Klasifikasi</Text>
                                    <Text style={card.infodetail}>Nama Klasifikasi</Text>
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

export default CardKomoditas;