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

// import { HomePage } from './HomePage';
// import { ProfilePage } from './ProfilePage';

// const App = createStackNavigator({
//   Home: { screen: HomePage },
//   Profile: { screen: ProfilePage },
// });

// export default App;

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      

      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />

      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Details: { screen: DetailsScreen },
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

