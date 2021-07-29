/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable keyword-spacing */

import React, {useState} from 'react';

//import {getStatusBarHeight} from 'react-native-iphone-x-helper';

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
  Image,
  ImageBackground,
} from 'react-native';
import {Icon, Button, SocialIcon} from 'react-native-elements';
import {Header} from '../../components/Header';
import {colors, parameters, title} from '../../global/styles';
import * as Animatable from 'react-native-animatable';

import Swiper from 'react-native-swiper';
import {NavigationContainer} from '@react-navigation/native';

const image = {
  uri: 'https://image.freepik.com/fotos-gratis/imagem-isolada-e-vertical-de-uma-variedade-de-refeicoes-de-peixe-e-carne-buffet-de-vista-superior-com-uma-variedade-de-alimentos-buffet-banquete-aperitivo-conceito-de-menu-de-restaurante_109656-536.jpg',
};

export function SignInWelcomeScreen({navigation}) {
  return (
    // O ImageBackground serve para colocar uma imagem como background de uma view
    <ImageBackground style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flex: 3,
          justifyContent: 'flex-start',
          alignItems: 'center',
          //marginTop: getStatusBarHeight(),
          //paddingTop: 20,
        }}>
        <Text
          style={{
            fontSize: 26,
            color: colors.buttons,
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 30,
          }}>
          SUA COMIDA NA PALMA DA MÃO!
        </Text>
      </View>

      <View
        style={{
          flex: 10,
          justifyContent: 'center',
          //paddingHorizontal: 20,
        }}>
        {/* O Swiper serve para fazer carrousel */}
        <Swiper showsPagination={false} autoplay={true} autoplayTimeout={5}>
          <View style={styles.slide1}>
            <Image
              source={{
                uri: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png',
              }}
              style={{height: '100%', width: '100%', borderRadius: 12}}
            />
          </View>
          <View style={styles.slide2}>
            <Image
              source={{
                uri: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png',
              }}
              style={{height: '100%', width: '100%', borderRadius: 12}}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              source={{
                uri: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate2.png',
              }}
              style={{height: '100%', width: '100%', borderRadius: 12}}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              source={{
                uri: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png',
              }}
              style={{height: '100%', width: '100%', borderRadius: 12}}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              source={{
                uri: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate1.png',
              }}
              style={{height: '100%', width: '100%', borderRadius: 12}}
            />
          </View>
        </Swiper>
      </View>
      <View style={{flex: 4, justifyContent: 'flex-end'}}>
        <View
          style={{
            paddingHorizontal: 20,
            marginTop: 20,
            marginBottom: 20,
          }}>
          <Button
            title="LOGIN"
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitle}
            onPress={() => navigation.navigate('SignInScreen')}
          />
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            marginBottom: 20,
          }}>
          <Button
            title="Cadastre-se"
            buttonStyle={styles.createButton}
            titleStyle={styles.createButtonTitle}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    //backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,

    //backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,

    //backgroundColor: '#92BBD9',
  },
  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.grey3,
    height: 45,
    paddingHorizontal: 20,
  },
  createButtonTitle: {
    color: colors.grey1,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
