import React, {useContext} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {CustomSwitch} from '../component/CustomSwitch';
import {HeaderTitle} from '../component/HeaderTitle';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {useForm} from '../hooks/useForm';
import {styles} from '../theme/appTheme';

export const TextInputScreen = () => {
  const {
    theme: {colors, dividerColor},
  } = useContext(ThemeContext);

  const {onChange, form, isSubscribed} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });

  return (
    // <KeyboardAvoidingView  // Solo utilizado en versiones anteriores a 6.0
    //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <ScrollView>
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
      <View style={styles.globalMargin}>
        <HeaderTitle title="TextInputs" />

        <TextInput
          style={{
            ...stylesScreen.inputStyle,
            color: colors.text,
            borderColor: colors.text,
          }}
          placeholderTextColor={dividerColor}
          placeholder="Ingrese su nombre"
          autoCorrect={false}
          autoCapitalize="words"
          onChangeText={value => onChange(value, 'name')}
        />

        <TextInput
          style={{
            ...stylesScreen.inputStyle,
            borderColor: colors.text,
            color: colors.text,
          }}
          placeholder="Ingrese su email"
          placeholderTextColor={dividerColor}
          onChangeText={value => onChange(value, 'email')}
          keyboardType="email-address"
          keyboardAppearance="dark"
        />

        <View style={stylesScreen.switchRow}>
          <Text
            style={{
              ...stylesScreen.switchText,
              color: colors.text,
              borderColor: colors.text,
            }}>
            Suscribirse
          </Text>
          <CustomSwitch
            isOn={isSubscribed}
            onChange={value => onChange(value, 'isSubscribed')}
          />
        </View>

        <HeaderTitle title={JSON.stringify(form, null, 3)} />

        <HeaderTitle title={JSON.stringify(form, null, 3)} />

        <TextInput
          style={{
            ...stylesScreen.inputStyle,
            color: colors.text,
            borderColor: colors.text,
          }}
          placeholderTextColor={dividerColor}
          placeholder="Ingrese su teléfono"
          onChangeText={value => onChange(value, 'phone')}
          keyboardType="phone-pad"
        />
      </View>
      {/* </TouchableWithoutFeedback> */}
    </ScrollView>
    // </KeyboardAvoidingView>
  );
};

const stylesScreen = StyleSheet.create({
  inputStyle: {
    height: 50,
    margin: 12,
    borderWidth: 2,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },

  switchText: {
    fontSize: 25,
  },
});
