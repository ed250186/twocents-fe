import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

export class RecommendationsScreen extends Component {
  static navigationOptions = {
    headerStyle: {
        backgroundColor: 'white',
        borderBottomWidth: 0,
    },
  };

  render() {
    const { navigation } = this.props;
    const recommendation = navigation.getParam('recommendation');
    const {name, image, phone, rating, reviewCount, categories, location, price, } = recommendation
    return(
      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <Image source={{uri: image}} style={styles.image}/>
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
  image: {
    height: 300,
    width: 300,
    borderRadius: 5
  }
})