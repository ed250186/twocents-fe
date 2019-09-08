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
  render() {
    let search;

    const getSearchResults = (value) => {
      let searchResults = this.props.allRecommendations.filter(rec => rec.name.includes(value))
      this.setState({searchResults})
    }

    if (this.state.currentRecs === true) {
      search = <SearchBar getSearchResults = {getSearchResults} />;
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
        <ScrollView>
          {!this.state.searchResults.length ? <Text>No Results Found</Text> : <Text>{this.state.searchResults.map(result => result.name)}</Text>}
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
  }
});

export const mapStateToProps = state => ({
  allRecommendations: state.allRecommendations
})

export default connect(mapStateToProps)(SearchScreen);
