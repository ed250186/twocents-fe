import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

export class SearchBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput placeHolder='hey' style={styles.input}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%'
  },
  input: {
    color: '#EE933F',
    backgroundColor: 'rgba(204, 192, 221, 0.4)',
    width: '80%',
    height: 30,
    borderRadius: 20,
  }
});