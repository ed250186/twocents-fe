import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      LoggedIn: false,
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Home!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2540',
    alignItems: 'center',
    paddingTop: 50,
    
  },
  text: {
    color: '#EE933F',
    fontSize: 30,
  }
});