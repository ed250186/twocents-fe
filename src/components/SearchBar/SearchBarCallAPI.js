import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

class SearchBarCallAPI extends Component {
  constructor(props) {
    super(props)
    this.state ={
      place: '', 
      location: ''
    }
  }

  render() {
    const handleChangePlace = enteredText => {
      this.setState({place: enteredText})
    } 
    
    const handleChangeLocation = enteredText => {
      this.setState({location: enteredText})
    }
    const handleSubmit = () => {
      console.log(this.state)
      this.setState({place: '', location: ''})
    }
    return (
      <View style={styles.container}>
          <TextInput 
            placeholder='Enter Recommended Location'
            style={styles.input}
            value={this.state.place}
            onChangeText={handleChangePlace}
            onSubmitEditing={handleSubmit}
          />
          <TextInput 
            placeholder='Enter City and State'
            style={styles.input}
            value={this.state.location}
            onChangeText={handleChangeLocation}
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