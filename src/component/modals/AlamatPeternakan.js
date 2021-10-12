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
      maxLength={255}
    />
  );
}

const UselessTextInputMultiline = () => {
  const [value, onChangeText] = React.useState('');

  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
    <View style={modalstyle.container}>
        <Text style={modalstyle.judul}>Alamat Peternakan*</Text>
        <View style={{paddingTop:8}}>
            <View style={modalstyle.form}
            >
            <UselessTextInput
                style={modalstyle.text}
                underlineColorAndroid = "transparent"
                placeholderTextColor="grey"
                placeholder = "Contoh: Jl. Suka Makmur"
                onChangeText={text => onChangeText(text)}
                value={value}
            />
        </View>
    </View>
    <View style={modalstyle.line}></View>
    </View>
  );
}

const modalstyle = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:20,
        paddingVertical: 16,
    },
    text:{
        fontSize: 16,
        alignItems:'center',
        justifyContent: 'center',
        alignSelf:'stretch',
        paddingHorizontal: 8,
        textAlignVertical: 'top'

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

export default UselessTextInputMultiline;