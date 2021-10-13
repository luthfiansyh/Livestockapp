import React from 'react';
import{
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    ScrollView,
} from  'react-native';
import UkuranPanjang from '../modals/UkuranPanjang';

const OPTIONS = ['m2', 'hektare']
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


const UkuranPanjangPicker = (props) => {

    const onPressItem = (option) => {
        props.changeModalVisibility(false);
        props.setData(option);
    }
    const option = OPTIONS.map((item, index) => {
        return(
            <TouchableOpacity
            style={{
                alignItems:'flex-start',
                }}
                key={index}
                onPress={() => onPressItem(item)}
                >
                
                <Text
                style={{
                    margin: 8,
                    fontSize: 16,
                    fontWeight: '500'
                }}
                >{item}</Text>
            </TouchableOpacity>
        )
    })

    return(
        <TouchableOpacity
            onPress={() => props.changeModalVisibility(false)}
            style={styles.container}
        >
            <View style={[styles.modal, {width: WIDTH -310, height: HEIGHT -600}]}>
                <ScrollView>
                    {option}
                </ScrollView>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
       flex:0.5,
       alignItems: 'center',
       justifyContent: 'center',
       alignSelf:'flex-end',
       marginRight:24,
       marginTop: "148%"
    },
    modal:{
        backgroundColor:'white',
        borderWidth: 1,
        borderColor: '#ddd',
    }
})

export default UkuranPanjangPicker;