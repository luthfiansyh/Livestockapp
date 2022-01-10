import React, { Component, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
  Card
} from 'react-native';
import SeeDetails from './assets/icons/IconSeeDetails';
import firestore, {collection, getDocs} from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/firestore';

const CardKomoditas = (props) =>{
    const {navigation} = props;

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
    
    // componentDidMount();{
    //     getDataCollection();
    // }

    // getDataDoc = async () => {
    //     const comodity = await firebase.firestore()
    //         .collection('Komoditas')
    //         .doc('5IKzMqumIL7DFh7Zausp')
    //         .get();

    //         const date = comodity.data();

    //     console.log(comodity)

        
    // }

    // getDataCollection = async () => {
    //     const comodities = await firestore().collection('Komoditas').get();
    //     const allData = users.docs.map((doc) => doc.data());
    //     console.log(allData);
    // }


    useEffect(() => {
         const fetchPosts = async() => {
            try{
                const list = [];

                firestore()
                .collection('Komoditas')
                .get()
                .then((querySnapshot) => {
                    console.log('Total Posts: ', querySnapshot.size);

                    querySnapshot.forEach(doc => {
                        const {jenis_komoditas, rumpun, klasifikasi, alamat, luaslahan, luaslahandigunakan, userID} = doc.data();
                        list.push({
                            id: doc.id,
                            userID,
                            jenis_komoditas: jenis_komoditas,
                            rumpun_komoditas: rumpun,
                            klasifikasi: klasifikasi,
                            alamat: alamat,
                            luaslahan: luaslahan,
                            luaslahandigunakan: luaslahandigunakan,
                        })
                    })
                }
                )
            } catch(e){
                console.log(e);
            }
        }
    })

    // componentDidMount(){}


    return(
    //    <FlatList
    //     data={KomoditasRef}
    //     renderItem={({Komoditas}) => (
    //         <View style={{height: 50, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    //             <Text>Jenis Komoditas {Komoditas.jenis_komoditas} </Text>
    //             <Text></Text>
    //         </View>
    //     )}

    //    />

              <View>
                  <FlatList
                      data={KomoditasRef}
                      renderItem={({item, index}) => (
                          <View>
                              <Text>{item.jenis_komoditas}</Text>
                          </View>
                      )}
                    //   keyExtractor={(item) => item.id}
                      removeClippedSubviews={true}
                      
                  />
              </View>
    )

    // return(
    //             <View style={card.container}>
    //                 <View>
    //                     <View style={card.margin}>
    //                         <View style={card.leftside}>
    //                             <View style={card.photo}>
                                    
    //                             </View>
    //                             <View style={card.infokomoditas}>
    //                                 <Text style={card.namakomoditas}>Sapi</Text>
    //                                 <View style ={card.infokomoditas2}>
    //                                     <View>
    //                                         <Text style={card.subjudul}>Rumpun</Text>
    //                                         <Text style={card.infodetail}>Belgian Blue</Text>
    //                                     </View>
    //                                     <View>
    //                                         <Text style={card.subjudul}>Klasifikasi</Text>
    //                                         <Text style={card.infodetail}>Penggemukan</Text>
    //                                     </View>
    //                                 </View>
    //                             </View>
    //                         </View>
                            
    //                     </View>
    //                     <TouchableOpacity
    //                     activeOpacity={0.5}
    //                     underlayColor="#fff"
    //                     style={card.detail}
    //                     onPress={() => {alert('Details')}}
    //                     >
    //                     <SeeDetails/>
    //                     <Text style={card.detailtext}>Details</Text>
    //                 </TouchableOpacity>
    //                 </View>
    //             </View>
    // )
}

const card = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        marginHorizontal: '4%',
        marginTop: 0,
        marginBottom: 16,
        borderRadius: 8,
        height: 140,
        // maxHeight: 100,
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

export default CardKomoditas;