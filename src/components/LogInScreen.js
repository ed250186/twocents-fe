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
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '5%',
    flex: 1,
    backgroundColor: '#2C2540',
    alignItems: 'center',
  },
  appLogo: {
    alignItems: 'center',
    marginBottom: '15%',
    borderColor: 'red',
    borderWidth: 1,
  },
  image: {
    height: 200,
    width: 200,
  },
  text: {
    color: '#EE933F',
    fontSize: 30,
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
  
})