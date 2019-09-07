import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { MiniRec } from '../MiniRec/MiniRec'

export class CategoryScroll extends Component {
  constructor() {
    super()
  }

  render() {
    const recommendations = this.props.recommendations.map(rec => (
      <MiniRec 
        key={rec.id} 
        recommendation={rec} 
        navigation={this.props.navigation} 
      />
    ))
    return(
      <View style={styles.container}>
        <Text style={styles.mainText}>{this.props.category}</Text>
        <ScrollView horizontal={true}>
          {recommendations}
        </ScrollView>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
  mainText: {
    marginLeft: 10,
    color: '#EE933F',
    fontSize: 30,
  }
})