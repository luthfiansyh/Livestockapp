import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Modal,
} from "react-native";
import Icon from 'react-native-ico';
import KabKotPicker from '../../component/modalpicker/KabKotPicker';
import Dropdown from '../assets/icons/IconDropdown';

const PilihKabKot = (props) =>{

    const {navigation} = props;
    const[chooseData, setchooseData] = useState('- Pilih Kabupaten/Kota -');
    const[isModalVisible, setisModalVisible] = useState(false);
    const changeModalVisibility = (bool) => {
       setisModalVisible(bool)
    }

    const setData = (option) => {
        setchooseData(option)
    }

    return(
                <View style={modalstyle.container}>
                    <Text style={modalstyle.judul}>Kabupaten/Kota*</Text>
                    <TouchableOpacity
                    style={modalstyle.touchableopacity}
                    onPress= {() => changeModalVisibility(true)}
                    >
                        <View style={{flexDirection:'row', alignItems:'center', width:'100%', justifyContent:'space-between'}}>
                            <Text style={modalstyle.text}>{chooseData}</Text>
                            <Dropdown/>
                        </View>
                        <View style={modalstyle.line}></View>
                    </TouchableOpacity>
                    <Modal
                    transparent={true}
                    animationType='fade'
                    visible={isModalVisible}
                    nRequestClose={() => changeModalVisibility(false) }
                    >
                        <KabKotPicker
                        changeModalVisibility={changeModalVisibility}
                        setData={setData}
                        />
                    </Modal>
                </View>
    )
}

const modalstyle = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:20,
        paddingVertical: 16,
    },
    text:{
        marginVertical:20,
        fontSize: 16,
        color:'#000',
    },
    touchableopacity:{
        alignItems:'center',
        justifyContent: 'center',
        alignSelf:'stretch',
        paddingHorizontal: 8,
    },
    icon:{
        width:16,
        height:16,
    },
    judul:{
        fontSize:14,
    },
    line:{
    width: "100%",
    height: 1,
    backgroundColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'center',
    opacity: .5
  }

})

export default PilihKabKot;