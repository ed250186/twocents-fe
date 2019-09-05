import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from "react-navigation-stack";
import { Provider } from 'react-redux';
import  { createStore }  from 'redux';
import { rootReducer } from './src/reducers';
import { HomeScreen } from './src/components/HomeScreen';
import { SearchScreen } from './src/components/SearchScreen';
import { MenuScreen } from './src/components/MenuScreen';
import { UserScreen } from "./src/components/UserScreen";
import { SettingsScreen } from './src/components/SettingsScreen';
import { AboutScreen } from './src/components/AboutScreen'

const store = createStore(rootReducer)

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Search: SearchScreen,
  Menu: MenuScreen,
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

const Modal = createStackNavigator({
  Tab: TabNavigator,
  User: UserScreen,
  Settings: SettingsScreen,
  About: AboutScreen,
},
{
  mode: 'modal',
  headerMode: 'float',
  defaultNavigationOptions: {
    
    headerStyle: {
      height: 0,
        backgroundColor: '#2C2540',
        borderBottomWidth: 0,
    },
  },
})

const Navigation = createAppContainer(Modal);

export class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <Navigation/>
      </Provider>
    )
  }
}

export default App;
