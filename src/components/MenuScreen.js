import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";


export class MenuScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate( {routeName: 'User'} )}
          >
            <Text style={styles.links}>My Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate( {routeName: 'Settings'} )}
          >
            <Text style={styles.links}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate( {routeName: 'About'} )}
          >
            <Text style={styles.links}>About</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C2540",
    padding: '5%',
    display: "flex",
  },
  imageBox: {
    paddingTop: "5%",
    alignItems: "center",
    height: "35%",
    width: "100%"
  },
  textBox: {
    width: "90%"
  },
  text: {
    color: "#EE933F",
    fontSize: 50,
    textAlign: "center"
  },
  about: {
    color: "#CCC0DD",
    fontSize: 24,
    textAlign: "justify",
    paddingTop: 20,
    paddingBottom: 50,
    lineHeight: 0
  },
  links: {
    color: "#EE933F",
    fontSize: 32,
    textAlign: "left",
    paddingTop: 20,
    paddingBottom: 20,
    textDecorationLine: 'underline',
  },
});

