import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

export class RecommendationsScreen extends Component {
  static navigationOptions = {
    headerStyle: {
        backgroundColor: '#2C2540',
        borderBottomWidth: 0,
    },
  };

  render() {
    const { navigation } = this.props;
    const recommendation = navigation.getParam('recommendation');
    const {name, image, phone, rating, reviewCount, categories, location, price, } = recommendation
    const categoryText = categories.join(', ')
    return(
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{name}</Text>
          <View>
            <Text style={styles.text}>
              {reviewCount} reviews on
              <Image
                source={require("../../images/Yelp_trademark_RGB_outline.png")}
                style={{ width: 70, height: 30, marginTop: -5 }}
              />
            </Text>
          </View>
          <Text style={styles.text}>{categoryText}</Text>
        </View>
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
    color: '#CCC0DD',
    fontSize: 30,
  },
  image: {
    height: 300,
    width: '100%',
    borderRadius: 5
  },
  text: {
    color: '#CCC0DD',
    fontSize: 15,
  }
})