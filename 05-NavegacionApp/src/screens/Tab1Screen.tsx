import React from 'react';
import {Text, View} from 'react-native';

import {TouchableIcon} from '../components/TouchableIcon';
import {styles} from '../theme/appTheme';

export const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <TouchableIcon iconName="airplane-outline" />;
        <TouchableIcon iconName="american-football-outline" />
        <TouchableIcon iconName="at-circle-outline" />;
        <TouchableIcon iconName="color-palette-outline" />;
        <TouchableIcon iconName="bus-outline" />;
        <TouchableIcon iconName="bug-outline" />;
        <TouchableIcon iconName="baseball-outline" />;
      </Text>
    </View>
  );
};
