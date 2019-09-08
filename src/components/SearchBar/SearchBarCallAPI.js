import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

export class SearchBarCallAPI extends Component {
  constructor(props) {
    super(props)
    this.state ={
      name: '', 
      address: ''
    }
  }

  render() {
    const handleChangeName = enteredText => {
      this.setState({name: enteredText})
    } 
    
    const handleChangeAddress = enteredText => {
      this.setState({address: enteredText})
    }
    const handleSubmit = () => {
      console.log(this.state)
      this.setState({name: '', address: ''})
    }
    return (
      <View style={styles.container}>
          <TextInput 
            placeholder='Enter Recommended Location'
            style={styles.input}
            value={this.state.name}
            onChangeText={handleChangeName}
            onSubmitEditing={handleSubmit}
          />
          <TextInput 
            placeholder='Enter City and State'
            style={styles.input}
            value={this.state.address}
            onChangeText={handleChangeAddress}
            onSubmitEditing={handleSubmit}
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

export default SearchBarCallAPI;