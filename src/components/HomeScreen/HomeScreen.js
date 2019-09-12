import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { getAllRecommendations } from '../../../utils/APICalls'
import { CategoryScroll } from '../CategoryScroll/CategoryScroll'
import { connect } from 'react-redux';
import { setRecommendations, getUserLocation } from '../../actions/index';

export class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      LoggedIn: false,
      categories: []
    }
  }
  
  componentWillMount(){
    console.log('will mount')
    navigator.geolocation.getCurrentPosition(
      position => {
        const latitude = JSON.stringify(position.coords.latitude);
        const longitude = JSON.stringify(position.coords.longitude);
        this.props.getUserLocation([latitude, longitude])
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  static navigationOptions = {
    headerTintColor: '#EE933F'
  }

  componentDidMount() {
    console.log('did mount')
    this.fetchRecommendations()
  }

  componentWillReceiveProps(props) {
    console.log('props', Object.entries(props.allRecommendations).length)
    if(Object.entries(props.allRecommendations).length !== this.props.allRecommendations.length) {
      this.fetchRecommendations()
    }

  }

  fetchRecommendations = async () => {
    await getAllRecommendations(this.props.loggedIn.key)
      .then(data => {
        // console.log('data', data.locations)
        this.props.setRecommendations(data.locations)
      })
    this.filterCategories()
  }

  filterCategories = () => {
    // console.log(this.props.allRecommendations)
    const categoryList = this.props.allRecommendations.reduce((acc, rec) => {
      rec.categories.forEach(cat => {
        // console.log('cat', cat)
        if(!acc[cat]) {
          acc[cat] = []
        }
        acc[cat].push(rec)
      })
      return acc
    }, {})
    // console.log('categoryList', categoryList)
    this.setState({categories: categoryList})
  }
  
  render() {
    console.log('render')
    const sideScroll = Object.entries(this.state.categories).map((cat, key) => (
      <CategoryScroll 
        category={cat[0]} 
        recommendations={cat[1]} 
        key={key}
        navigation={this.props.navigation}  
      />
    ))
    const empty = 'You have no recommendations saved yet, search for some!'
    console.log(this.props.allRecommendations.length)
    return (
      <View style={styles.container}>
        <ScrollView  style={styles.scroll}>
          {this.props.allRecommendations.length > 0 && sideScroll}
          {this.props.allRecommendations.length < 1 && <Text style={styles.text}>{empty}</Text>}
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
    width: '100%',
    textAlign: 'center',
    marginTop: '70%'
  }
});

export const mapStateToProps = state => ({
  allRecommendations: state.allRecommendations,
  userLocation: state.userLocation,
  loggedIn: state.loggedIn
})

export const mapDispatchToProps = dispatch => ({
  setRecommendations: (cat) => dispatch(setRecommendations(cat)),
  getUserLocation: (location) => dispatch(getUserLocation(location))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)