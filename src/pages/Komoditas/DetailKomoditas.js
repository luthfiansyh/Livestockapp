import React, { Component } from 'react';
import {View,Text, StyleSheet, ScrollView, TouchableOpacity, TouchableHighlight} from 'react-native';
import Icon from 'react-native-ico';
import ArrowBackWhite from '../../component/assets/icons/ArrowBackWhite';
import IconEdit from '../../component/assets/icons/IconEdit';
import IconTrash from '../../component/assets/icons/IconTrash';
import Plusbutton from '../../component/assets/icons/Plus';
import RightChevron from '../../component/assets/icons/RightChevron';
import DetailHewan from './DetailHewan';
import DetailHewanNav from './DetailHewanNav';
import TambahPendataan from './TambahPendataan';

const DetailKomoditas = (props) =>{

    const {navigation} = props;


    return(
        <View  style={{flex:1, backgroundColor:'white'}}>
            <View style={style.container}>
                <TouchableOpacity 
                    onPress={() => {navigation.goBack()}} 
                    style={{padding:24}}>
                        <ArrowBackWhite/>
                </TouchableOpacity>
                <Text style={style.header}>Detail Komoditas</Text>
                <View style={style.icons}>
                    <TouchableOpacity 
                    onPress={() => {alert('edit pressed')}}
                    style={style.margin}
                    >
                        <IconEdit/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => {alert('delete pressed')}} 
                    >
                        <IconTrash/>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <View style={text.row}>
                    <View style={text.column}>
                        <View style={text.content}>
                            <Text style = {text.title}>Total Luas Lahan (m2)</Text>
                            <Text style={text.isi}>160</Text>
                        </View>
                        <View style={text.content}>
                            <Text style = {text.title}>Rumpun</Text>
                            <Text style={text.isi}>Brahman</Text>
                        </View>
                    </View>
                    <View style={text.column}>
                        <View style={text.content}>
                            <Text style = {text.title}>Luas Lahan Digunakan (m2)</Text>
                            <Text style={text.isi}>160</Text>
                        </View>
                        <View style={text.content}>
                            <Text style = {text.title}>Klasifikasi</Text>
                            <Text style={text.isi}>Penggemukan</Text>
                        </View>
                    </View>
                    <View style={text.column}>
                        <View style={text.content}>
                            <Text style = {text.title}>Total Hewan</Text>
                            <Text style={text.isi}>3</Text>
                        </View>
                    </View>
                </View>
                <View style={card.container}>
                    <TouchableHighlight 
                    activeOpacity={0.5}
                    underlayColor="#ECECEC"
                    onPress={() => {navigation.navigate("DetailHewan")}}
                    >
                        <View style={card.infokomoditas}>
                            <View style={{flexDirection:'column'}}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={card.judul}>Budi</Text>
                                    <Text style={card.judul}>-</Text>
                                    <Text style={card.judul}>001</Text>
                                </View>
                                <Text style={card.infodetail}>6 Tahun 0 Bulan 1 Hari </Text>
                                <Text style={card.infodetail}>Jantan</Text>
                            </View>
                            <RightChevron/>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={card.container}>
                    <TouchableHighlight 
                    activeOpacity={0.5}
                    underlayColor="#ECECEC"
                    onPress={() => {alert ('Detail Hewan')}}
                    >
                        <View style={card.infokomoditas}>
                            <View style={{flexDirection:'column'}}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={card.judul}>Adi</Text>
                                    <Text style={card.judul}>-</Text>
                                    <Text style={card.judul}>002</Text>
                                </View>
                                <Text style={card.infodetail}>6 Tahun 0 Bulan 1 Hari </Text>
                                <Text style={card.infodetail}>Jantan</Text>
                            </View>
                            <RightChevron/>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={card.container}>
                    <TouchableHighlight 
                    activeOpacity={0.5}
                    underlayColor="#ECECEC"
                    onPress={() => {alert ('Detail Hewan')}}
                    >
                        <View style={card.infokomoditas}>
                            <View style={{flexDirection:'column'}}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={card.judul}>Putri</Text>
                                    <Text style={card.judul}>-</Text>
                                    <Text style={card.judul}>003</Text>
                                </View>
                                <Text style={card.infodetail}>6 Tahun 0 Bulan 1 Hari </Text>
                                <Text style={card.infodetail}>Betina</Text>
                            </View>
                            <RightChevron/>
                        </View>
                    </TouchableHighlight>
                </View>
            </ScrollView>
            <TouchableOpacity
            style={styles.touchable}
            onPress={() => {navigation.navigate(TambahPendataan)}}
            >
                <View style={styles.icon}>
                    <Plusbutton/>
                </View>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    touchable:{
        backgroundColor: "#57B860",
        borderRadius: 100,
        width: 48,
        height: 48, 
        position: 'absolute',
        right: "4%",
        bottom: "4%",
    },
    icon:{
        margin:14
    }
})

const card = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ECECEC',
        marginHorizontal: '4%',
        marginTop: 0,
        marginBottom: 16,
        borderRadius: 8,
        height: 84,
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
        backgroundColor:'red'
    },
    photo:{
        height:68,
        width:68,
        backgroundColor:'grey',
        borderRadius:8,
    },
    infokomoditas:{
        justifyContent:'space-between',
        marginHorizontal: 16,
        flexDirection:'row',
        alignItems:'center',

    },
    icon:{
        alignItems:'center',
        justifyContent:'center',
    },
    infodetail:{
        fontSize:14,
        color:'#626262',
        marginVertical: 2
    },
    judul:{
        fontSize: 16,
        color:'#626262',
        fontWeight: '700',
        marginRight: 8
    }

})

const text = StyleSheet.create({
    title:{
        color:'grey',
        fontSize: 12,
        justifyContent:'center'
    },
    isi:{
        color:'#3B3E42',
        fontSize: 14,
        fontWeight:'600'
    },
    content:{
        marginHorizontal:12,
        marginVertical: 8
    },
    row:{
        flexDirection:'row',
        justifyContent:'center',
        marginHorizontal:16
    }, 
    column:{
        flexDirection:'column',
        justifyContent:'flex-start',
        marginVertical:12,
    }

})

const style = StyleSheet.create({
    container:{
        width:'100%',
        right: 0,
        top:0,
        height:64,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#57B860'
    },
    header:{
        marginTop:16,
        fontSize: 20,
        fontWeight: "600",
        color:'white',
        marginBottom:16,
        textAlign:'center',
    },
    icons:{
        flexDirection:'row',
        paddingRight:16,
    },
    margin:{
        marginRight:16
    }
})



export default DetailKomoditas;