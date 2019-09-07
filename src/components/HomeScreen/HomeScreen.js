import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { getAllRecommendations } from '../../../APICalls'

export class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      LoggedIn: false,
      allRecommendations: []
    }
  }

  componentDidMount() {
    this.fetchRecommendations()
  }

  fetchRecommendations = async () => {
    await getAllRecommendations()
      .then(data => this.setState({allRecommendations: data}))
    console.log(this.state.allRecommendations.length)
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Home!</Text>
        <ScrollView horizontal={false}>

        </ScrollView>
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