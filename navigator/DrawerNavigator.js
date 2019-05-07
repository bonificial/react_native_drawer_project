import React from 'react';
import {Platform,Dimensions} from 'react-native';
import {createDrawerNavigator,createAppContainer} from 'react-navigation';

import HomeScreen from '../screens/homescreen';
import LinksScreen from '../screens/linksscreen';
import SettingsScreen from '../screens/settingsscreen';
import MenuDrawer from "../components/MenuDrawer";
const WIDTH = Dimensions.get('window').width;
const DrawerConfig = {
    drawerWidth:WIDTH * 0.83,
    contentComponent:({navigation})=>{
        return(<MenuDrawer navigation={navigation}/>)
    }
};
const DrawerNavigator = createDrawerNavigator(
{
    Home:{
        screen: HomeScreen
    },
    Links:{
        screen: LinksScreen
    },
    Settings:{
        screen: SettingsScreen
    },
},
DrawerConfig
);
export default createAppContainer(DrawerNavigator);