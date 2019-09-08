import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { getAllRecommendations } from '../../../utils/APICalls'
import { CategoryScroll } from '../CategoryScroll/CategoryScroll'
import { connect } from 'react-redux';
import { setRecommendations } from '../../actions/index';


export class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      LoggedIn: false,
      categories: []
    }
  }

  static navigationOptions = {
    headerTintColor: '#EE933F'
  }

  componentDidMount() {
    this.fetchRecommendations()
  }

  fetchRecommendations = async () => {
    await getAllRecommendations()
      .then(data => this.props.setRecommendations(data))
      console.log(this.props.allRecommendations[0])
    this.filterCategories()
  }

  filterCategories = () => {
    const categoryList = this.props.allRecommendations.reduce((acc, rec) => {
      rec.categories.forEach(cat => {
        if(!acc[cat]) {
          acc[cat] = []
        }
        acc[cat].push(rec)
      })
      return acc
    }, {})
    this.setState({categories: categoryList})
  }
  
  render() {
    const sideScroll = Object.entries(this.state.categories).map((cat, key) => (
      <CategoryScroll 
        category={cat[0]} 
        recommendations={cat[1]} 
        key={key}
        navigation={this.props.navigation}  
      />
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

const mapStateToProps = state => ({
  allRecommendations: state.allRecommendations
})

const MapDispatchToProps = dispatch => ({
  setRecommendations: (cat) => dispatch(setRecommendations(cat))
})

export default connect(mapStateToProps, MapDispatchToProps)(HomeScreen)