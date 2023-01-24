import React, {useContext, useState} from 'react';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';
import {HeaderTitle} from '../component/HeaderTitle';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {styles} from '../theme/appTheme';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal Screen" />
      <Modal animationType="fade" visible={isVisible} transparent={true}>
        {/* Backgroun Negro */}
        <View style={{...stylesModal.styleView}}>
          {/* Contenido del Modal */}
          <View
            style={{
              ...stylesModal.modalBody,
              backgroundColor: colors.notification,
            }}>
            <HeaderTitle title="Modal" />
            <Text
              style={{
                ...stylesModal.textBody,
                color: colors.text,
              }}>
              Cuerpo del Modal
            </Text>
            <Button title="Cerrar" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>
      <Button title="Abrir modal" onPress={() => setIsVisible(true)} />
    </View>
  );
};

const stylesModal = StyleSheet.create({
  styleView: {
    flex: 1,
    // backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBody: {
    // backgroundColor: 'white',
    borderRadius: 10,
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    elevation: 10,
  },
  textBody: {
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 20,
  },
});
