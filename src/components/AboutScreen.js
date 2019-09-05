import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export class AboutScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'About',
      headerStyle: {
        backgroundColor: 'white',
      },
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageBox}>
          <Image
            source={require("../images/twocents-logo.png")}
            style={{ width: 200, height: 200 }}
          />
        </View>
        <Text style={styles.text}>TwoCents</Text>
          <Text style={styles.about}>
            TwoCents is a cross pollination student project presented in Module
            4 of Turing School of Software and Design
          </Text>
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
  imageBox: {
    paddingTop: "5%",
    alignItems: "center",
    height: "35%",
    width: "100%"
  },
  about: {
    color: "#CCC0DD",
    fontSize: 24,
    textAlign: "justify",
    paddingTop: 20,
    paddingBottom: 50,
    lineHeight: 0
  },
});