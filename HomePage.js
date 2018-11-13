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

class HomePage extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  // render() {
  //   const { navigate } = this.props.navigation;
  //   return (
  //     <Button
  //       title="Go to Jimmy's profile"
  //       onPress={() =>
  //         navigate('Profile', { name: 'Jimmy' })
  //       }
  //     />
  //   );
  // }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}
