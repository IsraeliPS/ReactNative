/* eslint-disable curly */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {Picker} from '@react-native-picker/picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import {StackScreenProps} from '@react-navigation/stack';
import {ProductsStackParams} from '../navigator/ProductsNavigator';
import {useCategories} from '../hooks/useCategories';
import {useForm} from '../hooks/useForm';
import {ProductsContext} from '../context/ProductsContext';

interface Props
  extends StackScreenProps<ProductsStackParams, 'ProductScreen'> {}

export const ProductScreen = ({navigation, route}: Props) => {
  const {id = '', name = ''} = route.params;

  const [tempUri, setTempUri] = useState<string>();

  const {categories} = useCategories();

  const {loadProductById, addProduct, updateProduct, uploadImage} =
    useContext(ProductsContext);

  const {_id, categoriaId, nombre, img, onChange, setFormValue} = useForm({
    _id: id,
    categoriaId: '',
    nombre: name,
    img: '',
  });

  useEffect(() => {
    navigation.setOptions({
      title: nombre ? nombre : 'Sin nombre de producto',
    });
  }, [nombre]);

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    if (id.length === 0) return;
    const product = await loadProductById(id);
    setFormValue({
      _id: id,
      categoriaId: product.categoria._id,
      img: product.img || '',
      nombre,
    });
  };

  const saveOrUpdate = async () => {
    if (id.length > 0) {
      updateProduct(categoriaId, nombre, id);
    } else {
      const tempCategoriaId = categoriaId || categories[0]._id;
      const newProduct = await addProduct(tempCategoriaId, nombre);
      onChange(newProduct._id, '_id');
    }
  };

  const takePhoto = () => {
    launchCamera(
      {
        mediaType: 'photo',
        quality: 0.5,
      },
      resp => {
        console.log('resp de camara', resp.assets![0].uri);
        if (resp.didCancel) return;
        if (!resp.assets![0].uri) return;

        setTempUri(resp.assets![0].uri);
        uploadImage(resp, _id);
      },
    );
  };

  const takePhotoFromGallery = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.5,
      },
      resp => {
        if (resp.didCancel) return;
        if (!resp.assets![0].uri) return;

        setTempUri(resp.assets![0].uri);
        uploadImage(resp, _id);
      },
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Nombre del Producto:</Text>
        <TextInput
          placeholder="Producto"
          placeholderTextColor="black"
          style={styles.textInput}
          value={nombre}
          onChangeText={value => onChange(value, 'nombre')}
        />

        {/* picker */}
        <Text style={styles.title}>Categoria:</Text>
        <Picker
          selectedValue={categoriaId}
          onValueChange={value => onChange(value, 'categoriaId')}>
          {categories.map((c: any) => (
            <Picker.Item
              style={styles.colorPicker}
              label={c.nombre}
              value={c._id}
              key={c._id}
            />
          ))}
        </Picker>

        <View style={styles.viewButtonCategories}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={saveOrUpdate}
            style={styles.buttonCategory}>
            <Text style={styles.title}>Guardar</Text>
          </TouchableOpacity>
        </View>

        {_id.length > 0 && (
          <View style={styles.viewContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={takePhoto}
              style={styles.buttonsGalery}>
              <Text style={styles.title}>Camara</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={takePhotoFromGallery}
              style={styles.buttonsGalery}>
              <Text style={styles.title}>Galeria</Text>
            </TouchableOpacity>
          </View>
        )}

        {img.length > 0 && !tempUri && (
          <Image
            source={{uri: img}}
            style={{
              marginTop: 20,
              width: '100%',
              height: 300,
            }}
          />
        )}

        {tempUri && (
          <Image
            source={{uri: tempUri}}
            style={{
              marginTop: 20,
              width: '100%',
              height: 300,
            }}
          />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 20,
  },

  title: {
    color: '#8C4A5C',
    fontSize: 18,
  },
  textInput: {
    color: 'black',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderColor: 'rgba(0,0,0,0.2)',
    height: 45,
    merginTop: 5,
    marginBottom: 15,
  },
  viewContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  viewButtonCategories: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    flex: 1,
  },
  buttonCategory: {
    backgroundColor: '#D9A036',
    borderRadius: 20,
    width: 130,
    height: 40,

    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsGalery: {
    backgroundColor: '#D9A036',
    marginVertical: 30,
    marginHorizontal: 20,
    borderRadius: 20,
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    marginTop: 20,
    width: '100%',
    height: 300,
  },
  colorPicker: {
    color: 'black',
    backgroundColor: 'white',
  },
});
