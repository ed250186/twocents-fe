import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import SearchBar from '../SearchBar/SearchBar';
import SearchBarCallAPI from '../SearchBar/SearchBarCallAPI'
import { connect } from 'react-redux';

export class SearchScreen extends Component {
  constructor(){
    super();
    this.state ={
      currentRecs: true,
      searchResults: []
    }
  }

  getSearchResults = (value) => {
    let searchResults = this.props.allRecommendations.filter(rec => rec.name.toUpperCase().includes(value.toUpperCase()))
    this.setState({searchResults})
  }

  getYelpSearchResultsLocation = (name, address) => {

  }

  getYelpSearchResultsLatLong = (name) => {

  }

  render() {
    let search;
    let noResults = (<Text>No Results Found</Text>)
    let resultName = this.state.searchResults.map(rec => <TouchableOpacity onPress={() => this.props.navigation.navigate('RecScreen', {recommendation: rec})}><Text style={styles.searchResult}>{rec.name}</Text></TouchableOpacity>)


    if (this.state.currentRecs === true) {
      search = <SearchBar getSearchResults = {this.getSearchResults} />;
    } else {
      search = <SearchBarCallAPI/>;
    }
    return (
      <View style={styles.container}>
        <View style={styles.toggleSearch}>
          <TouchableOpacity onPress={() => this.setState({currentRecs: true, searchResults: []})}>
            <Text style={ (this.state.currentRecs == false) ? styles.toggleMenu : styles.toggleMenuTrue}>MY TWOCENTS</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({currentRecs: false, searchResults: []})}>
            <Text style={ (this.state.currentRecs == false) ? styles.toggleMenuTrue : styles.toggleMenu}>NEW TWOCENTS</Text>
          </TouchableOpacity>
        </View>
          <View style={styles.searchMenu}>
            {search}
          </View>
        <ScrollView style={styles.allResults}>
          <View>{!this.state.searchResults.length ? noResults : resultName }</View>
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
  },
  toggleSearch:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '90%',
    marginBottom: 15
  },
  toggleMenu: {
    fontSize: 18,
    color: '#CCC0DD'
  },
  toggleMenuTrue: {
    fontSize: 18,
    color: '#CCC0DD',
    fontWeight: '800'
  },
  searchMenu: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginLeft: '15%'
  },
  allResults: {
    display: 'flex',
    flexDirection: 'column'
  },
  searchResult: {
    color: 'white',
    fontSize: 32,
    margin: 10
  }
});

export const mapStateToProps = state => ({
  allRecommendations: state.allRecommendations,
  userLocation: state.userLocation
})

export default connect(mapStateToProps)(SearchScreen);
