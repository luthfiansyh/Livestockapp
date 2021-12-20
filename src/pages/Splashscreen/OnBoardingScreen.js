import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Onboarding from 'react-native-onboarding-swiper';
import Illustration1 from "../../component/assets/illustrations/Illustration-1";
import Illustration2 from "../../component/assets/illustrations/Illustration2";
import Illustration3 from "../../component/assets/illustrations/Illustration3";

import SplashImg1 from "../../component/assets/illustrations/SplashImg-1";
import SplashImg2 from "../../component/assets/illustrations/SplashImg-2";
import SplashImg3 from "../../component/assets/illustrations/SplashImg-3";

const Skip = ({...props}) => (
    <TouchableOpacity
    style={style.secondarybutton}
    {...props}
    >
        <Text style={style.buttontext}>Lewati</Text>
    </TouchableOpacity>
)

const Next = ({...props}) => (
    <TouchableOpacity
    style={style.secondarybutton}
    {...props}
    >
        <Text style={style.buttontext}>Lanjut</Text>
    </TouchableOpacity>
)
const Done = ({...props}) => (
    <TouchableOpacity
    style={style.secondarybutton}
    {...props}
    >
        <Text style={style.buttontext}>Mengerti</Text>
    </TouchableOpacity>
)

const Dots = ({selected}) => {
    let backgroundColor;
    backgroundColor = selected ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.3)';

    return(
        <View
            style={{
                width: 6,
                height: 6,
                borderRadius: 6,
                marginHorizontal: 4,
                backgroundColor
            }}
        />
    )
}

const OnBoardingScreen = ({navigation}) => {
    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.navigate("SignIn")}
        onDone={() => navigation.navigate("SignIn")}
        pages={[
            {
                backgroundColor: '#58AAE2',
                image: <Illustration1/>,
                title: <Text style={style.title}>Digitalisasi Ekosistem</Text>,
                subtitle:  <Text style={style.paragraph}>Jadilah peternak modern! LivestockApp membantu Anda mewujudkan digitalisasi ekosistem peternakan sebagai upaya meningkatkan kualitas ternak Anda.</Text>
            },
            {
                backgroundColor: '#9558E2',
                image: <Illustration2/>,
                title: <Text style={style.title}>Memudahkan Pendataan</Text>,
                subtitle:  <Text style={style.paragraph}>LivestockApp memudahkan permasalahan yang Anda hadapi dalam proses pendataan dan perkembangan komoditas ternak.</Text>
            },
            {
                backgroundColor: '#57B860',
                image: <Illustration3/>,
                title: <Text style={style.title}>Fitur Pendukung</Text>,
                subtitle:  <Text style={style.paragraph}>Kalkulator Peternakan, Info Kontak Kesehatan Hewan dan Katalog Benih Pejantan lebih mudah didapatkan dengan fitur yang ada di Livestockapp.</Text>
            },
        ]}
        />
    )
}

const style = StyleSheet.create({
    secondarybutton:{
        marginHorizontal: 16,
  },
  buttontext:{
    color:'white',
    fontSize: 16,
    fontFamily:'Mulish-SemiBold'
  },
  paragraph:{
    color:'#fff',
    textAlign: 'justify',
    fontSize: 14,
    lineHeight: 24,
    height: '20%',
    paddingHorizontal: 24,
    fontFamily:'Mulish-SemiBold'
  },
  title:{
      color:'#fff',
      fontSize: 24,
      height:'10%',
      fontFamily:'Mulish-Bold'

  }
})

export default OnBoardingScreen;