import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export class UserScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image/>
        <View style={styles.textBox}>
          <Text style={styles.mainText}>Username</Text>
          <Text style={styles.minorText}>name from global store</Text>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.mainText}>Email</Text>
          <Text style={styles.minorText}>Email from global store</Text>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.mainText}>Recommendations</Text>
          <Text style={styles.minorText}>from global store</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2540',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBox: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '80%',
    margin: 30,
  },
  mainText: {
    color: '#EE933F',
    fontSize: 30,
  },
  minorText: {
    color: '#CCC0DD',
    fontSize: 25,
    paddingLeft: 30,
  },
  buttonText: {
    color: '#CCC0DD',
    fontSize: 25,
  },
  button: {
    backgroundColor: 'rgba(204, 192, 221, 0.14)',
    borderWidth: 1,
    borderColor: '#EE933F',
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  image: {
    height: 50,
    width: 50,
  }
});