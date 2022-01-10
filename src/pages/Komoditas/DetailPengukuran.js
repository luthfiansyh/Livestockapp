import React from 'react';
import {View,Text, StyleSheet, ScrollView, TouchableOpacity, TouchableHighlight} from 'react-native';
import ArrowBackWhite from "../../component/assets/icons/ArrowBackWhite";
import IconTrash from '../../component/assets/icons/IconTrash';

const DetailPengukuran = (props) =>{

    const {navigation} = props;


    return(
        <View  style={{flex:1, backgroundColor:'white'}}>
            <View style={style.container}>
                <TouchableOpacity 
                onPress={() => {navigation.goBack()}} 
                style={style.icons}>
                    <ArrowBackWhite/>
                </TouchableOpacity>
                <Text style={style.header}>Detail Pengukuran</Text>
                <View style={style.icons}>
                <TouchableOpacity 
                onPress={() => {alert('deleted')}} 
                >
                    <IconTrash/>
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
            <Text style={style.paragraph}>Berikut adalah hasil pengukuran pertumbuhan pertumbuhan yang dilakukan pada tanggal 17 Agustus 2021.</Text>
            <View style={style.box}>
                <View style={style.row}>
                    <View style={style.column}>
                        <Text style={style.left}>Bobot Badan (kg)</Text>
                        <Text style={style.left}>Tinggi Badan (kg)</Text>
                        <Text style={style.left}>Panjang Badan (cm)</Text>
                        <Text style={style.left}>Tinggi Gumba (cm)</Text>
                        <Text style={style.left}>Lebar Pinggul (cm)</Text>
                        <Text style={style.left}>Lingkar Dada (cm)</Text>
                    </View>
                    <View style={style.column}>
                        <Text style={style.right}>597</Text>
                        <Text style={style.right}>172</Text>
                        <Text style={style.right}>210</Text>
                        <Text style={style.right}>168</Text>
                        <Text style={style.right}>100</Text>
                        <Text style={style.right}>200</Text>
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
        fontFamily:'Mulish-Bold',
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
    column:{
        flexDirection:'column',
        flex:1
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
    },
    paragraph:{
        margin:16,
        color:'#3A3B3C',
        textAlign:'justify',
        fontSize: 14,
        fontWeight: "600",
        lineHeight: 24,
    },
    row:{
        flexDirection:'row',
        justifyContent:'flex-start',
    },
    box:{
        backgroundColor:'#EFEFEF',
        paddingVertical:16,
        borderRadius: 8,
        marginVertical:8,
        marginHorizontal: 16
    },
    left:{
        color:'#66686A',
        fontSize:14,
        marginVertical:2,
        marginLeft:16,
        marginRight:24,
    },
    right:{
        color:'black',
        fontSize:14,
        marginVertical:2,
    },
    
})



export default DetailPengukuran;