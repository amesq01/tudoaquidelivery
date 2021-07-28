/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable keyword-spacing */

import React from 'react';

import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Icon} from 'react-native-elements';
import {colors, parameters} from '../global/styles';

export function Header({title, iconName}) {
  return (
    <View style={styles.header}>
      <View
        style={{
          marginLeft: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon
          type="material-community"
          name={iconName}
          color={colors.headerText}
          size={28}
          onPress={() => {}}
        />
      </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
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
  },
  headerText: {
    color: colors.headerText,
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
