import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';


export class CategoryScroll extends Component {
  constructor() {
    super()
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.mainText}>{this.props.category}</Text>
        <ScrollView horizontal={true}>

        </ScrollView>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    borderColor: 'red',
    borderWidth: 1
  },
  mainText: {
    color: '#EE933F',
    fontSize: 30,
  }
})