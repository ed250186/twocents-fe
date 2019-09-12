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
    console.log(this.props.loggedIn)
    this.fetchRecommendations()
  }

  fetchRecommendations = async () => {
    await getAllRecommendations(this.props.loggedIn.key)
      .then(data => {
        this.props.setRecommendations(data)
      })
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
    const empty = 'You have no recommendations saved yet, search for some!'
    return (
      <View style={styles.container}>
        <ScrollView  style={styles.scroll}>
          {this.props.allRecommendations.length > 1 && sideScroll}
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

const mapStateToProps = state => ({
  allRecommendations: state.allRecommendations,
  userLocation: state.userLocation,
  loggedIn: state.loggedIn
})

const mapDispatchToProps = dispatch => ({
  setRecommendations: (cat) => dispatch(setRecommendations(cat)),
  getUserLocation: (location) => dispatch(getUserLocation(location))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)