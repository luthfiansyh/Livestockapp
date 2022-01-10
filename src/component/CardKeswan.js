import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    TouchableHighlight,
    TextInput,
    FlatList
} from "react-native";
import RightChevron from './assets/icons/RightChevron';
import SeeDetails from './assets/icons/IconSeeDetails';
import firestore, {collection, getDocs} from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/firestore';


const CardKeswan = (props) => {
    
    const {navigation} =props;

    const VeterinerRef = firebase.firestore().collection('veteriner');
    const [veteriner, setVeteriner] = React.useState('');
    const [loading, setLoading] = React.useState(true);

    // useEffect(() => {
    //     const getVeteriner = async() => {
    //         const data = await getDocs(VeterinerRef);
    //         setVeteriner(data.docs.map((doc) => ({...doc.data(), id: docs.id})));
    //     };
    //     getVeteriner()
    // }, [])


    useEffect(() => {
        const fetchPosts = async() => {
            try{
                const list = [];

                firestore()
                .collection('veteriner')
                .get()
                .then((querySnapshot) => {
                    console.log('Total Posts: ', querySnapshot.size);

                    querySnapshot.forEach(doc => {
                        const {alamat, kontak, layanan, nama_rsh, profil} = doc.data();
                        list.push({
                            alamat: alamat,
                            kontak: kontak,
                            layanan: layanan,
                            nama_rsh: nama_rsh,
                            profil: profil,
                        })
                    })
                }
                )
            } catch(e){
                console.log(e);
            }
        }
    })

    return(
        // <View>
        //     <View style={card.container}>
        //                 <View style={{paddingHorizontal: 16}}>
        //                     <View style={{flexDirection:'column'}}>
        //                         <Text style={card.judul}>RSH Cikole Lembang</Text>
        //                         <Text style={card.infodetail}>Jl. Raya Tangkuban Parahu No.KM. 22,2, Cikole...</Text>
        //                         <Text style={card.infodetail}>(022) 82782244)</Text>
        //                          <TouchableOpacity
        //                              activeOpacity={0.5}
        //                             underlayColor="#fff"
        //                             style={card.infokomoditas}
        //                             onPress={() => {alert('Details')}}
        //                             >
        //                             <SeeDetails/>
        //                             <Text style={card.detailtext}>Details</Text>
        //                             </TouchableOpacity>
        //                     </View>
        //                 </View>
        //         </View>
        // </View>

        <View>
            <FlatList
                data={VeterinerRef}
                renderItem={veteriner}
                keyExtractor={(item) => item.id}
                removeClippedSubviews={true}
                
            />
        </View>
    )
}
const card = StyleSheet.create({
    container:{
       flex:1,
        backgroundColor:'#fff',
        borderWidth: 1,
        borderColor: '#DDDDFF',
        marginHorizontal: 16,
        marginTop: 0,
        marginBottom: 24,
        borderRadius: 8,
        height: 140,
        justifyContent:'center',
        elevation: 8
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
        justifyContent:'flex-end',
        flexDirection:'row',
        alignItems:'center',
        marginTop: 16,
        alignSelf:'flex-end'

    },
    icon:{
        alignItems:'center',
        justifyContent:'center',
    },
    infodetail:{
        fontSize:14,
        color:'#626262',
        marginVertical: 2,
        fontFamily:'Mulish-Regular'
    },
    judul:{
        fontSize: 16,
        color:'#626262',
        fontFamily:'Mulish-Bold'
    },
    detailtext:{
        fontFamily:'Mulish-Bold',
        fontSize: 12,
        color: '#565656',
        marginLeft: 8
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
        marginBottom:16
    },
    buttonbackground:{
        marginTop: "16%",
        bottom:'4%',
        flexDirection:"row",
        alignItems: 'flex-end',
        justifyContent:'space-between',
        marginHorizontal:16,
    },
    button:{
        justifyContent: 'space-around',
        width: "100%",
        height: 48,
        backgroundColor:'#57B860',
    },
    buttontext:{
        color:'white',
        textAlign:'center',
        fontSize: 16,
        fontWeight:'800'
    },
    searchbar:{
        height: 48, 
        borderWidth: 1,
        marginHorizontal: 16,
        marginBottom: 24,
        borderRadius: 50,
        flexDirection:'row',
    },
    searchtext:{
        justifyContent:'center',
        alignSelf:'center',
        marginHorizontal: 16,
        width: 300,
        fontFamily:'Mulish-Regular'
    },
    searchicon:{
        alignSelf:'center',
    }
    }
)

export default CardKeswan;