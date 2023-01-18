import React from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';
import {useFade} from '../hooks/useFade';

export const FadeScreen = () => {
  const {fadeIn, fadeOut, opacity} = useFade();

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.row, {opacity}]} />
      <Button title="Fade In" onPress={fadeIn} />
      <Button title="Fade Out" onPress={fadeOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    backgroundColor: '#084F6A',
    width: 150,
    height: 150,
    borderColor: 'white',
    borderWidth: 10,
    marginBottom: 10,
  },
  buttonFadeOut: {
    marginTop: 50,
  },
});
