import React, { Component } from 'react';
import {  Text } from 'react-native';
import Dialog, { 
  DialogContent, 
  SlideAnimation,
  DialogTitle,
  DialogButton,
  DialogFooter,
} from 'react-native-popup-dialog';


export class LogOutPopup extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <Dialog 
        dialogTitle={<DialogTitle title="Log Out" />}
        visible={this.props.popupVisible} 
        dialogAnimation={new SlideAnimation({
          slideFrom: 'bottom',
        })}
        footer={
          <DialogFooter>
            <DialogButton 
              text='Cancel'
              onPress={() => {
                this.props.handlePopup(false)
              }}
            ></DialogButton>
            <DialogButton 
              text='Log Out'
              onPress={() => {
                this.props.logOut({})
                this.props.handlePopup(false)
                this.props.navigation.navigate( {routeName: 'LogIn'} )}}
            ></DialogButton>
          </DialogFooter>
        } 
        >
        <DialogContent>
          <Text style={{margin: 20}}>Are you sure you want to log out?</Text>
        </DialogContent>
      </Dialog>
    )
  }
}