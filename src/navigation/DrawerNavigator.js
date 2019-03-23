//import React,{ Component } from "react";
import React from 'react';
import { Platform,Dimensions } from "react-native";

import { createDrawerNavigator,createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen'
import LinkScreen from '../screens/LinkScreen'
import SettingsScreen from '../screens/SettingsScreen'
import MenuDrawer from '../screens/SettingsScreen'

const WIDTH=Dimensions.get('window').width;

const DrawerConfig={
    drawerWidth:WIDTH*0.83,
    contentComponent:({navigation})=>{
      return(<MenuDrawer navigation={navigation}/>)
    }
}


const DrawerNavigator=createDrawerNavigator( 
    {
    Home :{screen:HomeScreen},
    Links:{screen:LinkScreen},
    Settings:{screen:SettingsScreen}
    },
      DrawerConfig
    );

export default createAppContainer(DrawerNavigator);