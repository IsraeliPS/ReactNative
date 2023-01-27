import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BlackButton} from '../components/BlackButton';

import {PermissionsContext} from '../context/PermissionContext';

export const PermissionScreen = () => {
  const {askLocationPermission} = useContext(PermissionsContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Es necesario el uso del GPS para usar esta aplicación
      </Text>
      <BlackButton title="Permiso" onPress={askLocationPermission} />
    </View>
  );
};

//AIzaSyBACSeWmvdD8h84NaaPCeOkuv-fMsPO5Ac
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: 'black',
    textAlign: 'justify',
    width: 350,
    marginBottom: 20,
  },
});
