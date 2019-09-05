import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { UserScreen } from "./UserScreen";
import {
  createAppContainer,
  StackActions,
  NavigationActions,
  withNavigation
} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// const MenuStack = createStackNavigator(
//   {
//     User: UserScreen,
//     Menu: MenuScreen
//   },
//   {
//     initialRouteName: 'Menu'
//   });

// const MenuLinks = createAppContainer(MenuStack);

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }

class MenuScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageBox}>
          <Image
            source={require("../images/twocents-logo.png")}
            style={{ width: 200, height: 200 }}
          />
        </View>
        <View style={styles.textBox}>
          <Text style={styles.text}>TwoCents</Text>
          <Text style={styles.about}>
            TwoCents is a cross pollination student project presented in Module
            4 of Turing School of Software and Design
          </Text>
          {/* <Text style={styles.links} onPress={() => }>My Profile</Text> */}
          <TouchableOpacity
            style={styles.links}
            onPress={() => this.props.navigation.navigate( {routeName: 'User'} )}
          >
            <Text>My Profile</Text>
          </TouchableOpacity>
          <Text style={styles.links}>Notifications</Text>
          <Text style={styles.links}>Contact</Text>
        </View>
        <View style={styles.yelp}>
          <Text style={styles.yelpText}>Powered by</Text>
          <Image
            source={require("../images/Yelp_trademark_RGB_outline.png")}
            style={{ width: 100, height: 40, marginTop: -15 }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C2540",
    marginBottom: 0,
    alignItems: "center",
    display: "flex",
    justifyContent: "space-evenly"
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
    lineHeight: 10
  },
  yelpText: {
    color: "#CCC0DD",
    fontSize: 16
  },
  yelp: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center"
  }
});

const MenuStack = createStackNavigator(
  {
    Menu: MenuScreen,
    User: UserScreen
  },
  // {
  //   initialRouteName: 'Menu'
  // }
  );

const MenuLinks = createAppContainer(MenuStack);

export class Menu extends Component {
  render() {
    return(<MenuLinks/>)
  }
};
