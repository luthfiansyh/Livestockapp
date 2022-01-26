import React, { Component, useEffect, useContext} from 'react';
import {
    View,
    Text, 
    StyleSheet, 
    Modal, 
    ScrollView, 
    TouchableOpacity, 
    FlatList,
    TextInput,
    ToastAndroid
} from 'react-native';
import Icon from 'react-native-ico';
import RightChevron from '../../component/assets/icons/RightChevron';
import CardKomoditas from '../../component/CardKomoditas.js';
import FloatingButton from '../../component/FloatingPlusButton.js';
import Plusbutton from '../../component/assets/icons/Plus';
import Katalog from '../../component/assets/icons/Katalog';
import IconSapi from '../../component/assets/icons/Sapi';
import SeeDetails from '../../component/assets/icons/IconSeeDetails';
import IconTrash from '../../component/assets/icons/IconTrash';
import HeaderPage from '../../component/HeaderPage.js';
import { LoginContext } from '../../utils/LoginProvider';
import IconEdit from '../../component/assets/icons/IconEdit';
import { firebase } from '@react-native-firebase/firestore';
import firestore from '@react-native-firebase/firestore';
import ArrowBackWhite from '../../component/assets/icons/ArrowBackWhite';
import {Picker} from '@react-native-picker/picker';

const HalamanKomoditas = (props) => {

    const {navigation} = props;
        
        const { user } = useContext(LoginContext);
        const uid = firebase.auth().currentUser.uid;
        const [komoditas, setKomoditas] = React.useState('');
        const [loading, setLoading] = React.useState(true);
        const [modalhapus1, setModalHapus1] = React.useState(false);
        const [modalhapus2, setModalHapus2] = React.useState(false);
        const [editmodal, setModalEdit] = React.useState(false);
        const [komoditasid, setKomoditasId] = React.useState('');
        const [rumpunid, setRumpunId] = React.useState('');
        const [itemid, setItemId] = React.useState('');
        const [showcontainer, setShowContainer] = React.useState('');
        const [klasifikasi, setKlasifikasi] = React.useState();
        const [alamat, setAlamat] = React.useState('');
        const [luaslahan, setLuasLahan] = React.useState('');
        const [luaslahandigunakan, setLuasLahanDigunakan] = React.useState('');
        const [alamatonfocus, setAlamatOnFocus] = React.useState(false);
        const [luaslahanonfocus, setLuasLahanOnFocus] = React.useState(false);
        const [lahandigunakanonfocus, setLahanDigunakanOnFocus] = React.useState(false);
        const [modalVisible, setModalVisible] = React.useState(false);
        const [shouldShowSimpan3, setShouldShowSimpan3] = React.useState(false);
        const [gobackModal, setGoBackModal] = React.useState(false);
        


    useEffect(() => {
        const KomoditasRef = firebase.firestore().collection('Komoditas').where("userID", "==", uid);
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
            }
            );

            setKomoditas(list);
            if(loading){
                setLoading(false);
            }
    });
    },[]);

    const removeData = () =>{
        firestore()
        .collection('Komoditas')
        .doc(itemid)
        .delete()
        .then(() => {
            console.log('Komoditas berhasil dihapus!');
        });
    }

    const setData = () =>{
        if(!luaslahandigunakan || !luaslahan || !alamat || !klasifikasi){
            ToastAndroid.show("Data belum terisi semua", 3000);
            return;
        }
        if(!alamat){
            ToastAndroid.show("Alamat tidak boleh kosong", 3000);
            return;
        }
        if(!klasifikasi){
            ToastAndroid.show("Klasifikasi tidak boleh kosong", 3000);
            return;
        }
        if(!luaslahan){
            ToastAndroid.show("Luas Lahan belum terisi", 3000);
            return;
        }if(!luaslahandigunakan){
            ToastAndroid.show("Luas Lahan Digunakan belum terisi", 3000);
            return;
        }
        else{
            firestore()
            .collection('Komoditas')
            .doc(itemid)
            .set({
                jenis_komoditas: komoditasid,
                rumpun_komoditas: rumpunid,
                klasifikasi: klasifikasi,
                alamat: alamat,
                luaslahan: luaslahan,
                luaslahandigunakan: luaslahandigunakan,
                userID: user.uid,
            })
            console.log('Komoditas berhasil di edit!');
            setModalVisible(!modalVisible)

        }
    }


        return(
                <View  style={{backgroundColor:'white', flex: 1}}>
                    <Modal
                    animationType="fade"
                    transparent={true}
                    visible={gobackModal}
                
                    >
                        <View style={[[modal.centeredView, gobackModal ? {backgroundColor: 'rgba(0,0,0,0.5)'} : '']]}>
                            <View style={modal.gobackview}>
                                <Text style={modal.title}>Keluar Halaman?</Text>
                                <Text style={modal.information}>Semua data yang Kamu masukkan tidak akan tersimpan.</Text>
                                <View style={{flexDirection: 'row', justifyContent:'space-between', width: '70%', alignSelf: "center"}}>
                                    <TouchableOpacity 
                                    style={modal.secondarybutton}
                                    onPress={() => {
                                        setGoBackModal(!gobackModal);
                                    }}
                                    >
                                        <Text style={modal.canceltext}>Batal</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity 
                                    style={modal.primarybutton}
                                    onPress={() => {

                                        setModalEdit(!editmodal)
                                        setGoBackModal(!gobackModal);
                                    }}
                                    >
                                        <Text style={modal.textbutton}>Ya</Text>
                                    </TouchableOpacity>
                                </View>  
                            </View>
                        </View>

                    </Modal>
                    <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    
                    >
                        <View style={[[modal2.centeredView, modalVisible ? {backgroundColor: 'rgba(0,0,0,0.5)'} : '']]}>
                            <View style={modal2.modalview}>
                                <Text style={modal2.title}>Komoditas di edit</Text>
                                <Text style={modal2.information}>Berhasil mengedit komoditas!</Text>
                                <TouchableOpacity 
                                style={modal2.primarybutton}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                    setModalEdit(!modaledit);
                                }}
                                >
                                    <Text style={modal2.textbutton}>Oke</Text>
                                </TouchableOpacity>
                                
                            </View>
                        </View>
                    </Modal>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={editmodal}
                    >
                        <View style={[modaledit.centeredView, editmodal ? {backgroundColor: 'rgba(0,0,0,0.5)'} : '']}>
                            <View style={modaledit.modalView}>
                            {/* header */}
                            <View style={modaledit.container}>
                                    <TouchableOpacity 
                                    onPress={() => {setGoBackModal(!gobackModal)}} 
                                    style={{padding:24}}>
                                        <ArrowBackWhite/>
                                    </TouchableOpacity>
                                    <Text style={modaledit.judul}>Edit Komoditas</Text>
                                    <View style={{padding:24}}>
                                        <View style={{height: 24, width: 24}}></View>
                                    </View>
                                </View>
                                <ScrollView>
                                    <View style={{marginTop: 24}}></View>
                                    <Text style={style.judul}>Jenis Komoditas</Text>
                                    <View style={form.inputdisable}>
                                        <Text style={form.textinput2}>{komoditasid}</Text>
                                    </View>
                                    <Text style={style.judul}>Rumpun</Text>
                                    <View style={form.inputdisable}>
                                        <Text style={form.textinput2}>{rumpunid}</Text>
                                    </View>
                                    <Text style={style.judul}>Klasifikasi</Text>
                                     <View style={style.form}>
                                        <Picker
                                        selectedValue={klasifikasi}
                                        onValueChange={(itemValue, itemIndex) => {
                                            setKlasifikasi(itemValue);
                                            setShouldShowSimpan3(!shouldShowSimpan3);
                                        }}
                                        mode="dialog"
                                        style={style.picker}>
                                            <Picker.Item enabled={false} label="- Pilih Klasifikasi -" value="Pilih_K" color="#565656" />
                                            <Picker.Item label="Penggemukan" value="Penggemukan" color="#DDDDD"/>
                                            <Picker.Item label="Potong" value="Potong" color="#DDDDD"/>
                                            <Picker.Item label="Perah" value="Perah" color="#DDDDD"/>
                                        </Picker>
                                    </View>
                                    <Text style={style.judul}>Alamat</Text>
                                    <View style={[form.input, alamatonfocus && form.inputOnFocus]}>
                                    <TextInput
                                    style={form.textinput}
                                    underlineColorAndroid = "transparent"
                                    placeholderTextColor="grey"
                                    placeholder = {"Alamat Peternakan"}
                                    multiline={false}
                                    value={alamat}
                                    onChangeText={(itemValue, itemIndex) => setAlamat(itemValue)}
                                    maxLength={255}
                                    autoCapitalize = "words"
                                    onFocus={() => {setAlamatOnFocus (true)}}
                                    onBlur={() => {setAlamatOnFocus (false)}}
                                    />
                                </View>
                                <Text style={style.judul}>Luas Lahan (m2) </Text>
                                <View  style={[form.input, luaslahanonfocus && form.inputOnFocus]}>
                                    <TextInput
                                    style={form.textinput}
                                    keyboardType='numeric'
                                    underlineColorAndroid = "transparent"
                                    placeholderTextColor="grey"
                                    placeholder = "1"
                                    onChangeText={(itemValue, itemIndex) => setLuasLahan(itemValue)}
                                    value={luaslahan}
                                    onFocus={() => {setLuasLahanOnFocus (true)}}
                                    onBlur={() => {setLuasLahanOnFocus (false)}}
                                />
                            </View>
                            <Text style={style.judul}>Luas Lahan Digunakan (m2) </Text>
                            <View style={[form.input, lahandigunakanonfocus && form.inputOnFocus]}>
                                <TextInput
                                style={form.textinput}
                                keyboardType='numeric'
                                underlineColorAndroid = "transparent"
                                placeholderTextColor="grey"
                                placeholder = "1"
                                onChangeText={(itemValue, itemIndex) => setLuasLahanDigunakan(itemValue)}
                                value={luaslahandigunakan}
                                onFocus={() => {setLahanDigunakanOnFocus (true)}}
                                onBlur={() => {setLahanDigunakanOnFocus (false)}}
                                />
                            </View>

                                <View style={style.buttonbackground}>
                                    <TouchableOpacity style={style.button} onPress={() => setData()}>
                                        <Text style={style.buttontext} >Simpan</Text>
                                    </TouchableOpacity>
                                </View>
                            
                            </ScrollView>
                            </View>
                        </View>
                    </Modal>
                    <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalhapus1}
                    >
                        <View style={[[modal.centeredView, modalhapus1 ? {backgroundColor: 'rgba(0,0,0,0.5)'} : '']]}>
                            <View style={modal.modalview}>
                                <Text style={modal.title}>Komoditas Dihapus</Text>
                                <Text style={modal.information}>Berhasil menghapus komoditas!</Text>
                                <TouchableOpacity 
                                style={modal.primarybutton}
                                onPress={() => {
                                    setModalHapus1(!modalhapus1);
                                }}
                                >
                                    <Text style={modal.textbutton}>Oke</Text>
                                </TouchableOpacity>
                                
                            </View>
                        </View>

                    </Modal>
                    <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalhapus2}
                
                    >
                        <View style={[[modal.centeredView, modalhapus2 ? {backgroundColor: 'rgba(0,0,0,0.5)'} : '']]}>
                            <View style={modal.gobackview}>
                                <Text style={modal.title}>Hapus Komoditas ?</Text>
                                <Text style={modal.information}>Komoditas yang dihapus akan hilang secara permanen.</Text>
                                <View style={{flexDirection: 'row', justifyContent:'space-between', width: '70%', alignSelf: "center"}}>
                                    <TouchableOpacity 
                                    style={modal.secondarybutton}
                                    onPress={() => {
                                        setModalHapus2(!modalhapus2);
                                    }}
                                    >
                                        <Text style={modal.canceltext}>Batal</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity 
                                    style={modal.primarybutton}
                                    onPress={() => {
                                        setModalHapus1(!modalhapus1);
                                        setModalHapus2(!modalhapus2);
                                        removeData();
                                    }}
                                    >
                                        <Text style={modal.textbutton}>Hapus</Text>
                                    </TouchableOpacity>
                                </View>  
                            </View>
                        </View>

                    </Modal>
                    <HeaderPage/>
                        <View style={{height:'100%'}}>
                            <View style={{height: '83.5%', backgroundColor:'transparent'}}>
                                    <FlatList
                                    style={card.flatlist}
                                    showsVerticalScrollIndicator={false}
                                    data={komoditas}
                                    fadingEdgeLength={50}
                                    renderItem={({item}) => (
                                        <View style={card.container}>
                                            <View style={card.absolute}></View>
                                            <TouchableOpacity
                                            activeOpacity={1}
                                            underlayColor="#fff"
                                            // onPress={() => {navigation.navigate('DetailKomoditas')}}
                                            >
                                            <View style={{flexDirection:'row', alignSelf:'flex-end', right: 8}}>
                                            <TouchableOpacity
                                            style={{marginHorizontal: 4}}
                                            onPress={() => {
                                                setItemId(item.id);
                                                setKomoditasId(item.jenis_komoditas);
                                                setRumpunId(item.rumpun_komoditas);
                                                setModalEdit(!editmodal);
                                            }}
                                            >
                                                <IconEdit/>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                            style={{marginHorizontal: 4}}
                                            onPress={() => {
                                                setItemId(item.id);
                                                setModalHapus2(!modalhapus2);
                                            }}
                                            >
                                                <IconTrash/>
                                            </TouchableOpacity>
                                            </View>
                                            <Text style={card.namakomoditas}>Komoditas {item.jenis_komoditas}</Text>
                                            <View style={card.margin}>
                                                <View style={card.leftside}>
                                                    <View style={card.infokomoditas}>
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
                                                        <View style ={card.infokomoditas2}>
                                                            <View>
                                                                <Text style={card.subjudul}>Lahan</Text>
                                                                <Text style={card.infodetail}>{item.luaslahan}</Text>
                                                            </View>
                                                            <View>
                                                                <Text style={card.subjudul}>Lahan Digunakan</Text>
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
                                            <Text style={card.detailtext}>Lihat Komoditas</Text>
                                            </View>
                                            </TouchableOpacity>
                                        </View>
                                    )}
                                    keyExtractor={(item) => item.id}
                                    removeClippedSubviews={true}
                                    />
                            </View>
                        </View>
                    <TouchableOpacity
                    style={fab.touchable }
                    activeOpacity={0.7}
                    onPress={() => {navigation.navigate('TambahKomoditas')}}
                    >
                        <View style={fab.icon}>
                            <Plusbutton/>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        }

const modal2 = StyleSheet.create({
    centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
    },
    modalview:{
        flexDirection:'column',
        justifyContent:'space-around',
        backgroundColor: "#fff",
        borderRadius: 16,
        width:'85%',
        height:200,
        shadowColor: 'rgba(0,0,0,0.25)',
        elevation: 5,
        borderColor:'#C4C4C4',
        borderWidth: 1
    },
    primarybutton:{
        backgroundColor:'#57B860',
        alignItems:'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
        width: 84,
        alignSelf:'center',
    },
    gobackview:{
        flexDirection:'column',
        justifyContent:'space-around',
        backgroundColor: "#fff",
        borderRadius: 16,
        width:'80%',
        height: 200,
        shadowColor: 'rgba(0,0,0,0.25)',
        elevation: 5,
        borderColor:'#C4C4C4',
        borderWidth: 1
    },
    headerview:{
      flexDirection:'row',
      flex: 1, 
      justifyContent:'space-between', 
      alignItems:'center',
      margin: 16
    },
    secondarybutton:{
        alignItems:'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
        backgroundColor:'#F9F9F9',
        borderColor: '#B5B5B5',
        borderRadius: 8,
        borderWidth: 1,
        width: 84
    },
    textbutton:{
        fontFamily:'Mulish-Bold',
        color: '#fff',
        fontSize: 16,
    },
    canceltext:{
        fontFamily:'Mulish-Bold',
        color: '#656565',
        fontSize: 16
    },
    title:{
        fontFamily:'Mulish-Bold',
        fontSize: 20,
        color:'#3d3d3d',
        textAlign:'center',
        width: '100%',
        paddingHorizontal: 16,
        textAlign:'center',
        marginTop: 8
    },
    information:{
        fontFamily:'Mulish-Regular',
        fontSize: 14,
        color:'#656565',
        textAlign:'center',
        paddingHorizontal: 16

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
    },
    buttonbackground:{
        marginTop: "12%",
        flexDirection:"row",
        alignItems: 'flex-end',
        justifyContent:'space-between',
        marginHorizontal:16,
        marginBottom: 24,
    },
    form:{
        margin: 16,
        borderRadius: 8,
        borderColor: 'grey',
        borderWidth: 1,
        backgroundColor:'white',
        paddingHorizontal: 8,
        // paddingVertical: 2

    },
    picker:{
        fontFamily:'Mulish-Regular',
    },
    textinput:{
        fontFamily:'Mulish-Regular',
        fontSize: 14,
        paddingHorizontal: 16,
    },
    judul:{
        fontSize:16,
        paddingHorizontal: 16,
        fontFamily:'Mulish-Bold',
        color:'#565656',
        marginTop: 16
    },
    button:{
        justifyContent: 'space-around',
        width: "100%",
        height: 48,
        backgroundColor:'#57B860',
        borderRadius: 8
    },
    buttondisable:{
        justifyContent: 'space-around',
        width: "100%",
        height: 48,
        backgroundColor:'#C4C4C4',
        borderRadius: 8
    },
    buttontext:{
        color:'white',
        textAlign:'center',
        fontSize: 16,
        fontFamily:'Mulish-Bold'
    },
    align:{
    flexDirection:'row',
    alignItems:'center'
    }

})

const modaledit = StyleSheet.create({
    centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  modalView: {
    backgroundColor: "#F9F9F9",
    width:'100%',
    height: '100%',
  },
  container:{
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
})

const form = StyleSheet.create({
  input: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#565656',
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'#fff',
    margin: 16
      },
    inputdisable: {
    borderRadius: 8,
    flexDirection:'row',
    justifyContent:'space-between',
    margin: 16
      },
  inputOnFocus: {
    borderWidth: 1,
    borderColor: '#57B860',
    backgroundColor:'#fff'
  },
  textinput:{
    paddingHorizontal: 16,
    fontFamily:'Mulish-Medium',
    color:'#565656',
    fontSize: 14,
    width: '100%'

  },
  textinput2:{
    paddingHorizontal: 24,
    paddingVertical: 16,
    fontFamily:'Mulish-Bold',
    color:'#656565',
    fontSize: 16,
    width: '100%',
    backgroundColor: '#E8E8E8',
    borderRadius: 8

  },
  texttitle:{
    marginTop: 16,
    fontSize: 16,
    marginBottom:"4%",
    fontFamily: 'Mulish-Bold',
    color:'#565656'
  },
})

const modal = StyleSheet.create({
    centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
    },
    modalview:{
        flexDirection:'column',
        justifyContent:'space-around',
        backgroundColor: "#fff",
        borderRadius: 16,
        width:'85%',
        height:200,
        shadowColor: 'rgba(0,0,0,0.25)',
        elevation: 5,
        borderColor:'#C4C4C4',
        borderWidth: 1
    },
    primarybutton:{
        backgroundColor:'#57B860',
        alignItems:'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
        width: 84,
        alignSelf:'center',
    },
    gobackview:{
        flexDirection:'column',
        justifyContent:'space-around',
        backgroundColor: "#fff",
        borderRadius: 16,
        width:'80%',
        height: 200,
        shadowColor: 'rgba(0,0,0,0.25)',
        elevation: 5,
        borderColor:'#C4C4C4',
        borderWidth: 1
    },
    headerview:{
      flexDirection:'row',
      flex: 1, 
      justifyContent:'space-between', 
      alignItems:'center',
      margin: 16
    },
    secondarybutton:{
        alignItems:'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
        backgroundColor:'#F9F9F9',
        borderColor: '#B5B5B5',
        borderRadius: 8,
        borderWidth: 1,
        width: 84
    },
    textbutton:{
        fontFamily:'Mulish-Bold',
        color: '#fff',
        fontSize: 16,
    },
    canceltext:{
        fontFamily:'Mulish-Bold',
        color: '#656565',
        fontSize: 16
    },
    title:{
        fontFamily:'Mulish-Bold',
        fontSize: 20,
        color:'#3d3d3d',
        textAlign:'center',
        width: '100%',
        paddingHorizontal: 16,
        textAlign:'center',
        marginTop: 8
    },
    information:{
        fontFamily:'Mulish-Regular',
        fontSize: 14,
        color:'#656565',
        textAlign:'center',
        paddingHorizontal: 16

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
        height: 200,
        justifyContent:'center',
        borderColor: '#DDDDFF',
        borderWidth: 1,
        elevation: 2
    },
    margin:{
        marginHorizontal:16,
        marginVertical: 8,
        
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
        justifyContent:'space-between',
        width: '100%',
        // backgroundColor:'pink'
    },
    infokomoditas2:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginVertical: 4,
    },
    detail:{
        justifyContent:'flex-end',
        alignSelf:'flex-end',
        flexDirection:'row',
        alignItems:'center',
        marginTop: 8,
        marginRight: 16,
    },
    icon:{
        alignItems:'center',
        justifyContent:'center',
    },
    subjudul:{
        fontSize:12,
        width: 120,
        fontWeight:'normal',
        marginBottom: 2,
        color:'#959595',
        fontFamily:'Mulish-SemiBold',
    },
    infodetail:{
        fontSize:14,
        fontFamily:'Mulish-SemiBold',
        color:'#3c3c3c'
    },
    namakomoditas:{
        fontSize: 16,
        fontFamily:'Mulish-Bold',
        color:'#3c3d3d',
        marginHorizontal: 16,
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
        bottom: "10%",
        alignItems:'center',
        justifyContent:'center'
    },
    icon:{
    }
})



export default HalamanKomoditas;