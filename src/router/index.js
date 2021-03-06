// import React from "react";
// import Icon from 'react-native-ico';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Svg, {Path, Circle} from "react-native-svg";


// import FirstSplash from "../pages/Splashscreen/FirstSplash";
// import SecondSplash from "../pages/Splashscreen/SecondSplash";
// import ThirdSplash from "../pages/Splashscreen/ThirdSplash";
// import FourthSplash from "../pages/Splashscreen/FourthSplash";
// import NavLogin from "../pages/Login";

// import NavHome from "../pages/Beranda";

// import HalamanPengaturan from "../pages/Pengaturan/HalamanPengaturan";

// import NavKalender from "../pages/Kalender";
// import HalamanKalender from "../pages/Kalender/HalamanKalender";

// import NavKomoditas from "../pages/Komoditas";
// import HalamanKomoditas from "../pages/Komoditas/HalamanKomoditas";
// import TambahKomoditas from "../pages/Komoditas/TambahKomoditas";
// import NavPengaturan from "../pages/Pengaturan";
// import DetailPengukuran from "../pages/Komoditas/DetailPengukuran";
// import TabViewExample from "../pages/Komoditas/TabView";
// import KalkulatorBobot from "../pages/Beranda/KalkulatorBobot";
// import KatalogPejantan from "../pages/Beranda/KatalogPejantan";
// import KontakKeswan from "../pages/Beranda/KontakKeswan";
// import DetailKomoditas from "../pages/Komoditas/DetailKomoditas";
// import FilterKontakKeswan from "../pages/Beranda/FilterKontakKeswan";
// import DetailKontakKeswan from "../pages/Beranda/DetailKontakKeswan";
// import FilterKatalogPejantan from "../pages/Beranda/FilterKatalogPejantan";
// import HalamanProfil from "../pages/Pengaturan/HalamanProfil";
// import DetailKatalogPejantan from "../pages/Beranda/DetailKatalogPejantan";





// const Stack = createNativeStackNavigator();

// const Router = () => {
//     return (
//         <Stack.Navigator  
//         screenOptions={{
//             headerShown: false
//         }}>
//             <Stack.Screen name="FirstSplash" component={FirstSplash}/>
//             <Stack.Screen name="SecondSplash" component={SecondSplash}/>
//             <Stack.Screen name="ThirdSplash" component={ThirdSplash}/>
//             <Stack.Screen name="FourthSplash" component={FourthSplash}/>
//             <Stack.Screen name="NavigationLogin" component={NavLogin}/>
//             <Stack.Screen name="HalamanBeranda" component={Home}/>
//             <Stack.Screen name="KalkulatorBobot" component={KalkulatorBobot}/>
//             <Stack.Screen name="KatalogPejantan" component={KatalogPejantan}/>
//             <Stack.Screen name="FilterKatalogPejantan" component={FilterKatalogPejantan}/>
//             <Stack.Screen name="DetailKatalogPejantan" component={DetailKatalogPejantan}/>
//             <Stack.Screen name="KontakKeswan" component={KontakKeswan}/>
//             <Stack.Screen name="FilterKontakKeswan" component={FilterKontakKeswan}/>
//             <Stack.Screen name="DetailKontakKeswan" component={DetailKontakKeswan}/>
//             <Stack.Screen name= "NavKalender" component={NavKalender}/>
//             <Stack.Screen name= "NavKomoditas" component={NavKomoditas}/>
//             <Stack.Screen name= "NavPengaturan" component={NavPengaturan}/>
//             <Stack.Screen name="TambahKomoditas" component={TambahKomoditas}/>
//             <Stack.Screen name="HalamanPengaturan" component={HalamanPengaturan}/>
//             <Stack.Screen name="DetailPengukuran" component={DetailPengukuran}/>
//             <Stack.Screen name="HalamanProfil" component={HalamanProfil}/>







//         </Stack.Navigator>
//     )
// }

// const Tab = createBottomTabNavigator();

// function Home() {
//   return (
//     <Tab.Navigator
//         screenOptions={{
//             headerShown: false,
//             tabBarActiveTintColor: '#57B860',
//             tabBarStyle: { position: 'absolute', height: 56, paddingBottom: 8},
//             tabBarInactiveTintColor:'#C4C4C4',
//         }}
//         >
//       <Tab.Screen
//         name="Beranda"
//         component={NavHome}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Svg width="20" height="20" viewBox="0 0 20 20">
//               <Path fill ={color} d="M18.3398 9.86327L10.2949 1.8242C10.237 1.76616 10.1682 1.72012 10.0925 1.6887C10.0167 1.65728 9.93551 1.64111 9.85352 1.64111C9.77152 1.64111 9.69032 1.65728 9.61458 1.6887C9.53884 1.72012 9.47003 1.76616 9.41211 1.8242L1.36719 9.86327C1.13281 10.0976 1 10.416 1 10.748C1 11.4375 1.56055 11.998 2.25 11.998H3.09766V17.7344C3.09766 18.0801 3.37695 18.3594 3.72266 18.3594H8.60352V13.9844H10.791V18.3594H15.9844C16.3301 18.3594 16.6094 18.0801 16.6094 17.7344V11.998H17.457C17.7891 11.998 18.1074 11.8672 18.3418 11.6308C18.8281 11.1426 18.8281 10.3515 18.3398 9.86327Z"
//             />
//             </Svg>
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Komoditas"
//         component={HalamanKomoditas}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Svg width="20" height="20" viewBox="0 0 20 20">
//               <Path  fill ={color} d="M6.55322 5.4692C6.83238 5.39836 7.11363 5.28503 7.31572 5.13586C7.84488 4.7467 8.15197 3.96378 7.47488 4.04961C7.2778 4.07461 7.13572 4.07961 7.01947 4.08378C6.73697 4.09336 6.61113 4.09795 6.23613 4.3742C6.09298 4.47879 5.96028 4.59698 5.83988 4.72711C5.25697 4.29378 4.48155 4.10003 3.1253 4.1667C3.07005 4.1667 3.01706 4.18864 2.97799 4.22771C2.93892 4.26678 2.91697 4.31978 2.91697 4.37503C2.91697 4.43028 2.93892 4.48327 2.97799 4.52234C3.01706 4.56141 3.07005 4.58336 3.1253 4.58336H3.84905C3.96822 4.66003 4.06988 4.7317 4.1603 4.80003L2.66697 6.6667H2.57863C2.4487 6.66667 2.32055 6.69702 2.20444 6.75534C2.08832 6.81366 1.98745 6.89832 1.90989 7.00257C1.83232 7.10681 1.78021 7.22775 1.75771 7.35572C1.73521 7.4837 1.74294 7.61516 1.7803 7.73961L1.9053 8.15628C1.95683 8.32794 2.06232 8.47841 2.20613 8.58537C2.34995 8.69232 2.52441 8.75007 2.70363 8.75003H4.10447C4.28056 8.75012 4.4521 8.80598 4.59447 8.90961L5.50697 9.57295C5.53447 9.59295 5.5628 9.61128 5.59155 9.62711C6.24447 11.3104 6.93322 12.6213 7.70405 13.2809L7.8478 15.0059C7.74482 15.0233 7.65213 15.0787 7.5881 15.1612C7.52407 15.2438 7.49336 15.3473 7.50206 15.4514C7.51076 15.5555 7.55823 15.6525 7.63507 15.7232C7.71191 15.794 7.81252 15.8333 7.91697 15.8334H9.16697V12.0834H13.2545C13.8711 12.6838 14.5628 13.1546 15.6253 13.3334L15.7645 15.0059C15.6615 15.0233 15.5688 15.0787 15.5048 15.1612C15.4407 15.2438 15.41 15.3473 15.4187 15.4514C15.4274 15.5555 15.4749 15.6525 15.5517 15.7232C15.6286 15.794 15.7292 15.8333 15.8336 15.8334H17.0836V8.33336C17.0856 7.76771 16.8995 7.21746 16.5545 6.7692C16.8149 6.8392 16.997 6.94128 17.1253 7.06503C17.3574 7.28794 17.5003 7.66336 17.5003 8.33336L17.6616 10.5917C17.5636 10.7438 17.5003 10.9821 17.5003 11.25C17.5003 11.7104 17.687 12.0834 17.917 12.0834C18.147 12.0834 18.3336 11.7104 18.3336 11.25C18.3336 10.9821 18.2703 10.7438 18.1724 10.5917L18.3336 8.33336C18.3336 7.5692 18.174 6.91669 17.7028 6.46378C17.2374 6.0167 16.5545 5.84836 15.7141 5.8342C15.6824 5.83336 14.8153 5.83336 14.792 5.83336V5.83628C14.7534 5.83436 14.7148 5.83339 14.6761 5.83336H8.54197C7.73613 5.83336 7.12738 5.71336 6.61697 5.55503L6.55322 5.4692Z"/>
//             </Svg>
//           ),
//         }}
//         />
//       {/* <Tab.Screen
//         name="Kalender"
//         component={HalamanKalender}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Svg width="20" height="20" viewBox="0 0 20 20">
//               <Path  fill ={color} d="M15.8337 3.33329H15.0003V2.49996C15.0003 1.99996 14.667 1.66663 14.167 1.66663C13.667 1.66663 13.3337 1.99996 13.3337 2.49996V3.33329H6.66699V2.49996C6.66699 1.99996 6.33366 1.66663 5.83366 1.66663C5.33366 1.66663 5.00033 1.99996 5.00033 2.49996V3.33329H4.16699C2.75033 3.33329 1.66699 4.41663 1.66699 5.83329V6.66663H18.3337V5.83329C18.3337 4.41663 17.2503 3.33329 15.8337 3.33329ZM1.66699 15.8333C1.66699 17.25 2.75033 18.3333 4.16699 18.3333H15.8337C17.2503 18.3333 18.3337 17.25 18.3337 15.8333V8.33329H1.66699V15.8333ZM14.167 9.99996C14.667 9.99996 15.0003 10.3333 15.0003 10.8333C15.0003 11.3333 14.667 11.6666 14.167 11.6666C13.667 11.6666 13.3337 11.3333 13.3337 10.8333C13.3337 10.3333 13.667 9.99996 14.167 9.99996ZM14.167 13.3333C14.667 13.3333 15.0003 13.6666 15.0003 14.1666C15.0003 14.6666 14.667 15 14.167 15C13.667 15 13.3337 14.6666 13.3337 14.1666C13.3337 13.6666 13.667 13.3333 14.167 13.3333ZM10.0003 9.99996C10.5003 9.99996 10.8337 10.3333 10.8337 10.8333C10.8337 11.3333 10.5003 11.6666 10.0003 11.6666C9.50033 11.6666 9.16699 11.3333 9.16699 10.8333C9.16699 10.3333 9.50033 9.99996 10.0003 9.99996ZM10.0003 13.3333C10.5003 13.3333 10.8337 13.6666 10.8337 14.1666C10.8337 14.6666 10.5003 15 10.0003 15C9.50033 15 9.16699 14.6666 9.16699 14.1666C9.16699 13.6666 9.50033 13.3333 10.0003 13.3333ZM5.83366 9.99996C6.33366 9.99996 6.66699 10.3333 6.66699 10.8333C6.66699 11.3333 6.33366 11.6666 5.83366 11.6666C5.33366 11.6666 5.00033 11.3333 5.00033 10.8333C5.00033 10.3333 5.33366 9.99996 5.83366 9.99996ZM5.83366 13.3333C6.33366 13.3333 6.66699 13.6666 6.66699 14.1666C6.66699 14.6666 6.33366 15 5.83366 15C5.33366 15 5.00033 14.6666 5.00033 14.1666C5.00033 13.6666 5.33366 13.3333 5.83366 13.3333Z"/>
//             </Svg>
//           ),
//         }}
//         /> */}
//       <Tab.Screen
//         name="Pengaturan"
//         component={NavPengaturan}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Svg width="20" height="20" viewBox="0 0 20 20">
//               <Path fill ={color} d="M10.0096 7.62891C9.42561 7.62891 8.87873 7.85547 8.46467 8.26953C8.05256 8.68359 7.82405 9.23047 7.82405 9.81445C7.82405 10.3984 8.05256 10.9453 8.46467 11.3594C8.87873 11.7715 9.42561 12 10.0096 12C10.5936 12 11.1405 11.7715 11.5545 11.3594C11.9666 10.9453 12.1951 10.3984 12.1951 9.81445C12.1951 9.23047 11.9666 8.68359 11.5545 8.26953C11.3523 8.06574 11.1116 7.90416 10.8463 7.79418C10.5811 7.68421 10.2967 7.62803 10.0096 7.62891ZM18.0623 12.2285L16.785 11.1367C16.8455 10.7656 16.8768 10.3867 16.8768 10.0098C16.8768 9.63281 16.8455 9.25195 16.785 8.88281L18.0623 7.79102C18.1588 7.70841 18.2279 7.59839 18.2603 7.47558C18.2928 7.35278 18.2871 7.223 18.244 7.10352L18.2264 7.05273C17.8749 6.06971 17.3481 5.15851 16.6717 4.36328L16.6365 4.32227C16.5544 4.22569 16.4449 4.15626 16.3226 4.12314C16.2002 4.09002 16.0706 4.09475 15.951 4.13672L14.3651 4.70117C13.7791 4.2207 13.1268 3.8418 12.4197 3.57812L12.1131 1.91992C12.09 1.795 12.0294 1.68008 11.9394 1.59043C11.8494 1.50077 11.7342 1.44062 11.6092 1.41797L11.5565 1.4082C10.5408 1.22461 9.47053 1.22461 8.4549 1.4082L8.40217 1.41797C8.27716 1.44062 8.16201 1.50077 8.072 1.59043C7.98199 1.68008 7.9214 1.795 7.89826 1.91992L7.58967 3.58594C6.88933 3.85171 6.23693 4.2297 5.65803 4.70508L4.06037 4.13672C3.94077 4.09442 3.81114 4.08951 3.68868 4.12266C3.56623 4.1558 3.45676 4.22542 3.37483 4.32227L3.33967 4.36328C2.66446 5.15936 2.13786 6.07033 1.78498 7.05273L1.7674 7.10352C1.67951 7.34766 1.75178 7.62109 1.94905 7.79102L3.24201 8.89453C3.18147 9.26172 3.15217 9.63672 3.15217 10.0078C3.15217 10.3828 3.18147 10.7578 3.24201 11.1211L1.95295 12.2246C1.85646 12.3072 1.7874 12.4172 1.75495 12.54C1.72251 12.6628 1.72821 12.7926 1.77131 12.9121L1.78889 12.9629C2.1424 13.9453 2.66389 14.8535 3.34358 15.6523L3.37873 15.6934C3.46087 15.7899 3.57034 15.8594 3.69272 15.8925C3.8151 15.9256 3.94464 15.9209 4.06428 15.8789L5.66194 15.3105C6.24397 15.7891 6.8924 16.168 7.59358 16.4297L7.90217 18.0957C7.92531 18.2206 7.9859 18.3355 8.07591 18.4252C8.16591 18.5149 8.28107 18.575 8.40608 18.5977L8.45881 18.6074C9.48443 18.792 10.5348 18.792 11.5604 18.6074L11.6131 18.5977C11.7381 18.575 11.8533 18.5149 11.9433 18.4252C12.0333 18.3355 12.0939 18.2206 12.117 18.0957L12.4237 16.4375C13.1307 16.1719 13.783 15.7949 14.369 15.3145L15.9549 15.8789C16.0745 15.9212 16.2041 15.9261 16.3266 15.893C16.449 15.8598 16.5585 15.7902 16.6405 15.6934L16.6756 15.6523C17.3553 14.8496 17.8768 13.9453 18.2303 12.9629L18.2479 12.9121C18.3319 12.6699 18.2596 12.3984 18.0623 12.2285ZM10.0096 13.248C8.11311 13.248 6.576 11.7109 6.576 9.81445C6.576 7.91797 8.11311 6.38086 10.0096 6.38086C11.9061 6.38086 13.4432 7.91797 13.4432 9.81445C13.4432 11.7109 11.9061 13.248 10.0096 13.248Z"
//             />
//             </Svg>
//           ),
//         }}
//         />
//     </Tab.Navigator>
//   );
// }

// export default Router;