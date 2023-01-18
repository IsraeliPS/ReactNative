import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Cast} from '../interfaces/creditsInterface';
import {MovieFull} from '../interfaces/movieInterface';
import currencyFormatter from 'currency-formatter';
import {CastItem} from './CastItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      {/* Detalles */}
      <View style={styles.container}>
        <View style={styles.row}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text>{movieFull.vote_average}</Text>
          <Text style={styles.generes}>
            - {movieFull.genres.map(g => g.name).join(', ')}
          </Text>
        </View>

        {/* Historia */}
        <Text style={styles.history}>Historia</Text>
        <Text style={styles.textHistory}>{movieFull.overview}</Text>

        {/* Presupuesto */}
        <Text style={styles.history}>Presupuesto</Text>
        <Text style={styles.money}>
          {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
        </Text>

        {/* Casting */}
        <View style={styles.castingContainer}>
          <Text style={styles.castingTitle}>Actores</Text>
          <FlatList
            data={cast}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <CastItem actor={item} />}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.castingCarousel}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
  },
  generes: {
    marginLeft: 5,
  },
  history: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold',
  },
  textHistory: {
    fontSize: 16,
    textAlign: 'justify',
  },
  money: {
    fontSize: 18,
  },
  castingContainer: {
    marginTop: 10,
    marginBottom: 100,
  },
  castingTitle: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold',
    // marginHorizontal: 0,
  },
  castingCarousel: {
    marginTop: 10,
    height: 70,
  },
});
