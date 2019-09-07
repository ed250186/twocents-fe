import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


export class MiniRec extends Component {
  constructor() {
    super()
  }

  render() {
    const {name, image, id } = this.props.recommendation
    return(
      <View>
        <Image source={{uri: image}} style={styles.image}/>
        <Text>{name}</Text>
      </View>
    )
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {

  },
  image: {
    height: 140,
    width: 100
  }
})