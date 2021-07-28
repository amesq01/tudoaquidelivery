/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable keyword-spacing */

import React, {useState} from 'react';

import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native';
import {Icon} from 'react-native-elements';
import {Header} from '../../components/Header';
import {colors, title} from '../../global/styles';
import * as Animatable from 'react-native-animatable';

export function SignInScreen() {
  const [visibility, setVisibility] = useState(false);

  function isVisible() {
    return setVisibility(!visibility);
  }

  return (
    <View style={styles.container}>
      <Header title="Minha Conta" iconName="arrow-left" />
      <View style={{marginLeft: 20, marginTop: 10}}>
        <Text style={title}>Login</Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={styles.title}>Por favor, insira seu email e senha!</Text>
        <Text style={styles.title}>entre com sua conta</Text>
      </View>
      <View style={{marginTop: 20}}>
        <View style={styles.TextInput1}>
          <Icon
            name="email"
            iconStyle={{color: colors.grey3}}
            type="material"
          />
          <TextInput
            placeholder="Digite seu email"
            placeholderTextColor="black"
            textContentType="emailAddress"
          />
        </View>

        <View style={styles.TextInput2}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Animatable.View>
              <Icon
                name="lock"
                iconStyle={{color: colors.grey3}}
                type="material"
              />
            </Animatable.View>
            <TextInput
              placeholder="Digite sua senha"
              placeholderTextColor="black"
              textContentType="password"
              secureTextEntry={!visibility}
            />
          </View>
          <Animatable.View>
            <Icon
              name={setVisibility ? 'visibility-off' : 'visibility-on'}
              iconStyle={{color: colors.grey3}}
              type="material"
              onPress={isVisible}
            />
          </Animatable.View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: colors.grey3,
    fontSize: 16,
  },
  TextInput1: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextInput2: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    paddingHorizontal: 10,
  },
});
