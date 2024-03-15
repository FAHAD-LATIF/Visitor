import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Home from '../../Screens/Main/Home'
import Map from '../../Screens/Main/Map';
import Hearts from '../../Screens/Main/Hearts';
import Users from '../../Screens/Main/Users';
import UseModal from '../../Component/UseModal';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name='MyTabs' component={MyTabs} options={{headerShown:false}}/>
    <Stack.Screen name='UseModal' component={UseModal}options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}
 
   export function MyTabs ()  {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
    <Tab.Screen name='Home' component={Home}options={{
      tabBarActiveTintColor:'blue',
      tabBarInactiveTintColor:'black',
      tabBarShowLabel:false,
      tabBarIcon:({color,size})=>(
         <Fontisto name="home" size={size} color={color}  />
      )
  }} />
  <Tab.Screen name='Map' component={Map}options={{
    tabBarActiveTintColor:'blue',
    tabBarInactiveTintColor:'black',
    tabBarShowLabel:false,
    tabBarIcon:({color,size})=>(
      <Entypo name="map" size={size} color={color}  />
    )
}} />
<Tab.Screen name='Hearts' component={Hearts}options={{
  tabBarActiveTintColor:'blue',
  tabBarInactiveTintColor:'black',
  tabBarShowLabel:false,
  tabBarIcon:({color,size})=>(
    <Fontisto name="heart-alt" size={size} color={color}  />
  )
}} />
<Tab.Screen name='Users' component={Users}options={{
  tabBarActiveTintColor:'blue',
  tabBarInactiveTintColor:'black',
  tabBarShowLabel:false,
  tabBarIcon:({color,size})=>(
    <AntDesign name="user" size={size} color={color}  />
  )
}} />
 
    </Tab.Navigator>
    
  );
}



export default AppNavigator

const styles = StyleSheet.create({})