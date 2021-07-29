/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable keyword-spacing */

import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import {Icon, Button, SocialIcon} from 'react-native-elements';
import {Header} from '../../components/Header';
import {colors, parameters, title} from '../../global/styles';
import * as Animatable from 'react-native-animatable';

export function SignInScreen() {
  const [visibility, setVisibility] = useState(false);

  function isVisible() {
    return setVisibility(!visibility);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : 'height'}
        style={{flex: 1}}>
        <View style={styles.container}>
          <Header title="Minha Conta" iconName="arrow-left" />

          <View style={{marginLeft: 20, marginTop: 20}}>
            <Text style={title}>Login</Text>
          </View>
          <View style={{alignItems: 'center', marginTop: 10}}>
            <Text style={styles.title}>
              Por favor, insira seu email e senha!
            </Text>
            <Text style={styles.title}> Ou entre com sua conta</Text>
          </View>

          <View style={{marginTop: 20}}>
            <View style={styles.TextInput1}>
              <Icon
                name="email"
                iconStyle={{color: colors.grey3}}
                type="material"
              />
              <TextInput
                autoCorrect={false}
                autoCapitalize="none"
                style={{color: '#333'}}
                placeholder="Digite seu email"
                placeholderTextColor="gray"
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
                  autoCorrect={false}
                  autoCapitalize="none"
                  style={{color: '#333'}}
                  placeholder="Digite sua senha"
                  placeholderTextColor="gray"
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
          <View style={{paddingHorizontal: 20, marginTop: 20}}>
            <Button
              title="LOGIN"
              buttonStyle={parameters.styledButton}
              titleStyle={parameters.buttonTitle}
            />
          </View>
          <View
            style={{
              alignItems: 'flex-end',
              marginTop: 15,
              paddingRight: 20,
              justifyContent: 'center',
            }}>
            <Button
              title="Esqueceu a senha?"
              buttonStyle={styles.forgetPassword}
              titleStyle={styles.forgetPasswordTitle}
            />
          </View>
          <View
            style={{
              alignItems: 'center',
              marginTop: 20,
              marginBottom: 20,
              justifyContent: 'center',
              flexDirection: 'row',
              paddingHorizontal: 20,
            }}>
            <View
              style={{
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderBottomColor: 'gray',
                height: 1,
                flex: 1,
                //width: '45%',
              }}
            />
            <Text style={{paddingHorizontal: 10}}>OU LOGAR COM</Text>
            <View
              style={{
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderBottomColor: 'gray',
                height: 1,
                flex: 1,
                //width: '45%',
              }}
            />
          </View>
          <View>
            <ScrollView
              style={{
                flexDirection: 'row',
              }}
              showsHorizontalScrollIndicator={false}
              horizontal>
              <SocialIcon
                button
                type="instagram"
                style={{
                  borderRadius: 12,
                  width: 80,
                  backgroundColor: '#ff8c52',
                  height: 80,
                  marginLeft: 20,
                }}
                iconSize={48}
                fontStyle={{fontSize: 16}}
                onPress={() => {}}
              />
              <SocialIcon
                button
                type="facebook"
                style={{
                  borderRadius: 12,
                  width: 80,
                  height: 80,
                }}
                iconSize={40}
                fontStyle={{fontSize: 16}}
                onPress={() => {}}
              />
              <SocialIcon
                button
                type="google"
                style={{
                  borderRadius: 12,
                  width: 80,
                  height: 80,
                }}
                iconSize={40}
                fontStyle={{fontSize: 16}}
                onPress={() => {}}
              />
              <SocialIcon
                button
                type="twitter"
                style={{
                  borderRadius: 12,
                  width: 80,
                  height: 80,
                  marginRight: 20,
                }}
                iconSize={40}
                fontStyle={{fontSize: 16}}
                onPress={() => {}}
              />
            </ScrollView>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              flex: 1,
              paddingHorizontal: 20,
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 16}}>Não tem conta?</Text>
            </View>
            <View>
              <Button
                title="Cadastre-se"
                buttonStyle={styles.createButton}
                titleStyle={styles.createButtonTitle}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ff8c52',
    height: 40,
    paddingHorizontal: 20,
    marginLeft: 10,
  },
  createButtonTitle: {
    color: '#ff8c52',
    fontSize: 14,
    fontWeight: 'bold',
  },
  forgetPassword: {
    backgroundColor: 'white',
  },
  forgetPasswordTitle: {
    color: 'gray',
    textDecorationLine: 'underline',
  },
});
