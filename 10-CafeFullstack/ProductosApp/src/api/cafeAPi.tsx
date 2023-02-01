import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'http://192.168.1.22:8080/api';
// const baseURL = 'https://cafe-reactnativebackend.herokuapp.com/api'; // produccion

const cafeApi = axios.create({baseURL});

cafeApi.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers['x-token'] = token;
  }
  return config;
});

export default cafeApi;
