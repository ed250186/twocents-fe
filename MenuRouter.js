import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { UserScreen } from "./src/components/UserScreen";
import { MenuScreen } from './src/components/MenuScreen';



const MenuStack = createStackNavigator(
  {
    Menu: MenuScreen,
    User: UserScreen,
    // Settings: SettingsScreen,

  },
  {
    initialRouteName: 'Menu'
  }
  );

const MenuLinks = createAppContainer(MenuStack);

export class MenuRouter extends Component {
  render() {
    return(<MenuLinks/>)
  }
};