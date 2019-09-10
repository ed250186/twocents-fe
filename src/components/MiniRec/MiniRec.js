import React, { Component } from 'react';
import { Text, View, StyleSheet, Image,TouchableWithoutFeedback } from 'react-native';


export class MiniRec extends Component {
  constructor() {
    super()
  }
  static navigationOptions = {
    headerTintColor: '#EE933F'
  }

  render() {
    const {name, image, id } = this.props.recommendation
    return(
      <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('RecScreen', {recommendation: this.props.recommendation, navigation: this.props.navigation})}>
        <View style={styles.container}>
          <Image source={{uri: image}} style={styles.image}/>
          <Text style={styles.title}>{name}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 100,
    marginRight: 10,
    marginLeft: 10,
    alignItems: 'center',
    
  },
  title: {
    textAlign: 'center',
    color: '#CCC0DD',
    fontSize: 18,
  },
  image: {
    height: 140,
    width: 100,
    borderRadius: 5
  }
})