/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {FadeInImage} from '../component/FadeInImage';
import {HeaderTitle} from '../component/HeaderTitle';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);

  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }
    setNumbers([...numbers, ...newArray]);
  };

  const renderItem = (item: number) => {
    return (
      <FadeInImage
        uri={`https://picsum.photos/id/${item}/1024/1024`}
        style={styles.renderImage}
      />
    );
    // <Image
    //   source={{uri: `https://picsum.photos/id/${item}/500/400`}}
    //   style={styles.renderImage}
    // />
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={() => (
          <View style={{marginHorizontal: 20}}>
            <HeaderTitle title="Infinite Scroll" />
          </View>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator size={25} color={colors.primary} />
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  renderImage: {
    width: '100%',
    height: 400,
  },
  activityIndicatorContainer: {
    height: 150,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
