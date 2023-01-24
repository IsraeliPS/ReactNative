/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Alert, Button, View} from 'react-native';
import prompt from 'react-native-prompt-android';

import {HeaderTitle} from '../component/HeaderTitle';

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert('Título', 'Este es el cuerpo de la alerta', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  const showPrompt = () => {
    // // funcion solo utilizable en ios
    // Alert.prompt(
    //   '¿Está seguro?',
    //   'Está acción no se puede revertir',
    //   (valor: string) => console.log('info: ', valor),
    //   // tipo de texto normal password
    //   'plain-text',
    //   // texto mostrado en la caja tipo placeholder
    //   'Hola Mundo',
    //   // tipo de teclado que se mostrara
    //   'number-pad',
    // );

    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder',
      },
    );
  };

  return (
    <View>
      <HeaderTitle title="Alerts" />
      <Button title="Mostrar Alerta" onPress={showAlert} />

      <View style={{height: 10}} />
      <Button title="Mostrar Prompt" onPress={showPrompt} />
    </View>
  );
};
