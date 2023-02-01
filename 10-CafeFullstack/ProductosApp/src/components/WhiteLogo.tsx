import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

export const WhiteLogo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/react-logo-white.png')}
        style={styles.whiteImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  whiteImage: {
    width: 110,
    height: 100,
  },
});
