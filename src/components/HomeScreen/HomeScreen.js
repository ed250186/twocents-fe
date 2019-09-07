import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { getAllRecommendations } from '../../../utils/APICalls'
import { CategoryScroll } from '../CategoryScroll/CategoryScroll'


export class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      LoggedIn: false,
      allRecommendations: [],
      categories: []
    }
  }

  componentDidMount() {
    this.fetchRecommendations()
  }

  fetchRecommendations = async () => {
    await getAllRecommendations()
      .then(data => this.setState({allRecommendations: data}))
    this.filterCategories()
  }

  filterCategories = () => {
    const categoryList = this.state.allRecommendations.reduce((acc, rec) => {
      rec.categories.forEach(cat => {
        if(!acc[cat]) {
          acc[cat] = []
        }
        acc[cat].push(rec)
      })
      return acc
    }, {})
    this.setState({categories: categoryList})
    // console.log(Object.keys(this.state.categories))
    // console.log(Object.keys(this.state.categories)[7])
    // console.log(Object.values(this.state.categories)[7].length)
  }
  
  render() {
    const sideScroll = Object.entries(this.state.categories).map((cat, key) => (
      <CategoryScroll category={cat[0]} recommendations={cat[1]} key={key}/>
    ))
    return (
      <View style={styles.container}>
        <ScrollView  style={styles.scroll}>
          {sideScroll}
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
    height: '100%',
    width: '100%',
    
  },
  scroll: {
    flex: 1,
    backgroundColor: '#2C2540',
    height: '100%',
    width: '100%'
  },
  text: {
    color: '#EE933F',
    fontSize: 30,
  }
});