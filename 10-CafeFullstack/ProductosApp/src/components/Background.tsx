import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Background = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Background</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: '#5856D6',
    top: -250,
    width: 1000,
    height: 1200,
    transform: [
      {
        rotate: '-70deg',
      },
    ],
  },
  title: {},
});
