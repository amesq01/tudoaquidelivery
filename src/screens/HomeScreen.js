/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable keyword-spacing */

import React from 'react';

import {Icon} from 'react-native-elements';

import {View, Text, StyleSheet} from 'react-native';
import {HomeHeader} from '../components/HomeHeader';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <HomeHeader />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
