import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { moderateScale, scale } from 'react-native-size-matters';

const Flag = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const array = [
    {
      img: require('../Assets/Images/Index/canada.png'),
      text: 'Canad'
    },
    {
      img: require('../Assets/Images/Index/united-states-of-america.png'),
      text: 'U S A'
    },
    {
      img: require('../Assets/Images/Index/france.png'),
      text: 'France'
    },
    {
      img: require('../Assets/Images/Index/japan.png'),
      text: 'Japan'
    },
    {
      img: require('../Assets/Images/Index/pakistan.png'),
      text: 'Pakistan'
    },
    {
      img: require('../Assets/Images/Index/austria.png'),
      text: 'Austria'
    },
  ];

  return (
    <FlatList
      data={array}
      renderItem={({ item }) =>
        <TouchableOpacity
          style={[
            styles.Flaglist,
            selectedItem === item.text ? styles.selectedItem : null
          ]}
          onPress={() => setSelectedItem(item.text)}
        >
          <View><Image source={item.img} style={styles.img} /></View>
          <View style={styles.flagview}>
            <Text style={[styles.flagtext, selectedItem === item.text ? styles.selectedText : null]}>{item.text}</Text>
          </View>
        </TouchableOpacity>
      }
      horizontal={true}
    />
  )
}

export default Flag

const styles = StyleSheet.create({
  img: {
    width: scale(30),
    height: scale(30),
  },
  Flaglist: {
    flexDirection: 'row',
    backgroundColor: '#1c2935',
    borderColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
    margin: moderateScale(13),
    width: scale(100),
    height: scale(40),
    marginRight: (10),
    padding: scale(8),
    justifyContent: 'space-around'
  },
  flagtext: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    justifyContent: 'center'
  },
  selectedText: {
    color: 'black',
  },
  selectedItem: {
    backgroundColor: 'white',
  }
})
