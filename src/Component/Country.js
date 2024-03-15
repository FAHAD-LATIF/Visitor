
import React, { useState } from 'react';
import { FlatList, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale, scale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native'; // Import necessary navigation hook
import { array } from '../Utilies/Db';



const Country = () => {
  const navigation = useNavigation(); // Initialize navigation
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => {
      setSelectedItem(item);
      setModalVisible(true);
    }}>
      <View>
        <Text style={styles.imgtxt}>{item.text}</Text>
        <Image source={item.img} style={styles.img} />
      </View>
    </TouchableOpacity>
  );

  const navigateToUseModal = () => {

    setModalVisible(false);
    navigation.navigate('UseModal', { selectedItem });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={array}
        renderItem={renderItem}
        horizontal={true}
        contentContainerStyle={{ flexGrow: 1 }}
        style={{ backgroundColor: 'transparent' }} 
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
       
          <View style={styles.modalView}>
          <Text style={styles.txt}>Popular Places</Text>
            {selectedItem && (
              <View style={styles.modalContent}>
                <View>
                  <Image source={selectedItem.img} style={styles.modalImage} />
                </View>
                <View style={{ alignItems: 'center' }}>
                  <Image source={selectedItem.img} style={styles.modalImg} />
                  <Text style={styles.modalText}>{selectedItem.des}</Text>
                </View>
              </View>
            )}
            <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={navigateToUseModal} // Call navigateToUseModal when button is pressed
            >
              <Text style={styles.textStyle}>Read More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default Country;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txt:{
    fontSize: 25,
    fontFamily: 'Poppins-Regular',
    fontWeight:'bold',
    textAlign:'right',
    paddingBottom:moderateScale(10),
    color:'black'
  },
  img: {
    width: scale(110),
    height: scale(110),
    margin: moderateScale(12),
    borderRadius: moderateScale(17),
    borderWidth: 1,
    borderColor: 'white',
    position: 'relative'
  },

  imgtxt: {
    color: "white",
    position: 'absolute',
    top: scale(84),
    left: scale(20),
    zIndex: 1,
    fontSize: scale(17),
    fontFamily: 'Poppins-Italic'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    width: '100%',
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2 // Adjusted height
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  openButton: {
    backgroundColor: "#2196F3",
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
  },
  textStyle: {
    color: "white",
   
    textAlign: "center",
    width: scale(290),
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
  },
  modalText: {
    flex: 1,
  
    width: scale(160),
    borderRadius:16,
    padding:10,
    marginLeft: 8,
    fontFamily: 'Poppins-Regular',
    color: '#000000',
    fontSize: 14,
    height: 100,
    marginTop: 10,
    backgroundColor:"#f6f5f4"

  },
  modalImage: {
    width: 150,
    height: 250,
    borderRadius: 15
  },
  modalImg: {
    width: scale(155),
    height: scale(80),
    borderRadius: 15,
    marginTop: moderateScale(6)

  },
});
