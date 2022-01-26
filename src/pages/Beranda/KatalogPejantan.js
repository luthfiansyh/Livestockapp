import React, {useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    TouchableHighlight,
    TextInput,
    FlatList,
    Modal,
    Image,
    Linking
} from "react-native";
import ArrowBackWhite from '../../component/assets/icons/ArrowBackWhite';
import IconFilter from '../../component/assets/icons/FilterIcon';
import RightChevron from '../../component/assets/icons/RightChevron';
import SearchIcon from '../../component/assets/icons/SearchIcon';
import SeeDetails from '../../component/assets/icons/IconSeeDetails';
import { firebase } from '@react-native-firebase/firestore';
import { SafeAreaView } from 'react-native-safe-area-context';
import CloseIcon from '../../component/assets/icons/CloseIcon';

const KatalogPejantan = (props) =>{

    const {navigation} = props;
    const [katalogpejantan, setKatalogPejantan] = React.useState('');
    const [loading, setLoading] = React.useState(true);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [detailmodal, setDetailModal] = React.useState(false);
    const [namapejantanid, setNamaPejantanId] = React.useState('');
    const [kodehewanid, setKodeHewanId] = React.useState('');
    const [jkid, setJkId] = React.useState('');
    const [klasifikasiid, setKlasifikasiId] = React.useState('');
    const [rumpunid, setRumpunId] = React.useState('');


    useEffect(() => {
        const KatalogPejantanRef = firebase.firestore().collection('pejantan')
        return KatalogPejantanRef.onSnapshot( querySnapshot => {
            const list = [];
            querySnapshot.forEach(doc => {
                const { jenis_komoditas, klasifikasi, kode_hewan, nama_pejantan, rumpun_komoditas } = doc.data();
                list.push({
                    nama_pejantan,
                    kode_hewan,
                    jenis_komoditas,
                    klasifikasi,
                    rumpun_komoditas
                });
            });

            setKatalogPejantan(list);

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
                            <Text style={modal.judul}>Detail Pejantan</Text>
                            <View style={{padding:24}}>
                                <View style={{height: 24, width: 24}}></View>
                            </View>
                        </View>
                        <ScrollView style={{backgroundColor:'#F7F7F7'}}>
                            <View style={detail.container}>
                                <Text style={detail.judul_instansi}>Profil Hewan</Text>
                                <Image style={detail.photo} source={require('../../component/assets/images/fabian-1.jpg')} />
                                <Image style={detail.photo2} source={require('../../component/assets/images/fabian.jpg')} />
                                <Text style={detail.judul_instansi2}>Nama Hewan</Text>
                                <Text style={detail.namakodehewan}>{namapejantanid}</Text>
                                <View style={{height: 16}}></View>
                                <Text style={detail.judul_instansi2}>Kode Hewan / Eartag</Text>
                                <Text style={detail.namakodehewan}>{kodehewanid}</Text>
                                <View style={{height: 16}}></View>
                                <Text style={detail.judul_instansi2}>Jenis Komoditas</Text>
                                <Text style={detail.namakodehewan}>{jkid}</Text>
                                <View style={{height: 16}}></View>
                                <Text style={detail.judul_instansi2}>Rumpun Komoditas</Text>
                                <Text style={detail.namakodehewan}>{rumpunid}</Text>
                                <View style={{height: 16}}></View>
                                <Text style={detail.judul_instansi2}>Klasifikasi</Text>
                                <Text style={detail.namakodehewan}>{klasifikasiid}</Text>
                            </View>
                            <TouchableOpacity 
                            style={detail.button}
                            onPress={ ()=>{ Linking.openURL('https://biblembang.ditjenpkh.pertanian.go.id/read/katalog/317/fabian-80638-limousin-sapi-potong')}}
                            >
                                <Text style={detail.buttontext}>Pesan Benih Pejantan</Text>
                            </TouchableOpacity>
                            <View style={{height: 48}}></View>
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
                style={{padding:24}}
                >
                    <ArrowBackWhite/>
                </TouchableOpacity>
                <Text style={style.header}>Katalog Pejantan</Text>
                <View 
                style={{paddingHorizontal:36}}
                >
                </View>
            </View>
            <SafeAreaView>
                <View style={{height: '95%'}}>
                            <FlatList
                            style={card.flatlist}
                            showsVerticalScrollIndicator={false}
                            data={katalogpejantan}
                            fadingEdgeLength={50}
                            renderItem={({item}) => (
                                <View style={card.container}>
                                    <TouchableOpacity
                                    activeOpacity={0.5}
                                    underlayColor="#fff"
                                    onPress={() => {
                                        setJkId(item.jenis_komoditas)
                                        setNamaPejantanId(item.nama_pejantan)
                                        setKlasifikasiId(item.klasifikasi)
                                        setRumpunId(item.rumpun_komoditas)
                                        setKodeHewanId(item.kode_hewan)
                                        setDetailModal(!detailmodal)
                                    }}
                                    >
                                    <View style={card.margin}>
                                        <View style={card.leftside}>
                                                <Image style={card.photo} source={require('../../component/assets/images/sapi.jpg')} />
                                            <View style={card.infokomoditas}>
                                               <View style={card.row}>
                                                    <Text style={card.namakomoditas}>{item.nama_pejantan}</Text>
                                                    <Text style={card.namakomoditas}> - </Text>
                                                    <Text style={card.namakomoditas}>{item.kode_hewan}</Text>
                                               </View>
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
                                    <View
                                    style={card.detail}
                                    >
                                    <SeeDetails/>
                                    <Text style={card.detailtext}>Info Detail</Text>
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
                        activeOpacity={1}
                        onPress={() => setModalVisible(!modalVisible)}
                        >
                            <View style={fab.icon}>
                                <IconFilter/>
                            </View>
                        </TouchableOpacity>
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
        bottom: "8%",
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
    photo2:{
        height: 80,
        width: 320,
        margin:16,
        backgroundColor:'#57B860',
        borderRadius:8
    }

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
        height:64,
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


const card = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        marginHorizontal: 16,
        top: 4,
        bottom: 4,
        marginTop: 8,
        marginBottom: 16,
        borderRadius: 8,
        height: 150,
        justifyContent:'center',
        borderColor: '#DDDDDD',
        borderWidth: 1,
        shadowColor:'grey',
        elevation: 5
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
        width: '80%',
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
        height: '100%'
    },
    row:{
        flexDirection:'row'
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
        color:'white',
        marginBottom:16,
        fontFamily: 'Mulish-Bold'
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
        width: 300
    },
    searchicon:{
        alignSelf:'center',
    }
    }
)


export default KatalogPejantan;