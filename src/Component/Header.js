import { StyleSheet, Text, View ,SafeAreaView,StatusBar,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import { moderateScale, scale } from 'react-native-size-matters'
import { primary_color } from '../Utilies/Colors'


const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor={'black'}/>
      <View style={styles.main}>
        <View style={{flexDirection:'row'}}>
         <View >
         <Image source={require('../Assets/Images/Index/Person.jpg')}style={styles.img}/>
         </View>
         <View ><Text style={styles.Text}>Olive Castillo </Text></View>
         
        </View>
        <TouchableOpacity>
        <Text style={styles.btn}>Bonus$786</Text>
        </TouchableOpacity>
      </View>


      <View>
   
      </View>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primary_color ,
        
      },
      main:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginVertical:moderateScale(14)
      },
      img:{
        width:scale(40),
        height:scale(40),
        borderRadius:moderateScale(50),
        
      },
      Text:{
        color:"white",
        fontFamily:'Poppins-Regular',
        fontSize:moderateScale(18),
        margin:moderateScale(8),
      
    
      },
      btn:{
        color:"white",
        fontFamily:'Poppins-Regular',
        fontSize:moderateScale(15),
        backgroundColor:"blue",
        padding:moderateScale(6),
        fontFamily:'Poppins-Regular',
        borderRadius:moderateScale(12)
      }
})