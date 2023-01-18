import * as React from 'react';

import {StyleSheet, Text, View} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.cajaMorada}>Caja 1</Text>
      <Text style={styles.cajaNaranja}>Caja 2</Text>
      <Text style={styles.cajaVerde}>Caja 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width:400,
    // height:600,
    backgroundColor: '#28C4D9',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {},
  cajaMorada: {
    backgroundColor: '#5856D6',
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
  cajaNaranja: {
    backgroundColor: '#F0A23B',
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    alignSelf: 'flex-start',
  },
  cajaVerde: {
    backgroundColor: 'green',
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    alignSelf: 'flex-end',
  },
});
