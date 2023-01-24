import React, {useState} from 'react';
import {Alert, Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import {HeaderTitle} from '../component/HeaderTitle';
import {styles} from '../theme/appTheme';

export const ModalScreenExampleDocumentation = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal" />

      <View style={stylesModal.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={stylesModal.centeredView}>
            <View style={stylesModal.modalView}>
              <Text style={stylesModal.modalText}>Hello World!</Text>
              <Pressable
                style={[stylesModal.button, stylesModal.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={stylesModal.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[stylesModal.button, stylesModal.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={stylesModal.textStyle}>Show Modal</Text>
        </Pressable>
      </View>
    </View>
  );
};

const stylesModal = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    height: 40,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
