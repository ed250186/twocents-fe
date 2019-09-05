import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import SearchBar from './SearchBar';

export class SearchScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.toggleSearch}>
          <TouchableOpacity>
            <Text style={styles.toggleMenu}>MY TWOCENTS</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.toggleMenu}>NEW TWOCENTS</Text>
          </TouchableOpacity>
        </View>
        <SearchBar />
        <Text style={styles.text}>Search</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2540',
    alignItems: 'center',
    paddingTop: 50
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
  }
});