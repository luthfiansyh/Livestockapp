import React, { Component, useContext, useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Icon from 'react-native-ico';
import BgHome from './assets/illustrations/BgHome';
import { LoginContext } from '../utils/LoginProvider';
import { firebase } from '@react-native-firebase/firestore';
import { FlatList } from 'react-native-gesture-handler';


const Head = () => {
  
  const { user } = useContext(LoginContext);

  const [username, setUsername] = React.useState('');
  const [loading, setLoading] = React.useState(true);
  // const uid = firebase.auth().currentUser.uid;



  useEffect(() => {
    const UserNameRef = firebase.firestore().collection('User')
        return UserNameRef.onSnapshot( querySnapshot => {
            const list = [];
            querySnapshot.forEach(doc => {
                const { namapengguna, email, password } = doc.data();
                list.push({
                    id: doc.id,
                    namapengguna,
                    email,
                    password,

                });
            });

            setUsername(list);

            if(loading){
                setLoading(false);
            }
    });
    },[]);


  return(
    <View style={{flex:1, backgroundColor: '#cfebfd', flexDirection: 'column', justifyContent: 'space-between', height: "40%", paddingTop: 54}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        </View>
        <BgHome/>
      <View style={{paddingBottom: 12, paddingLeft: 12, backgroundColor:"#57B860"}}>
        {/* <Text style={{fontSize: 28, color: 'white', fontFamily:'Mulish-Bold'}}>Halo,</Text> */}
        {/* <Text style={{fontSize: 28, color: 'white', fontFamily:'Mulish-Bold'}}>{user?.uid},</Text> */}
          {/* <FlatList
          data={username}
          keyExtractor={(item) => item.id}
          removeClippedSubviews={true}
          renderItem={({item}) => 
          <Text style={{fontSize: 24, color: 'white', fontFamily: 'Mulish-Regular'}}>
            {item.namapengguna}
          </Text>
          }
          /> */}
      </View>
    </View>
  )
}

export default Head;