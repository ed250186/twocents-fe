import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export class LogInScreen extends Component {
  constructor() {
    super()
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.appLogo}>
          <Image
            source={require("../images/twocents-logo.png")}
            style={styles.image}
          />
          <Text style={styles.text}>TwoCents</Text>
        </View>
        <View style={styles.description}>

        </View>
        <View style={styles.loginButtons}>
          <TouchableOpacity 
            style={styles.button} 
            activeOpacity={.5} 
            onPress={() => this.props.navigation.navigate( {routeName: 'Home'} )}  
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button} 
            activeOpacity={.5} 
            onPress={() => this.props.navigation.navigate( {routeName: 'Home'} )}  
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '5%',
    paddingBottom: '5%',
    flex: 1,
    backgroundColor: '#2C2540',
    alignItems: 'center',
  },
  appLogo: {
    height: '30%',
    width: '90%',
    alignItems: 'center',
    marginBottom: '10%',
    borderColor: 'red',
    borderWidth: 1,
  },
  image: {
    height: '90%',
    width: '60%',
  },
  text: {
    color: '#EE933F',
    fontSize: 30,
  },
  description: {
    height: '40%',
    width: '90%',
    marginBottom: '10%',
    borderColor: 'red',
    borderWidth: 1
  },
  loginButtons: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '20%',
    width: '90%',
    borderColor: 'red',
    borderWidth: 1
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
    width: '100%',
    alignItems: 'center',
    shadowOffset:{  width: 5,  height: 10,  },
    shadowColor: 'black',
    shadowOpacity: 1.0,
  },
  
})