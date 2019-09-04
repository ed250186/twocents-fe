import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export class UserScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>User Info Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2540',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#EE933F',
    fontSize: 30,
  }
});