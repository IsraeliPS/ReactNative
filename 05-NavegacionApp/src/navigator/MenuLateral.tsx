/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  Image,
  useWindowDimensions,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

import {styles} from '../theme/appTheme';

import {SettingsScreen} from '../screens/SettingsScreen';
import {Tabs} from './Tabs';

import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator
      drawerContent={props => <MenuInterno {...props} />}
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://w7.pngwing.com/pngs/587/284/png-transparent-computer-icons-user-profile-north-vancouver-avatar-silhouette-user-angle-logo-grass.png',
          }}
          style={styles.avatar}
        />
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={{...styles.menuBoton, flexDirection: 'row'}}
          onPress={() => {
            navigation.navigate('Tabs');
          }}>
          <Text>
            <Icon name="compass-outline" size={25} color="black" />;
          </Text>
          <Text style={styles.menuTexto}>Navegacion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.menuBoton, flexDirection: 'row'}}
          onPress={() => {
            navigation.navigate('SettingsScreen');
          }}>
          <Text>
            <Icon name="settings-outline" size={25} color="black" />;
          </Text>
          <Text style={styles.menuTexto}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
