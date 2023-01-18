import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

export const Pagina2Screen = () => {
  const navigator = useNavigation();
  useEffect(() => {
    navigator.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: '',
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>
      <Button
        title="Ir a página 3"
        onPress={() => navigator.navigate('Pagina3Screen')}
      />
    </View>
  );
};
