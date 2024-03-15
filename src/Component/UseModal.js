import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity } from 'react-native';
import { moderateScale, scale } from 'react-native-size-matters';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';


const UseModal = ({ route }) => {
    const navigation = useNavigation();
  if (!route || !route.params || !route.params.selectedItem) {
    // Handle the case when route or route.params is undefined
    return null; 
  }

  const { selectedItem } = route.params;

  return (
    <View style={styles.container}>
<View style={styles.icon}>
<TouchableOpacity onPress={() => navigation.goBack()}>


<View style={styles.bg}>
<FontAwesome6 name="arrow-left-long" size={25} color={'white'}  />
</View>
</TouchableOpacity>
<View  style={styles.bg}>
<Fontisto name="heart-alt" size={25} color={'white'}  />

</View>

</View>
    <StatusBar hidden={true}/>
      <View>
      
      <Image source={selectedItem.img} style={styles.image} />
      
      <View  style={styles.main}>
     <View style={styles.data}>
     
     <View><Text style={styles.div}>{selectedItem.text}</Text></View>
     <View><Text style={styles.div}>{selectedItem.titel}</Text></View>
     </View>
      <Text style={styles.description}>{selectedItem.des}</Text>
      </View>
      </View>

      <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }} >
              <Text style={styles.textStyle}>Add Calander</Text>
            </TouchableOpacity>
    </View>
  );
}

export default UseModal;

const styles = StyleSheet.create({
  container: {
   flex:1,
   position:'relative',
  
  },
  data:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  bg:{
  backgroundColor:'#8e8e9e',
  padding:moderateScale(8),
  borderRadius:12
  },
  icon:{
  flexDirection:'row',    
  justifyContent:'space-between',
  margin:moderateScale(30),
  width:"85%",
position:'absolute',
zIndex:1

  },
  main:{
padding:moderateScale(15),


  },
  image: {
    width: "100%",
    height: "70%",

  },
  div:{
  fontSize:20,
  fontFamily:'Poppins-Bold',
  color:"black"
  },
  description: {
  
    fontSize: 16,
    fontFamily:'Poppins-Bold',
  color:"#322c2b",
  fontSize:18,
  },
  openButton: {
    backgroundColor: "#2196F3",
    borderRadius: 20,
    padding: 10,
    bottom:30,
    width: "93%",
    alignItems:'center',
    alignSelf:'center'
   
  },
  textStyle: {
    color: "white",
    fontFamily: 'Poppins-Regular',
    textAlign: "center",
    width: "90%",
    fontSize: 20,
    
   
   
  },
});
