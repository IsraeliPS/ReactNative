import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {RootStackParams} from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

// interface RouteParams {
//   id: number;
//   nombre: string;
// }

export const PersonaScreen = ({route, navigation}: Props) => {
  // const params = route.params as RouteParams;
  const params = route.params;
  const {changeUsername} = useContext(AuthContext);

  useEffect(() => {
    changeUsername(params.nombre);
  }, []);

  useEffect(() => {
    navigation.setOptions({title: params.nombre});
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {},
});
