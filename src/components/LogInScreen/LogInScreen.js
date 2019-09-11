import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as Expo from 'expo';
import * as Google from 'expo-google-app-auth';
import { GOOGLE_CLIENT_ID } from 'react-native-dotenv';
import { IOS_CLIENT_ID } from 'react-native-dotenv';
import googleLogin from '../../images/Google-SignIn.png';
import googleSignUp from '../../images/Google-SignUP.png'
import { connect } from 'react-redux';
import { isLoggedIn, setRecommendations } from '../../actions'

export class LogInScreen extends Component {
  constructor() {
    super();
    this.state={
      error: ''
    }
  }

  signUp = async () => {
    
    try {
      const { type, accessToken, user } = await Google.logInAsync({
        androidClientId:
          GOOGLE_CLIENT_ID,
        iosClientId: 
          IOS_CLIENT_ID,
        scopes: ["profile", "email"]
      })

      if (type === "success") {
        this.props.isLoggedIn({
          loggedIn: true,
          name: user.name,
          email: user.email,
          photoUrl: user.photoUrl
        })
        fetch(`https://twocents-be.herokuapp.com/api/v1/users/signup?p=${user.id}`)
        .then(response => response.json())
        .then(data => console.log(data))
        this.props.navigation.navigate( {routeName: 'Home'} )
      } else {
        this.setState({error})
      }
    } catch (e) {
      this.setState({error: e})
    }
  }

  signIn = async () => {
    
    try {
      const { type, accessToken, user } = await Google.logInAsync({
        androidClientId:
          GOOGLE_CLIENT_ID,
        iosClientId: 
          IOS_CLIENT_ID,
        scopes: ["profile", "email"]
      })

      if (type === "success") {
        this.props.isLoggedIn({
          loggedIn: true,
          name: user.name,
          email: user.email,
          photoUrl: user.photoUrl
        })
        fetch(`https://twocents-be.herokuapp.com/api/v1/users/signin?p=${user.id}`)
        .then(response => response.json())
        .then(data => console.log(data))
        this.props.navigation.navigate( {routeName: 'Home'} )
      } else {
        this.setState({error})
      }
    } catch (e) {
      this.setState({error: e})
    }
  }

  render() {
    console.log('recs', this.props.allRecommendations)

    return(
      <View style={styles.container}>
        <View style={styles.appLogo}>
          <Image
            source={require("../../images/twocents-logo.png")}
            style={styles.image}
          />
          <Text style={styles.text}>TwoCents</Text>
        </View>
        <View style={styles.description}>

        </View>
        <View style={styles.loginButtons}>
          <TouchableOpacity 
            activeOpacity={.5} 
            onPress={this.signIn}  
          >
            <Image source={googleLogin} style={{width: 270, height: 50}}/>
          </TouchableOpacity>
          <TouchableOpacity 
            activeOpacity={.5} 
            onPress={() => this.props.navigation.navigate( {routeName: 'Home'} )}  
          >
            <Image source={googleSignUp} style={{width: 270, height: 50}}/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '5%',
    paddingBottom: '5%',
    flex: 1,
    backgroundColor: '#2C2540',
    alignItems: 'center',
  },
  appLogo: {
    height: '30%',
    width: '90%',
    alignItems: 'center',
    marginBottom: '10%',
  },
  image: {
    height: '90%',
    width: '60%',
  },
  text: {
    color: '#EE933F',
    fontSize: 30,
  },
  description: {
    height: '40%',
    width: '90%',
    marginBottom: '10%',
    borderColor: '#EE933F',
    borderWidth: 1
  },
  loginButtons: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '20%',
    width: '90%',
  }
})

export const mapStateToProps = state => ({
  allRecommendations: state.allRecommendations
})

export const mapDispatchToProps = dispatch => ({
  isLoggedIn: (user) => dispatch(isLoggedIn(user)),
  setRecommendations: (recs) => dispatch(setRecommendations(recs))
})

export default connect(null, mapDispatchToProps)(LogInScreen)