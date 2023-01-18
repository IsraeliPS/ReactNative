import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Cast} from '../interfaces/creditsInterface';

interface Props {
  actor: Cast;
}

export const CastItem = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={styles.castContainer}>
      {actor.profile_path && (
        <Image source={{uri}} style={styles.imageCharacters} />
      )}

      <View style={styles.castCard}>
        <Text style={styles.name}>{actor.name}</Text>
        <Text style={styles.character}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  castContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 50,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 9,
    marginRight: 15,
    paddingRight: 15,
    // paddingTop: 5,
  },
  castCard: {
    marginLeft: 10,
    paddingTop: 4,
  },
  imageCharacters: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  character: {
    fontSize: 16,
    opacity: 0.7,
  },
});
