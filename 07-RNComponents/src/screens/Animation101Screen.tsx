/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';
import {HeaderTitle} from '../component/HeaderTitle';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {useAnimation} from '../hooks/useAnimation';

export const Animation101Screen = () => {
  const {opacity, position, startMovingPosition, fadeIn, fadeOut} =
    useAnimation();

  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <HeaderTitle title="Animated X" />
      <Animated.View
        style={{
          ...styles.purpleBox,
          marginBottom: 20,
          backgroundColor: colors.primary,
          opacity,
          transform: [
            {
              translateY: position,
            },
          ],
        }}
      />

      <View style={styles.separator} />
      <Button
        title="FadeIn"
        onPress={() => {
          startMovingPosition(-150);
          fadeIn();
        }}
        color={colors.primary}
      />
      <View style={styles.separator} />
      <Button
        title="FadeOut"
        onPress={() => fadeOut()}
        color={colors.primary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  principalContainer: {},
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  purpleBox: {
    width: 150,
    height: 150,
  },
  title: {},
  separator: {
    marginTop: 10,
  },
});
