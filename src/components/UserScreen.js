import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export class UserScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image/>
        <View>
          <Text style={styles.mainText}>Username</Text>
          <Text style={styles.minorText}>name from global store</Text>
        </View>
        <View>
          <Text style={styles.mainText}>Email</Text>
          <Text style={styles.minorText}>Email from global store</Text>
        </View>
        <View>
          <Text style={styles.mainText}>Recommendations</Text>
          <Text style={styles.minorText}>from global store</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.minorText}>Log Out</Text>
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
  mainText: {
    color: '#EE933F',
    fontSize: 30,
  },
  minorText: {
    color: '#CCC0DD',
    fontSize: 25,
  },
  button: {
    backgroundColor: 'rgba(204, 192, 221, 0.14)',
    borderWidth: 1,
    borderColor: '#EE933F',
    borderRadius: 10,
    color: 'red',
  },
});