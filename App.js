import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { HomeScreen } from './HomeScreen';
import { MenuScreen } from './MenuScreen';
import { UserScreen } from './UserScreen';

const TabNavigator = createBottomTabNavigator({
  Menu: MenuScreen,
  Home: HomeScreen,
  User: UserScreen
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