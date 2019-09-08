import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';

export class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state ={
      input: '',
      searchValues: []
    }
  }
  render() {
    const handleChange = enteredText => {
      this.setState({input: enteredText})
    }  
    const handleSubmit = () => {
      this.setState({input: ''})
      getSearchResults()
    }

    const getSearchResults = () => {
      let searchRecs = this.props.allRecommendations.filter(rec => rec.name.includes(this.state.input))
      console.log(searchRecs)
    }
    return (
      <View style={styles.container}>
        <TextInput 
          placeholder='Enter saved location'
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
    backgroundColor: 'rgba(204, 192, 221, 0.4)',
    height: 35,
    width: '84%',
    borderRadius: 20,
  },
  input: {
    width: '90%',
    color: '#FFF',
  }
});

const mapStateToProps = state => ({
  allRecommendations: state.allRecommendations
})

export default connect(mapStateToProps)(SearchBar) ;