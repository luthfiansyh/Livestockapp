import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Icon from "react-native-ico";
import { RadioButton } from 'react-native-paper';

const JenisKelamin = (props) => {
    
    const {navigation} = props;
    const [checked, setChecked] = React.useState('first');
    return(
        <View>
            <Text style={page.texttitle}>Jenis Kelamin*</Text>
            <View style={page.radio}>
            <View style={page.align}>
                <RadioButton
                value="first"
                status={ checked === 'first' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('first')}
                color="#57B860"
                />
                <Text>Jantan</Text>
            </View>
            <View style={page.align2}>
                <RadioButton
                value="second"
                status={ checked === 'second' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('second')}
                color="#57B860"
                />
                <Text>Betina</Text>          
            </View>
            </View>
        </View>
    )
}

const page = StyleSheet.create({
  align:{
    flexDirection:'row',
    alignItems:'center'
  },
  align2:{
    flexDirection:'row',
    alignItems:'center',
    marginLeft:'16%'
  },
  radio:{
    flexDirection:'row',
    justifyContent:'flex-start',
    marginHorizontal:24,
    marginTop: 16
  },
  texttitle:{
        marginTop: 16,
        fontSize: 14,
        fontWeight: '600',
        marginBottom:"4%",
        marginLeft:20
    }
}
)

export default JenisKelamin;