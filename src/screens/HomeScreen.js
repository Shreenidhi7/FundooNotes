import React,{ Component } from "react";

import { StyleSheet,View,Text } from "react-native";

import MenuButton from '../components/MenuButton'

export default class HomeScreen extends Component {

static navigationOptions={header:null}
render() {       
        return(
            <View style={styles.container}>
                  <MenuButton/> 
                <Text style={styles.writeUp}>
                    HOME
                </Text>
            </View>
        )
    }
 }

const styles=StyleSheet.create({
     container:{
            flex:1,
            //paddingVertical:30,
            alignItems:'center',
            justifyContent:'center',
            //backgroundColor:  "#206bad",
            backgroundColor:'#fff'
     },

     writeUp:{
         color:"black",
         fontSize:30,
         fontWeight:'bold'
     }

})