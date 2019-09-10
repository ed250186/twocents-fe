import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';

export class SearchBarCallAPI extends Component {
  constructor(props) {
    super(props)
    this.state ={
      name: '', 
      address: 'Current Location',
      error: ''
    }
  }

  handleChangeName = enteredText => {
    this.setState({name: enteredText})
  } 
  
  handleChangeAddress = enteredText => {
    this.setState({address: enteredText})
  }

  handleSubmit = () => {
    if(!this.state.name || !this.state.address) {
      this.setState({error: 'Missing required field'})
    } else {
      if(this.state.address === 'Current Location') {
       console.log(this.props.userLocation)
      } else {
       console.log(this.state.address)
      }
    }
    this.setState({name: '', address: 'Current Location'})
  }

  render() {
    return (
      <View style={styles.container}>
          <TextInput 
            placeholder='Enter Recommended Location'
            style={styles.input}
            value={this.state.name}
            onChangeText={this.handleChangeName}
            onSubmitEditing={this.handleSubmit}
          />
          <TextInput 
            placeholder='Enter City and State'
            style={styles.input}
            value={this.state.address}
            onChangeText={this.handleChangeAddress}
            onSubmitEditing={this.handleSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(204, 192, 221, 0.4)',
    height: 70,
    width: '84%',
    borderRadius: 20,
  },
  input: {
    width: '90%',
    color: '#FFF',
  }
});

const mapStateToProps = state => ({
  userLocation: state.userLocation
})

export default connect(mapStateToProps)(SearchBarCallAPI);