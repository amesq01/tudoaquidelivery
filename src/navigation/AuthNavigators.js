/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable keyword-spacing */

import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import {SignInWelcomeScreen} from '../screens/authScreens/SignInWelcomeScreen';
import {SignInScreen} from '../screens/authScreens/SignInScreen';

const Stack = createStackNavigator();

export function AuthNavigators() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignInWelcomeScreen"
        component={SignInWelcomeScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </Stack.Navigator>
  );
}
