import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { wp, hp } from '../constant/helper';

import Profile from '../screen/Profile'
import Dashboard from '../screen/Dashboard';
import EditPage from '../screen/components/EditPage';
import Inboxs from '../screen/Inbox'
import DirectMessage from '../screen/components/DirectMessage';
import AddImage from '../screen/components/AddImage';

import Icon from 'react-native-vector-icons/Entypo'
import FontIcon from 'react-native-vector-icons/Fontisto'
import AntIcon from 'react-native-vector-icons/AntDesign'
import FotAwsmIcon from 'react-native-vector-icons/FontAwesome'

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();


function MyProfile() {
    return (
      <Stack.Navigator screenOptions={{
           headerShown: false
      }}>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Edit Profile" component={EditPage}/>
      </Stack.Navigator>
    );
  }


  function MyNotification() {
    return (
      <Stack.Navigator screenOptions={{
           headerShown: false
      }}>
        <Stack.Screen name="Inboxs" component={Inboxs} />
        <Stack.Screen name="DirectMessage" component={DirectMessage}/>
      </Stack.Navigator>
    );
  }  


function MyTabs() {
    return (
        <Tab.Navigator barStyle={{ backgroundColor: 'black' }} >

            <Tab.Screen name="Home" component={Dashboard} options={{
        
                tabBarIcon: (() =>
                    <FontIcon name="home" size={24} color="white" />
                )
            }} />
            <Tab.Screen name="Discover" component={Dashboard} options={{
              
                tabBarIcon: (() =>
                    <FontIcon name="search" size={24} color="white" />
                )
            }} />

            <Tab.Screen name="Add" component={AddImage} options={{
                tabBarLabel: '',
                tabBarIcon: (() =>
                    <View style={styles.home}>
                        <Icon name="plus" size={24} />
                    </View>
                )
            }} />
            <Tab.Screen name="Inbox" component={MyNotification} options={{
                tabBarIcon: (() =>
                    <FotAwsmIcon name="envelope-o" size={24} color="white" />
                )
            }} />
            <Tab.Screen name="Me" component={MyProfile} options={{
                tabBarIcon: (() =>
                    <AntIcon name="user" size={24} color="white" />
                )
            }} />

        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    home: {
        height: hp('4%'),
        width: wp('15%'),
        backgroundColor: 'white',
        borderRadius: 10,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderLeftColor: 'lightgreen',
        borderRightColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    }
})