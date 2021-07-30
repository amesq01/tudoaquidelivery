/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable keyword-spacing */

import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {Icon, withBadge} from 'react-native-elements';
import {colors, parameters} from '../global/styles';

export function HomeHeader({title, iconName, navigation}) {
  const BadgeIcon = withBadge(0)(Icon);

  return (
    <View style={styles.header}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon
          type="material-community"
          name="menu"
          color={colors.cardbackground}
          size={32}
          //onPress={() => navigation.goBack()}
        />
      </View>
      <View>
        <Text style={styles.headerText}> TudoAquiDelivery</Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {/* Esse <BadgeIcon /> coloca a quantidade de itens no carrinho de compra */}
        <BadgeIcon
          type="material-community"
          name="cart"
          color={colors.cardbackground}
          size={35}
          //onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
  headerText: {
    color: colors.headerText,
    fontSize: 22,
    fontWeight: 'bold',
  },
});
