import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      input: ''
    }
  }
  render() {
    const handleChange = enteredText => {
      this.setState({input: enteredText})
    }  
    const handleSubmit = () => {
      console.log(this.state.input)
      this.setState({input: ''})
    }
    return (
      <View style={styles.container}>
        <TextInput 
          style={styles.input}
          value={this.state.input}
          onChangeText={handleChange}
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
    width: '100%'
  },
  input: {
    color: '#EE933F',
    backgroundColor: 'rgba(204, 192, 221, 0.4)',
    width: '80%',
    height: 30,
    borderRadius: 20,
  }
});

export default SearchBar;