import React, {Component} from "react";
import { StyleSheet, View } from "react-native";
import {Input} from "react-native-elements";
import Icon from "react-native-vector-icons";

class Inputs extends Component{
    state = {isfocused: false};

    onFocusChange = () => {
        this.setState({isfocused: true})
    }
    render(){
        return(
            <View style={[styles.InputContainer, { borderColor: this.state.isfocused ? "#0779ef" : "#eee"}]}>
                <Inputs
                    placeholder={this.props.name}
                    onFocus={this.onFocusChange}
                    inputContainerStyle={styles.InputContainer}
                    inputStyle={styles.InputText}
                    secureTextEntry={this.props.pass}
                    leftIcon={
                        <Icon 
                            name={this.props.Icon}
                            size={22}
                            color={this.state.isfocused ? "#0779e4" : "grey"}
                            />
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width:"90%",
        height: 50,
        borderRadius: 100,
        marginVertical: 10,
        borderWidth: 3.5
    },
    InputContainer:{
        borderBottomWidth: 0
    },
    InputText:{
        color:"#0779e4",
        fontWeight:"bold",
        marginLeft:5
    }

})


export default Inputs;


