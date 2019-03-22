
import React,{ Component } from "react";

import { StyleSheet,View,Text } from "react-native";

export default class SettingsScreen extends Component {

static navigationOptions={header:null}
render() {       
        return(
            <View style={styles.container}>       
                <Text style={styles.writeUp}>
                    Settings
                </Text>
            </View>
        )
    }
 }

const styles=StyleSheet.create({
     container:{
            flex:1,
          //  paddingVertical:30,
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