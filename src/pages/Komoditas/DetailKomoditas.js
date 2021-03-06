import React, { Component, useEffect, useContext } from 'react';
import {View,Text, StyleSheet, ScrollView, TouchableOpacity, TouchableHighlight, FlatList} from 'react-native';
import Icon from 'react-native-ico';
import RightChevron from '../../component/assets/icons/RightChevron';
import CardKomoditas from '../../component/CardKomoditas.js';
import FloatingButton from '../../component/FloatingPlusButton.js';
import Plusbutton from '../../component/assets/icons/Plus';
import Katalog from '../../component/assets/icons/Katalog';
import IconSapi from '../../component/assets/icons/Sapi';
import SeeDetails from '../../component/assets/icons/IconSeeDetails';

import HeaderPage from '../../component/HeaderPage.js';
import { firebase } from '@react-native-firebase/firestore';
import { LoginContext } from '../../utils/LoginProvider';
import ArrowBackWhite from '../../component/assets/icons/ArrowBackWhite';


const DetailKomoditas = (props) => {

    const {navigation} = props;
        
        const { user } = useContext(LoginContext);
        const uid = firebase.auth().currentUser.uid;
        const [komoditas, setKomoditas] = React.useState('');
        const [loading, setLoading] = React.useState(true);



    useEffect(() => {
        const KomoditasRef = firebase.firestore()
        .collection('Komoditas')
        .doc(KomoditasId)
        .get()
        // .where("userID", "==", user.uid)

        // const KomoditasRef = firebase.firestore().collection('Komoditas')
        .then()
    },[]);

    useEffect(() => {
        const KomoditasRef = firebase.firestore().collection('Komoditas').doc(id).where("userID", "==", uid);
        return KomoditasRef.onSnapshot( querySnapshot => {
            const list = [];
            querySnapshot.forEach(doc => {
                const { alamat, jenis_komoditas, klasifikasi, luaslahan, luaslahandigunakan, rumpun_komoditas, UserID } = doc.data();
                list.push({
                    id: doc.id,
                    alamat,
                    jenis_komoditas,
                    klasifikasi,
                    luaslahan,
                    luaslahandigunakan,
                    rumpun_komoditas,
                });
            });

            setKomoditas(list);

            if(loading){
                setLoading(false);
            }
    });
    },[]);

    
    


        return(
                <View  style={{backgroundColor:'white', flex: 1}}>
                    <View style={styles.container}>
                        <TouchableOpacity 
                        onPress={() => {navigation.goBack()}} 
                        style={{padding:24}}>
                            <ArrowBackWhite/>
                        </TouchableOpacity>
                        <Text style={styles.header}>DetailKomoditas</Text>
                    </View>
                        <View style={{height: '83.5%', backgroundColor:'white'}}>
                            <FlatList
                            style={card.flatlist}
                            showsVerticalScrollIndicator={false}
                            data={komoditas}
                            fadingEdgeLength={50}
                            renderItem={({item}) => (
                                <View style={card.container}>
                                    <TouchableOpacity
                                    activeOpacity={1}
                                    underlayColor="#fff"
                                    onPress={() => {navigation.navigate('DetailKomoditas')}}
                                    >
                                    <View style={card.margin}>
                                        <View style={card.leftside}>
                                            <View style={card.photo}></View>
                                            <View style={card.infokomoditas}>
                                                <Text style={card.namakomoditas}>{item.jenis_komoditas}</Text>
                                                <View style ={card.infokomoditas2}>
                                                    <View>
                                                        <Text style={card.subjudul}>Rumpun</Text>
                                                        <Text style={card.infodetail}>{item.luaslahan}</Text>
                                                    </View>
                                                    <View>
                                                        <Text style={card.subjudul}>Klasifikasi</Text>
                                                        <Text style={card.infodetail}>{item.luaslahandigunakan}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <View
                                    style={card.detail}
                                    >
                                    <SeeDetails/>
                                    <Text style={card.detailtext}>Details</Text>
                                    </View>
                                    </TouchableOpacity>
                                </View>
                            )}
                            keyExtractor={(item) => item.id}
                            removeClippedSubviews={true}
                            />
                        </View>
                    <TouchableOpacity
                    style={fab.touchable }
                    activeOpacity={0.7}
                    onPress={() => {navigation.navigate('TambahPendataan')}}
                    >
                        <View style={fab.icon}>
                            <Plusbutton/>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        }

const styles = StyleSheet.create({
    container:{
        width:'100%',
        right: 0,
        top:0,
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
        flex: 1,
        textAlign:'center',
        marginRight: 72,
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
        fontFamily:'Mulish-Bold',
        color:'white'
    },
    inside:{
        height: 24,
        width:24,
        marginRight: 24,
        marginTop:16
    }

})

const card = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        marginHorizontal: 16,
        top: 4,
        bottom: 4,
        marginTop: 8,
        marginBottom: 16,
        borderRadius: 8,
        height: 140,
        justifyContent:'center',
        borderColor: '#DDDDFF',
        borderWidth: 1,
        elevation: 2
    },
    margin:{
        marginHorizontal:16,
        marginVertical: 8,
        flexDirection:'row',
        justifyContent:'center',
    },
    leftside:{
        flexDirection:'row',
    },
    photo:{
        height:68,
        width:68,
        backgroundColor:'#57B860',
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
    detail:{
        justifyContent:'flex-end',
        alignSelf:'flex-end',
        flexDirection:'row',
        alignItems:'center',
        marginTop: 16,
        marginRight: 16,
    },
    icon:{
        alignItems:'center',
        justifyContent:'center',
    },
    subjudul:{
        fontSize:12,
        fontWeight:'normal',
        marginBottom: 2,
        color:'#959595',
        fontFamily:'Mulish-SemiBold'
    },
    infodetail:{
        fontSize:14,
        fontFamily:'Mulish-SemiBold',
        color:'#3c3c3c'
    },
    namakomoditas:{
        fontSize: 16,
        fontFamily:'Mulish-Bold',
        color:'#565656'
    },
    detailtext:{
        fontFamily:'Mulish-Bold',
        fontSize: 12,
        color: '#565656',
        marginLeft: 8
    },
    flatlist:{
        // flex: 1,
        flexGrow: 1,
        height: '100%',

    }
})

const fab = StyleSheet.create({
    touchable:{
        backgroundColor: '#57B860',
        borderRadius: 100,
        width: 56,
        height: 56,
        position: 'absolute',
        right: "4%",
        bottom: "4%",
        alignItems:'center',
        justifyContent:'center'
    },
    icon:{
    }
})



export default DetailKomoditas;