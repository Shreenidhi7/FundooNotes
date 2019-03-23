/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 {/*
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


*/}


/*************************************************************************************** */


//import 'babel-polyfill'
//     import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View,ScrollView,StatusBar} from 'react-native';

// import Register from './Fundoo/screens/registerForm';
// import Login from './Fundoo/screens/loginForm'
// import ForgotPassword from './Fundoo/screens/forgotPasswordForm'
// import Dashboard from './Fundoo/screens/dashboard';


// //import Routes from './Fundoo/screens/Routes'

// export default class App extends Component {
//   render() {
//    return (
//   <View style={styles.container}>
                          
//                          {/*</View>               <StatusBar  
//                                    backgroundColor=  /*"#206bad"       '#1c313a'
//                                       barStyle='light-content'>
//                                           </StatusBar>
//                          */}  
   
//       <ScrollView>
                  
//                 <Register/>
                  
//       </ScrollView> 
  
//   </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: "#206bad",  //"#07081c" , // "rgb(45, 54, 58)" ,     //  '#455a64',
//     paddingLeft:60,
//     paddingRight:60,
//   },
 
// });



/****************************App.js(original)************************************************/





import React,{ Component } from "react";

import { StyleSheet,View,Text } from "react-native";
//import Container from './src/navigation/AppNavigator';
//import { DrawerNavigator } from "react-navigation";

import DrawerNavigator from './src/navigation/DrawerNavigator'

export default class App extends Component {
  render() {
    return(
      
      <View style={styles.container}>
           {/* <Container/>   */}
          <DrawerNavigator/>
       </View>
    
      
  
   
    );
  }
}

const styles=StyleSheet.create({


  container:{
    flex:1,
   // alignItems:'center',
    //justifyContent:'center',
    //backgroundColor:'#206bad'
    backgroundColor:'#fff'
  },
    
})



/******************************App.js(With Draw/App Navigator)******************************************************** */




// import React,{ Component } from "react";

// import { StyleSheet,View,Text,SafeAreaView,ScrollView,Dimensions } from "react-native";
// import Container from './Fundoo/components/AppNavigator';
// //import DrawContainer from "./Fundoo/components/drawNavigator";

// import HomeScreen from './Fundoo/screens/HomeScreen'
// import SettingsScreen from './Fundoo/screens/SettingsScreen'

// import { createDrawerNavigator,DrawerItems } from 'react-navigation';

// const {width}=Dimensions.get('window')

// export default class App extends Component {
//   render() {
//     return(
//       <View>
//             <View style={styles.container}>
//               <AppDrawerNavigator/>
//             </View>

//       </View>
//     );
//   }
// }


// const CustomDrawercomponent=(props)=>(
//   <SafeAreaView style={{flex:1}}>
//       <View style={{height:150,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
//           <Image source={require('./images/sample.jpg')} style={{height:120,width:120,borderRadius:60}}/>
      
//       </View>
      
//       <ScrollView>
//        <DrawerItems {...props} />
//       </ScrollView>
  
  
//   </SafeAreaView>
// )






// //naavigator alli madodu idu//




// const AppDrawerNavigator=createDrawerNavigator({
//   HomeScreen:{screen:HomeScreen},  /*HomeScreen:HomeScreen*/
//   SettingsScreen:{screen:SettingsScreen}  /*SettingsScreen:SettingsScreen*/
// },{
//     contentComponent:CustomDrawercomponent,
//   drawerWidth: width, 
//   contentOptions:{
//       activeTintColor:'orange'
//   }
// })

// //const DrawContainer=createAppContainer(AppDrawerNavigator)
// //export default  DrawContainer

// const styles=StyleSheet.create({


//   container:{
//     flex:1,
//    // alignItems:'center',
//     //justifyContent:'center',
//     //backgroundColor:'#206bad'
//   },
    
// })

/****************************************************************************************** */