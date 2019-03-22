

// import React,{ Component } from "react";

// import {StyleSheet,View,Text,DrawerLayoutAndroid,Image} from 'react-native';
// var navigationView = (
//     <View style={{flex: 1, backgroundColor: '#fff'}}>
//     <Image style={{borderRadius:120,alignSelf:'center',justifyContent:'center',width:80,height:80}}    
//     source={require('../assets/images/sample.jpg')}/>
//       <Text style={{margin: 10,
//          fontSize: 25,
//           textAlign: 'left',
//           color:'black',
//           fontWeight:'bold',
//           borderBottomColor:'black',
//           borderBottomWidth:3}}>Drawer Items</Text>
//     </View>);

// export default class Dashboard extends Component {

//     static navigationOptions={header:null}
//     render() {
//         return (
//             <DrawerLayoutAndroid
//               drawerWidth={300}
//               drawerPosition={DrawerLayoutAndroid.positions.Left}
//               renderNavigationView={() => navigationView}>
//               <View style={{flex: 1, alignItems: 'center',backgroundColor:/*'#206bad'*/'white'}}>
//                 <Text style={{margin: 10, fontSize: 25, textAlign: 'right',justifyContent:'center',fontWeight:'bold'}}>Haii</Text>
//                 <Text style={{margin: 10,
//                  fontSize: 25,
//                   textAlign: 'right',
//                   justifyContent:'center',
//                   fontWeight:'bold',
//                    borderBottomColor:'black',
//                     borderBottomWidth:3}}>Welcome to Fundoo Dashboard </Text>
//               </View>
             
//             </DrawerLayoutAndroid>
//           );
//                 }
//             }

/***************************************************************************************** */        



import React,{ Component } from "react";

import { StyleSheet,View,Text } from "react-native";

import HomeScreen from "../screens/HomeScreen"
import DrawerNavigator from "../navigation/DrawerNavigator"

export default class Dashboard extends Component {

static navigationOptions={header:null}
render() {       
        return(
            <View style={styles.container}>       
                
                <DrawerNavigator/>
                
            </View>
        )
    }
 }

const styles=StyleSheet.create({
     container:{
            flex:1,
           // paddingVertical:30,
            alignItems:'center',
            justifyContent:'center',
           // backgroundColor:  "#206bad",
           backgroundColor:'#fff'
     },

     writeUp:{
         color:"black",
         fontSize:30,
         fontWeight:'bold'
     }

})