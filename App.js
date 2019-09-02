import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { HomeScreen } from './HomeScreen'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2540',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#EE933F',
    fontSize: 30,
  }
});


class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Settings!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
},
{
  tabBarOptions: {
    activeTintColor: '#EE933F',
    inactiveTintColor: '#CCC0DD',
    style: {
      backgroundColor: '#2C2540'
    }
  }
});

export default createAppContainer(TabNavigator);