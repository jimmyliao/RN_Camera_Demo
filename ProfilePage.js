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
  TouchableOpacity,  
} from 'react-native';

class ProfilePage extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to HomePage"
        onPress={() =>
          //navigate('Profile', { name: 'Jimmy' })
          navigate('Home')
        }
      />
    );
  }
}
