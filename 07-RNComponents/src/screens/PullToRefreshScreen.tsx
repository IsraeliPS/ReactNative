/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState} from 'react';
import {RefreshControl, ScrollView, View} from 'react-native';
import {HeaderTitle} from '../component/HeaderTitle';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const PullToRefreshScreen = () => {
  const {top} = useSafeAreaInsets();

  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const {
    theme: {colors, dark},
  } = useContext(ThemeContext);

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      console.log('Terminamos');
      setRefreshing(false);
      setData('Hola Mundo');
    }, 3000);
  };

  return (
    <ScrollView
      style={{
        marginTop: refreshing ? top : 0, //solo funciona en ios
      }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          progressBackgroundColor={colors.primary}
          colors={[colors.background]}
          style={{backgroundColor: '#5856D6'}} // Solofunciona en ios
          tintColor={dark ? 'white' : 'black'}
          title="Refreshing"
          titleColor="blue"
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to Refresh" />
        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};
