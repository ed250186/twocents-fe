import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

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
    const {name, image, phone, rating, reviewCount, categories, location, price, hours} = recommendation
    const categoryText = categories.join(', ')
    return(
      <ScrollView style={styles.container}>
        <View >
          <View style={styles.titleInfo}>
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
          <View style={styles.info}>
            <View style={styles.t_and_h}>
              <Text style={styles.title}>Price</Text>
              <Text style={styles.text}>{price}</Text>
            </View>
            <View>
              <Text style={styles.title}>Hours</Text>
              <Text style={styles.text}>{hours[0]}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2540',
    height: '100%',
    width: '100%',
  },
  titleInfo: {
    marginLeft: 30,
    marginBottom: 15,
  },
  title: {
    color: '#CCC0DD',
    fontSize: 35,
  },
  image: {
    height: 300,
    width: '100%',
  },
  text: {
    color: '#CCC0DD',
    fontSize: 20,
    marginBottom: 5,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 30
  },
  t_and_h: {
    alignItems: 'center'
  }
})