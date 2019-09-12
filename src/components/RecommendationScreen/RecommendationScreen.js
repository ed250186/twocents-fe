import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { HeaderBackButton } from 'react-navigation-stack';
import { updateRecommendations } from '../../actions/index'


export class RecommendationsScreen extends Component {
  constructor() {
    super()
    this.state = {
      notes: '',
      bookmark: 'bookmark-border',
      recommendation: {}
    }
  }

  componentWillMount() {
    this.setState({recommendation: this.props.navigation.getParam('recommendation')})
  }

  componentDidMount() {
    this.checkBookmark()
    this.props.navigation.setParams({
      recState: this
     })
  }

  static navigationOptions = ({navigation}) => {
    const navThis = navigation.state.params.recState
    return{
    headerStyle: {
        backgroundColor: '#2C2540',
        borderBottomWidth: 0,
        headerTintStyle: '#EE933F',
        headerBackTitle: 'Back'
    },
    headerLeft:(
      <HeaderBackButton 
      tintColor= '#EE933F'
      onPress={()=>{
        navThis.handleUpdateRecommendations()
        navigation.navigate({routeName: 'Home'} )
      }}/>
    )
    }
  };

  checkBookmark = () => {
    if(this.props.allRecommendations.includes(this.state.recommendation)) {
      this.setState({bookmark: 'bookmark'})
    } else {
      this.setState({bookmark: 'bookmark-border'})
    }
  }

  toggleBookmark = () => {
    if(this.state.bookmark === 'bookmark-border') {
      this.setState({bookmark: 'bookmark'})
    } else {
      this.setState({bookmark: 'bookmark-border'})
    }
  }

  handleUpdateRecommendations = () => {
    const isSaved = this.props.allRecommendations.includes(this.state.recommendation)
    if(this.state.bookmark === 'bookmark' && !isSaved) {
      const newRecs = [this.props.allRecommendations, this.state.recommendation]
      this.props.updateRecommendations(newRecs)
      console.log('Add')
      //toggle bookmark to bookmark and send post request
    } else if(this.state.bookmark === 'bookmark-border' && isSaved) {
      const newRecs = this.props.allRecommendations.filter(rec => {
        return rec !== this.state.recommendation
      })
      this.props.updateRecommendations(newRecs)
      console.log('delete')
      //toggle bookmark to bookmark-border and send delete request
    }
    // this.checkBookmark()
  }

  handleChange = (e) => {
    this.setState({notes: e.nativeEvent.text})
  }

  render() {
    const {name, image, rating, reviewCount, categories, coordinates, price, hours} = this.state.recommendation
    const categoryText = categories.join(', ')
    return(
      <ScrollView style={styles.container}>
        <View >
          <View style={styles.titleInfo}>
            <Text style={styles.title}>{name}</Text>
            <View style={styles.ratingSection}>
              <Text style={styles.text}>
                {rating}/5 ({reviewCount})
                <Image
                  source={require("../../images/Yelp_trademark_RGB_outline.png")}
                  style={{ width: 70, height: 30, marginTop: -5 }}
                />
              </Text>
              <Icon 
                name={this.state.bookmark} 
                size={35} 
                color={'#EE933F'} 
                onPress={this.toggleBookmark}  
              />
            </View>
            <Text style={styles.text}>{categoryText}</Text>
          </View>
          <Image source={{uri: image}} style={styles.image}/>
          <View style={styles.info}>
            <View style={styles.t_and_h}>
              <Text style={styles.title}>Price</Text>
              <Text style={styles.text}>{price}</Text>
            </View>
            {/* <View>
              <Text style={styles.title}>Hours</Text>
              <Text style={styles.text}>{hours[0]}</Text>
            </View> */}
          </View>
          <MapView
            style={{flex: 1, height: 300, width: '100%', marginBottom: 20}}
            region={{latitude: coordinates[0], longitude: coordinates[1], latitudeDelta: 0.0922, longitudeDelta: 0.0421}}
            showsUserLocation={true}
            showsCompass={true}
          >
            <Marker 
              coordinate={{latitude: coordinates[0], longitude: coordinates[1], latitudeDelta: 0.0922, longitudeDelta: 0.0421}}
            />
          </MapView>
          <View style={styles.titleInfo}>
            <Text style={styles.title}>Notes</Text>
            <View style={styles.input}>
              <TextInput 
                value={this.state.notes} 
                onChange={this.handleChange}
                editable={true}
                multiline={true}
                style={{padding: 5}}
              />
            </View>
          </View>
          <View style={styles.yelp}>
            <Text style={styles.yelpText}>Powered by</Text>
            <Image
              source={require("../../images/Yelp_trademark_RGB_outline.png")}
              style={{ width: 100, height: 40, marginTop: -15 }}
            />
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2540',
    height: '100%',
    width: '100%',
  },
  titleInfo: {
    marginLeft: 30,
    marginBottom: 15,
  },
  title: {
    color: '#CCC0DD',
    fontSize: 35,
  },
  image: {
    height: 300,
    width: '100%',
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
  },
  text: {
    color: '#CCC0DD',
    fontSize: 20,
    marginBottom: 5,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 30
  },
  t_and_h: {
    alignItems: 'center'
  },
  yelpText: {
    color: "#CCC0DD",
    fontSize: 16
  },
  yelp: {
    height: 50,
    width: '100%',
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 50,
    marginBottom: 50
  },
  input: {
    backgroundColor: 'rgba(204, 192, 221, 0.4)',
    width: '90%',
    borderRadius: 10,
    fontSize: 25
  },
  ratingSection: {
    width: '95%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})

const mapStateToProps = state => ({
  allRecommendations: state.allRecommendations
})

const mapDispatchToProps = dispatch => ({
  updateRecommendations: (rec) => dispatch(updateRecommendations(rec))
})

export default connect(mapStateToProps, mapDispatchToProps)(RecommendationsScreen)