import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export class MenuScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.image}>
          <Image
            source={require("../images/twocents-logo.png")}
            style={{ width: 300, height: 300 }}
          />
        </View>
        <Text style={styles.text}>TwoCents</Text>
        <Text style={styles.about}>TwoCents is a cross pollination student project presented in Module 4 of Turing School of Software and Design</Text>
        <View style={styles.allLinks}>
          <Text style={styles.links}>Add Recommendation</Text>
          <Text style={styles.links}>Notifications</Text>
          <Text style={styles.links}>Contact</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C2540",
    marginBottom: 0
  },
  image: {
    alignItems: 'center'
  },
  text: {
    color: "#EE933F",
    fontSize: 50,
    textAlign: "center",
    marginTop: -20,
  },
  about: {
    color: '#CCC0DD',
    fontSize: 24,
    textAlign: 'justify',
    padding: 20,
    lineHeight: 0
  },
  links: {
    color: "#EE933F",
    fontSize: 32,
    textAlign: 'left',
    padding: 20,
    lineHeight: 10
  }
});
