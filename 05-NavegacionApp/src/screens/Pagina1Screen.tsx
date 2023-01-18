/* eslint-disable react-native/no-inline-styles */
import {DrawerScreenProps} from '@react-navigation/drawer';
import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> {
  id: number;
  nombre: string;
}

export const Pagina1Screen = ({navigation}: Props) => {
  // useEffect(() => {
  //   navigation.setOptions(
  //     {
  //       headerLeft: () => (
  //         <Button title="Menú" onPress={() => navigation.openDrawer()}></Button>
  //       ),
  //     },
  //     [],
  //   );
  // });

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>
      <Button
        title="Ir a página 2"
        onPress={() => {
          navigation.navigate('Pagina2Screen');
        }}
      />

      <Text style={styles.title}>Navegar con Argumentos</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Pedro',
            })
          }
          style={{...styles.botonGrande, backgroundColor: '#5856D6'}}>
          <Text>
            <Icon name="man-outline" size={40} color="white" />;
          </Text>
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              nombre: 'María',
            })
          }
          style={{...styles.botonGrande, backgroundColor: '#FF9427'}}>
          <Text>
            <Icon name="woman-outline" size={40} color="white" />;
          </Text>
          <Text style={styles.botonGrandeTexto}>María</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
