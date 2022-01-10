import React, { Component, useEffect } from 'react';
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
import firestore, {getDocs, collection} from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/firestore';
import { SafeAreaView } from 'react-native-safe-area-context';
import CardTest from '../../component/Cardtest';
import { renderNode } from 'react-native-elements/dist/helpers';

const HalamanKomoditas = (props) => {

    const {navigation} = props;



    // const [listkomoditas, setListKomoditas] = React.useState('');

    // const getDataDoc = async () => {
    //     const user = await firestore().collection('Komoditas').doc('ExbqfwJlzvcwRdwnA1qZ').get();

    //     console.log(user);
    // };

        const KomoditasRef = firebase.firestore().collection('Komoditas');
        const [komoditas, setKomoditas] = React.useState('');
        const [loading, setLoading] = React.useState(true);


        useEffect(() => {
        const getKomoditas = async() => {
            const data = await getDocs(KomoditasRef);
            setKomoditas(data.docs.map((doc) => ({...doc.data(), id: docs.id})));
        };
        getKomoditas()
    }, [])


    useEffect(() => {
        return KomoditasRef.onSnapshot( querySnapshot => {
            const list = [];
            querySnapshot.forEach(doc => {
                const { alamat, jenis_komoditas, klasifikasi, luaslahan, luaslahandigunakan, rumpun_komoditas, userID } = doc.data();
                list.push({
                    id: doc.id,
                    alamat,
                    jenis_komoditas,
                    klasifikasi,
                    luaslahan,
                    luaslahandigunakan,
                    rumpun_komoditas,
                    userID,
                });
            });

            setKomoditas(list);

            if(loading){
                setLoading(false);
            }
    });
    },[]);

    //  useEffect(() => {
    //      const fetchPosts = async() => {
    //         try{
    //             const list = [];

    //             firestore()
    //             .collection('Komoditas')
    //             .get()
    //             .then((querySnapshot) => {
    //                 console.log('Total Posts: ', querySnapshot.size);

    //                 querySnapshot.forEach(doc => {
    //                     const {jenis_komoditas, rumpun, klasifikasi, alamat, luaslahan, luaslahandigunakan, userID} = doc.data();
    //                     list.push({
    //                         id: doc.id,
    //                         userID,
    //                         jenis_komoditas: jenis_komoditas,
    //                         rumpun_komoditas: rumpun,
    //                         klasifikasi: klasifikasi,
    //                         alamat: alamat,
    //                         luaslahan: luaslahan,
    //                         luaslahandigunakan: luaslahandigunakan,
    //                     })
    //                 })
    //             }
    //             )
    //         } catch(e){
    //             console.log(e);
    //         }
    //     }
    // })

        return(
                <View  style={{backgroundColor:'#F9F9F9'}}>
                    <HeaderPage/>
                    <SafeAreaView>    
                        <View style={{backgroundColor:'pink', height: 600}}>
                            <FlatList
                            data={komoditas}
                            renderItem={({item}) => (
                                <View style={card.container}>
                                    <View style={card.margin}>
                                        <View style={card.leftside}>
                                            <View style={card.photo}></View>
                                            <View style={card.infokomoditas}>
                                                <Text style={card.namakomoditas}>{item.jenis_komoditas}</Text>
                                                <View style ={card.infokomoditas2}>
                                                    <View>
                                                        <Text style={card.subjudul}>Rumpun</Text>
                                                        <Text style={card.infodetail}>{item.rumpun_komoditas}</Text>
                                                    </View>
                                                    <View>
                                                        <Text style={card.subjudul}>Klasifikasi</Text>
                                                        <Text style={card.infodetail}>{item.klasifikasi}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <TouchableOpacity
                                    activeOpacity={0.5}
                                    underlayColor="#fff"
                                    style={card.detail}
                                    onPress={() => {navigation.navigate('DetailKomoditas')}}
                                    >
                                    <SeeDetails/>
                                    <Text style={card.detailtext}>Details</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                            keyExtractor={(item) => item.id}
                            removeClippedSubviews={true}
                            />
                        </View>
                    </SafeAreaView>
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
        backgroundColor:'#fff',
        marginHorizontal: 16,
        marginVertical: 16,
        borderRadius: 8,
        height: 140,
        justifyContent:'center',
        borderColor: '#DDDDFF',
        borderWidth: 1,
        elevation: 6
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