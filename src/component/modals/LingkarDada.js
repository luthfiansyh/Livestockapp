import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput
} from 'react-native';

const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={3}
    />
  );
}

const LingkarDada = () => {
  const [value, onChangeText] = React.useState('');

  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
    <View style={modalstyle.container}>
      <View style={{flex:1}}>
        <Text style={modalstyle.judul}>Lingkar Dada*</Text>
        <View style={{paddingTop:12}}>
            <View style={modalstyle.form}>
              <UselessTextInput
              style={modalstyle.text1}
              underlineColorAndroid = "transparent"
              placeholderTextColor="grey"
              placeholder = "1"
              keyboardType = "numeric"
              onChangeText={text => onChangeText(text)}
              value={value}
              />
            </View>
        </View>
      <View style={modalstyle.line}></View>
      </View>
      <View style={{marginLeft:16}}>
        <Text style={modalstyle.judul}></Text>
        <View style={{paddingTop:12}}>
            <View>
              <Text style={modalstyle.text2}>cm</Text>
            </View>
        </View>
      <View style={modalstyle.line}></View>
      </View>
    </View>
  );
}

const modalstyle = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:20,
        paddingVertical: 16,
        flexDirection:'row',
    },
    text1:{
        fontSize: 14,
        alignItems:'center',
        justifyContent: 'center',
        alignSelf:'stretch',
        paddingHorizontal: 8,
        textAlignVertical: 'top',
    },
    text2:{
        fontSize: 14,
        alignItems:'center',
        justifyContent: 'center',
        alignSelf:'stretch',
        paddingHorizontal: 8,
        textAlignVertical: 'top',
        paddingTop: 14,
        paddingBottom: 16

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
  },

})

export default LingkarDada;