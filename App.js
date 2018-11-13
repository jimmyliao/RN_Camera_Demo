/**
 * Sample App for Camera preview and QRScanner
 */

import React, {Component} from 'react';

import {
  createStackNavigator,
} from 'react-navigation';

import {
  Platform, View,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity, Button
} from 'react-native';

import { RNCamera, FaceDetector } from 'react-native-camera';

import HomePage from './HomePage';
import ProfilePage from './ProfilePage';


const RootStack = createStackNavigator(
  {
    Home: { screen: HomePage },
    Profile: { screen: ProfilePage },
  },
  {
    initialRouteName: 'Home',
  }
  
  );

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

