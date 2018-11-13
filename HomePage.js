import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
// import ProfilePage from './ProfilePage';

export default class HomePage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HomePage here.</Text>
        <Button
          title="Go to ProfilePage"
          onPress={() =>
            this.props.navigation.navigate('Profile')
        }
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
