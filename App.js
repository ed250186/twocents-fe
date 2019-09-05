import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider } from 'react-redux';
import  { createStore }  from 'redux';
import { rootReducer } from './src/reducers';
import { HomeScreen } from './src/components/HomeScreen';
import { SearchScreen } from './src/components/SearchScreen';
import { MenuRouter } from './MenuRouter';

const store = createStore(rootReducer)

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Search: SearchScreen,
  Menu: MenuRouter,
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
