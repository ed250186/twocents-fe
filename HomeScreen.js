
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

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

export class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Home!</Text>
      </View>
    );
  }
}