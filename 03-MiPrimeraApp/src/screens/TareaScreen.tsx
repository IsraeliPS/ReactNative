import * as React from 'react';

import {StyleSheet, Text, View} from 'react-native';
export const TareaScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaAzul} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#28425B',
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    
  },
  title: {
    fontSize: 12,
  },
  cajaMorada: {
    width: 100,
    // width: '100%',
    // height: 200,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',

    alignSelf: 'flex-end',
  },
  cajaNaranja: {
    width: 100,
    // width: '100%',
    // height: '100%',
    height: 100,
    // height: '70%', Tarea 1
    backgroundColor: '#F0A23B',
    borderWidth: 10,
    borderColor: 'white',
    // top:60
    // left:100
    // alignSelf: 'center',
  },
  cajaAzul: {
    // width: '100%',
    width: 100,
    // height: 360,
    height: 100,
    backgroundColor: '#28C4D9',
    borderWidth: 10,
    borderColor: 'white',
    alignSelf: 'center',
  },
});
