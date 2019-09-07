import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export class RecommendationsScreen extends Component {
  constructor() {
    super()
  }

  render() {
    const { navigation } = this.props;
    const recommendation = navigation.getParam('recommendation');
    return(
      <View style={styles.container}>
        <Text style={styles.title}>{recommendation.name}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2540',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  title: {
    color: '#EE933F',
    fontSize: 30,
  },
})