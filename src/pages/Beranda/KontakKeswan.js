import React, {useEffect, useCallback} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    Modal,
    Pressable,
    Image
} from "react-native";
import ArrowBackWhite from '../../component/assets/icons/ArrowBackWhite';
import IconFilter from '../../component/assets/icons/FilterIcon';
import SeeDetails from '../../component/assets/icons/IconSeeDetails';
import { firebase } from '@react-native-firebase/firestore';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import CloseIcon from '../../component/assets/icons/CloseIcon';



const KontakKeswan = (props) =>{

    const {navigation} = props;

    const VeterinerRef = firebase.firestore().collection('veteriner');
    const [veteriner, setVeteriner] =  React.useState([]);
    const [loading, setLoading] = React.useState([]);
    const [textShown, setTextShown] = React.useState(false);
    const [lengthmore, setLengthMore] = React.useState(false);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [detailmodal, setDetailModal] = React.useState(false);
    const [vetid, setVetId] = React.useState('');
    const [alamatid, setAlamatId] = React.useState('');
    const [instansiid, setInstansiId] = React.useState('');
    const [kontakid, setKontakId] = React.useState('');
    const [layananid, setLayananId] = React.useState('');
    const [namarsh, setNamaRsh] = React.useState('');
    const [provinsiid, setProvinsiId] = React.useState('');
    const [itemid, setItemId] = React.useState('');



    const toggleNumberOfLines = () => { //To toggle the show text or hide it
    setTextShown(!textShown);
    }

    const onTextLayout = useCallback(e =>{
    setLengthMore(e.nativeEvent.lines.length >=2); //to check the text is more than 4 lines or not
    // console.log(e.nativeEvent);
    },[]);

    useEffect(() => {
        return VeterinerRef.onSnapshot( querySnapshot => {
            const list = [];
            querySnapshot.forEach(doc => {
                const { vetid, instansi, provinsi, nama_rsh, kontak, alamat, layanan} = doc.data();
                list.push({
                    id: doc.id,
                    alamat,
                    kontak,
                    nama_rsh,
                    layanan,
                    vetid,
                    instansi,
                    provinsi
                });
            });

            setVeteriner(list);

            if(loading){
                setLoading(false);
            }
    });
    },[]);

    

    return(
        <View style={{flex:1, backgroundColor:'white'}}>
            <Modal
                animationType='slide'
                transparent={true}
                visible={detailmodal}
            >
                <View style={[modal.centeredDetailView, detailmodal ? {backgroundColor:'rgba(0,0,0,0.5)'} : '']}>
                    <View style={modal.detailmodalView}>
                        <View style={modal.detailheaderview}>
                            <TouchableOpacity 
                            onPress={() => {setDetailModal(!detailmodal)}} 
                            style={{padding:24}}>
                                <ArrowBackWhite/>
                            </TouchableOpacity>
                            <Text style={modal.judul}>Detail Kontak Veteriner</Text>
                            <View style={{padding:24}}>
                                <View style={{height: 24, width: 24}}></View>
                            </View>
                        </View>
                        <ScrollView style={{backgroundColor:'#F7F7F7'}}>
                            <View style={detail.container}>
                                <Text style={detail.judul_instansi}>Profil Veteriner</Text>
                                <Image style={detail.photo} source={require('../../component/assets/images/RSH_Cikole_Lembang.jpg')} />
                                <Text style={detail.judul_instansi2}>Nama Instansi</Text>
                                <Text style={detail.namakodehewan}>{namarsh}</Text>
                                <View style={{height: 16}}></View>
                                <Text style={detail.judul_instansi2}>Alamat</Text>
                                <Text style={detail.namakodehewan}>{alamatid}</Text>
                                <View style={{height: 16}}></View>
                                <Text style={detail.judul_instansi2}>Kontak</Text>
                                <Text style={detail.namakodehewan}>{kontakid}</Text>
                                <View style={{height: 16}}></View>
                                <Text style={detail.judul_instansi2}>Pelayanan</Text>
                                <Text style={detail.namakodehewan}>{layananid}</Text>
                                <View style={{height: 16}}></View>
                            </View>
                            <View style={{height: 36}}></View>

                        </ScrollView>
                    </View>
                </View>

            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible} 
            >
                <View style={[modal.centeredView, modalVisible ? {backgroundColor: 'rgba(0,0,0,0.5)'} : '']}>
                <View style={modal.modalView}>
                        <View style={modal.headerview}>
                            <TouchableOpacity 
                            onPress={() => setModalVisible(!modalVisible)}
                            style={modal.closeicon}
                            >
                            <CloseIcon/>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            style={modal.searchbutton}
                            onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={modal.textbutton}>Terapkan</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={style.container}>
                <TouchableOpacity  
                onPress={() => {navigation.goBack()}} 
                style={{padding:24}}>
                    <ArrowBackWhite/>
                </TouchableOpacity>
                <Text style={style.header}>Kontak Veteriner</Text>
            </View>
            <SafeAreaView>
                <View style={{ paddingBottom :73, flexGrow: 1}}>
                    <FlatList
                    style={{height: '100%',flexGrow:1}}
                    // fadingEdgeLength={50}
                    data={veteriner}
                    keyExtractor={(item) => item.id}
                    removeClippedSubviews={true}
                    renderItem={({item}) =>
                        <TouchableOpacity 
                        style={card.container}
                        activeOpacity={1}
                        underlayColor="#fff"
                        onPress={() => {
                            setItemId(item.id);
                            setAlamatId(item.alamat);
                            setInstansiId(item.instansi);
                            setKontakId(item.kontak);
                            setLayananId(item.layanan);
                            setNamaRsh(item.nama_rsh);
                            setProvinsiId(item.provinsi);
                            setVetId(item.vetid)
                            setDetailModal(!detailmodal)
                        }}
                        >
                            <View style={{paddingHorizontal: 16}}>
                                <View style={{flexDirection:'column'}}>
                                    <Text style={card.judul}>{item.nama_rsh}</Text>
                                    <Text 
                                    style={card.infodetail}
                                    onTextLayout={onTextLayout}
                                    numberOfLines={textShown ? undefined : 2}
                                    >
                                        {item.alamat}
                                    </Text>
                                    <Text style={card.infodetail}>{item.kontak}</Text>
                                    <View style={card.infokomoditas}>
                                    <SeeDetails/>
                                    <Text style={card.detailtext}>Info Detail</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    }
                    />
                    <TouchableOpacity
                    style={fab.touchable }
                    activeOpacity={1}
                    onPress={() => setModalVisible(!modalVisible)}
                    >
                        <View style={fab.icon}>
                            <IconFilter/>
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    )
}

const fab = StyleSheet.create({
    touchable:{
        backgroundColor: '#57B860',
        borderRadius: 100,
        width: 56,
        height: 56,

        position: 'absolute',
        right: "4%",
        bottom: "16%",
        alignItems:'center',
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
        width: 2,
        height: 2
        },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 5
        },
        
})

const modal = StyleSheet.create({
    centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  centeredDetailView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalView: {
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor: "white",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    width:'100%',
    height: '50%',
    alignItems: "flex-start",
  },
  detailheaderview:{
        width:'100%',
        height:72,
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor:'#57B860',
        justifyContent:'space-between'
        
    },
    judul:{
        marginTop:16,
        fontSize: 20,
        fontFamily:'Mulish-Bold',
        color:'white',
        marginBottom:16,
        textAlign:'center',
    },
    margins:{
        height: 24,
        width:24,
        marginLeft: 24,
        marginTop:16
    },
  closeicon:{
    padding: 24
  },
  detailmodalView:{
    flexDirection:'column',
    backgroundColor: "white",
    width:'100%',
    height: '100%',
  },
  headerview:{
      flexDirection:'row',
      flex: 1, 
      justifyContent:'space-between', 
      alignItems:'center',
      margin: 16
  },
  headertitle:{
        marginTop:16,
        fontSize: 20,
        fontFamily:'Mulish-Bold',
        color:'white',
        marginBottom:16,
        flex: 1,
        textAlign:'center',
        marginRight: 72
    },
  searchbutton:{
      backgroundColor:'#57B860',
      alignItems:'center',
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 8
  },
  textbutton:{
      fontFamily:'Mulish-Bold',
      color: '#fff',
      fontSize: 16
  }
})

const detail = StyleSheet.create({
    container:{
        backgroundColor:'#fff', 
        marginHorizontal: 16,
        marginTop: 16,
        borderRadius: 16, 
        padding: 16,
        flexDirection:'column',
        shadowColor:'grey',
        elevation: 5
    },
    button:{
        backgroundColor:'#FFA43A', 
        marginHorizontal: 16,
        marginTop: 16,
        borderRadius: 8, 
        padding: 16,
        shadowColor:'grey',
        elevation: 5
    },
    namakodehewan:{
        fontFamily:'Mulish-SemiBold',
        paddingLeft: 16,
        marginVertical: 4,
        fontSize: 14,
        color:'#565656'
    },
    judul_instansi:{
        fontFamily:'Mulish-Bold',
        paddingHorizontal: 16,
        fontSize: 16,
        color:'#000',
    },
    judul_instansi2:{
        fontFamily:'Mulish-Bold',
        paddingHorizontal: 16,
        fontSize: 14,
        color:'#000',
    },
    buttontext:{
        fontFamily:'Mulish-Bold',
        paddingHorizontal: 16,
        fontSize: 16,
        color:'#fff',
        textAlign:'center'
    },
    layanan:{
        fontFamily:'Mulish-SemiBold',
        paddingHorizontal: 16,
        marginVertical: 4,
        fontSize: 16,
        color:'#565656',
        backgroundColor:'pink',
    },
    photo:{
        height: 200,
        width: 320,
        margin:16,
        backgroundColor:'#57B860',
        borderRadius:8
    },

})


const card = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        borderWidth: 1,
        borderColor: '#DDDDDD',
        marginHorizontal: 16,
        marginBottom: 12,
        marginTop: 16,
        borderRadius: 8,
        height: 150,
        justifyContent:'center',
        shadowColor:'grey',
        elevation: 5
        
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
        fontFamily:'Mulish-Regular',
        lineHeight: 18
    },
    judul:{
        fontSize: 16,
        color:'#626262',
        fontFamily:'Mulish-Bold',
        marginBottom: 8
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
        height: 72,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#57B860'
    },
    header:{
        marginTop:16,
        fontSize: 20,
        fontFamily:'Mulish-Bold',
        color:'white',
        marginBottom:16,
        flex: 1,
        textAlign:'center',
        marginRight: 72
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


export default KontakKeswan;