import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../Component/Header'
import { primary_color } from '../../Utilies/Colors'
import Country from '../../Component/Country'
import Flag from '../../Component/Flag'
import { scale } from 'react-native-size-matters'
import UseModal from '../../Component/UseModal'

const Home = () => {
  return (
     <View style={styles.container}>
     <View style={styles.container1}><Header/></View>
     <View style={styles.container2}><Country/></View>
     <View style={styles.container3}><Flag/></View>
     <UseModal/>
     </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary_color ,
  },
  container1: {
    flex: 0.6,
    backgroundColor: primary_color ,
  },
  container2: {
    flex: 1.1,
    backgroundColor: primary_color ,
  },
  container3: {
    flex: 3,
    backgroundColor: primary_color ,
  },
  
})