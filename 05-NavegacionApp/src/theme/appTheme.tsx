import {StyleSheet} from 'react-native';

export const colores = {
  black: '#000',
  white: '#fff',
  gray: '#000',
  blue: '#000',
  primary: '#5856D6',
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  botonGrande: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  botonGrandeTexto: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 20,
    marginRight: 10,
  },

  avatarContainer: {
    // flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 50,
    // alignItems: 'center',
  },
  menuBoton: {marginVertical: 10},

  menuTexto: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
