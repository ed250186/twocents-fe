import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider } from 'react-redux';
// import { composeWithDevTools } from "redux-devtools-extension";
import  { createStore }  from 'redux';
import {rootReducer} from './src/reducers'
import { HomeScreen } from './src/components/HomeScreen';
import { MenuScreen } from './src/components/MenuScreen';
import { UserScreen } from './src/components/UserScreen';

const store = createStore(rootReducer)
const TabNavigator = createBottomTabNavigator({
  Menu: MenuScreen,
  Home: HomeScreen,
  User: UserScreen,
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

const Navigation = createAppContainer(TabNavigator);

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
