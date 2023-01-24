/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {HeaderTitle} from '../component/HeaderTitle';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {styles} from '../theme/appTheme';

export const ChangeThemeScreen = () => {
  const {
    setDarkTheme,
    setLightTheme,
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Change Theme" />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            ...stylesTheme.buttonTouchable,
            backgroundColor: colors.primary,
          }}
          onPress={setLightTheme}>
          <Text style={stylesTheme.title}>Ligth</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            ...stylesTheme.buttonTouchable,
            backgroundColor: colors.primary,
          }}
          onPress={setDarkTheme}>
          <Text style={stylesTheme.title}>Dark</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const stylesTheme = StyleSheet.create({
  buttonTouchable: {
    width: 150,
    height: 50,
    borderRadius: 20,
    backgroundColor: '#5856D6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 22,
  },
});
