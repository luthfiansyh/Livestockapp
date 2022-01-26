import React from 'react';
import {View,Text, ScrollView, StyleSheet, TouchableOpacity, Image} from 'react-native';
import IconEditGrey from '../../component/assets/icons/IconEditGrey';
import ArrowBackWhite from '../../component/assets/icons/ArrowBackWhite';

const HalamanProfil = (props) =>{

    const {navigation} = props;

    return(
        <View style={{flex:1}}>
            <View style={styles.container}>
                <TouchableOpacity 
                onPress={() => {navigation.goBack()}} 
                style={{paddingVertical:24, paddingLeft: 24}}>
                    <ArrowBackWhite/>
                </TouchableOpacity>
                <Text style={styles.headertop}>Pengaturan Profil</Text>
                <View style={{height: 24, width:24, marginRight: 24, marginTop:16}}></View>
            </View>
            <ScrollView>
                <View style={styles.header}>
                    <TouchableOpacity
                    style={styles.edit}
                    onPress={() => {alert('edit')}}
                    >
                        <IconEditGrey/>
                    </TouchableOpacity>
                    <View style={styles.wrap}>
                        <View style={styles.photo}>
                            <Image style={styles.photo} source={require('../../component/assets/images/profile.jpg')} />
                        </View>
                        <Text style={styles.name}>Muhammad Luthfiansyah</Text>
                    </View>
                </View>
                <View style={{marginTop: 16, marginBottom: 36, backgroundColor:'white'}}>
                    <View style={styles.wrap2}>
                        <Text style={styles.title}>Email</Text>
                        <Text style={styles.subtitle}>Luthfi@gmail.com</Text>
                    </View>
                    <View style={styles.wrap2}>
                        <Text style={styles.title}>Password</Text>
                        <Text style={styles.subtitle}>********</Text>
                    </View>
                    <View style={styles.wrap2}>
                        <Text style={styles.title}>Tanggal Lahir</Text>
                        <Text style={styles.subtitle}>15 November 1998</Text>
                    </View>
                    <View style={styles.wrap2}>
                        <Text style={styles.title}>Jenis Kelamin</Text>
                        <Text style={styles.subtitle}>Laki - Laki</Text>
                    </View>
                    <View style={styles.wrap2}>
                        <Text style={styles.title}>Alamat Rumah</Text>
                        <Text style={styles.subtitle}>Jl. Pramuka Bunder, Perum Asabri Blok A nomor 3, Bandung Jawa Barat</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    photo:{
        height: 200,
        width: 320,
        margin:16,
        backgroundColor:'#57B860',
        borderRadius:8
    },
    header:{
        backgroundColor:'white',
        height:240,
        flex:1,
    },
    photo:{
        height:100,
        width:100,
        backgroundColor:'#BDBDBD',
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
    },
    
    edit:{
        marginTop: 16,
        marginHorizontal: 16,
        marginBottom: 8,
        alignItems:'flex-end'
    },
    wrap:{
        alignItems:'center',
        marginHorizontal: 16,
        marginTop: 24
    },
    name:{
        fontSize: 18,
        marginVertical: 24,
        fontFamily:'Mulish-Bold',
        color:'#000'
    },
    wrap2:{
        marginHorizontal: 16,
        paddingVertical: 8,
    },
    title:{
        fontSize: 16,
        color:'#000',
        paddingVertical: 8,
        fontFamily:'Mulish-Bold'
    },
    subtitle:{
        fontSize: 14,
        color:'#656565',
        paddingVertical: 8,
        fontFamily:'Mulish-Medium'
    },
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
    headertop:{
        marginTop:16,
        fontSize: 20,
        fontWeight: "600",
        color:'white',
        marginBottom:16
    },
})

export default HalamanProfil;