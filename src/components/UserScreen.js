import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';

export class UserScreen extends Component {

  static navigationOptions = ({ navigation }) => {
      return {
        title: 'My Profile',
        headerStyle: {
          backgroundColor: 'white',
        },
      };
    };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageBox}>
          <Image style={styles.image}/>
        </View>
        <View style={styles.info}>
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
        </View>
        <TouchableOpacity style={styles.button} activeOpacity={.5} >
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '15%',
    flex: 1,
    backgroundColor: '#2C2540',
    alignItems: 'center',
  },
  info: {
    paddingTop: '10%',
    height: '75%',
    width: '100%'
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
    shadowOffset:{  width: 5,  height: 10,  },
    shadowColor: 'black',
    shadowOpacity: 1.0,
  },
  image: {
    height: 100,
    width: 100,
    borderWidth: 1,
    borderColor: 'red'
  },
  imageBox: {
    width: '80%',
    height: '20%',
    borderWidth: 1,
    borderColor: 'green'
  }
});

export default UserScreen;