import React from 'react';
import{
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    ScrollView,
} from  'react-native';

const OPTIONS = ['Penggemukan', 'Perah', 'Potong']
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


const KlasifikasiPicker = (props) => {

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
            <View style={[styles.modal, {width: WIDTH -36, height: HEIGHT -900}]}>
                <ScrollView>
                    {option}
                </ScrollView>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
    marginTop:"65%",
       flex:1,
       alignItems: 'center',
       justifyContent: 'center',
       paddingHorizontal: 8
    },
    modal:{
        backgroundColor:'white',
        borderWidth: 1,
        borderColor: '#ddd',
    }
})

export default KlasifikasiPicker;