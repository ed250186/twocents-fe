import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const SearchBar = (props) => {
  const [enteredSearch, setSearch] = useState('');
  // render() {
    const handleChange = enteredText => {
      setSearch(enteredText)
    }  
    const handleSubmit = () => {
      console.log(enteredSearch)
      setSearch('')
    }
    return (
      <View style={styles.container}>
        <TextInput 
          placeHolder='hey' 
          style={styles.input}
          value={enteredSearch}
          onChangeText={handleChange}
          onSubmitEditing={handleSubmit}
        />
      </View>
    );
  // }
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