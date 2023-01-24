import React from 'react';
import {FlatList, View} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../theme/appTheme';

import {FlatListMenuItem} from '../component/FlatListMenuItem';
import {menuItems} from '../data/menuItems';
import {HeaderTitle} from '../component/HeaderTitle';
import {ItemSeparator} from '../component/ItemSeparator';

export const HomeScreen = () => {
  return (
    <View style={[styles.globalMargin, styles.container]}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => <HeaderTitle title="Opciones de Menú" />}
        ItemSeparatorComponent={() => ItemSeparator()}
      />
    </View>
  );
};
