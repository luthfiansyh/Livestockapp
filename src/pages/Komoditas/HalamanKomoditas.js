import React, { Component } from 'react';
import {View,Text, StyleSheet, ScrollView, TouchableOpacity, TouchableHighlight} from 'react-native';
import Icon from 'react-native-ico';
import RightChevron from '../../component/assets/icons/RightChevron';
import CardKomoditas from '../../component/CardKomoditas.js';
import FloatingButton from '../../component/FloatingPlusButton.js';
import Plusbutton from '../../component/assets/icons/Plus';

import HeaderPage from '../../component/HeaderPage.js';

const HalamanKomoditas = (props) =>{

    const {navigation} = props;


    return(
        <View  style={{flex:1, backgroundColor:'white'}}>
            <HeaderPage/>
            <ScrollView>    
                <View style={{marginBottom:24}}></View>
                <View style={card.container}>
                    <TouchableHighlight 
                    activeOpacity={0.5}
                    underlayColor="#ECECEC"
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
                                <RightChevron/>
                            </View>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={card.container}>
                    <TouchableHighlight 
                    activeOpacity={0.5}
                    underlayColor="#ECECEC"
                    onPress={() => {alert('Clicked')}}>
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
                                <RightChevron/>
                            </View>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={card.container}>
                    <TouchableHighlight 
                    activeOpacity={0.5}
                    underlayColor="#ECECEC"
                    onPress={() => {alert('Clicked')}}>
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
                                <RightChevron/>
                            </View>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{marginBottom:84}}></View>
            </ScrollView>
                <TouchableOpacity
                style={styles.touchable}
                onPress={() => {navigation.navigate('TambahKomoditas')}}
                >
                    <View style={styles.icon}>
                        <Plusbutton/>
                    </View>
                </TouchableOpacity>
        </View>
    )
}

const card = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ECECEC',
        marginHorizontal: '4%',
        marginTop: 0,
        marginBottom: 16,
        borderRadius: 8,
        height: 96,
        maxHeight: 100,
        justifyContent:'center'
    },
    margin:{
        marginHorizontal:16,
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
        borderRadius:8,
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
        justifyContent:'center',
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
    // fab:{
    //     position: 'absolute',
    //     right: "4%",
    //     bottom: "10%",
    //     backgroundColor:'#57B860'
    // },
    touchable:{
        backgroundColor: '#57B860',
        borderRadius: 100,
        width: 48,
        height: 48,
        position: 'absolute',
        right: "4%",
        bottom: "10%",
    },
    icon:{
        margin:14
    }
})



export default HalamanKomoditas;