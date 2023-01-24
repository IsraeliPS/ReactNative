/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {
  Animated,
  View,
  ActivityIndicator,
  StyleProp,
  ImageStyle,
} from 'react-native';

import {useAnimation} from '../hooks/useAnimation';
import {useState} from 'react';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri, style}: Props) => {
  const {opacity, fadeIn} = useAnimation();

  const [isLoading, setIsLoading] = useState(true);

  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {isLoading && (
        <ActivityIndicator
          color={colors.primary}
          size={30}
          style={{position: 'absolute'}}
        />
      )}
      <Animated.Image
        source={{uri}}
        style={{...(style as any), opacity}}
        onLoadEnd={finishLoading}
      />
    </View>
  );
};
