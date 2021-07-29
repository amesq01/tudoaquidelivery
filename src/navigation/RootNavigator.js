/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable keyword-spacing */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {AuthNavigators} from './AuthNavigators';

export function RootNavigator() {
  return (
    <NavigationContainer>
      <AuthNavigators />
    </NavigationContainer>
  );
}
