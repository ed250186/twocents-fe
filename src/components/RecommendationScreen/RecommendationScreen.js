import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';


export class RecommendationsScreen extends Component {
  constructor() {
    super()
    this.state = {
      notes: ''
    }
  }
  static navigationOptions = {
    headerStyle: {
        backgroundColor: '#2C2540',
        borderBottomWidth: 0,
    },
  };

  handleChange = (e) => {
    this.setState({notes: e.nativeEvent.text})
  }

  render() {
    const { navigation } = this.props;
    const recommendation = navigation.getParam('recommendation');
    const {name, image, phone, rating, reviewCount, categories, coordinates, price, hours} = recommendation
    const categoryText = categories.join(', ')
    return(
      <ScrollView style={styles.container}>
        <View >
          <View style={styles.titleInfo}>
            <Text style={styles.title}>{name}</Text>
            <View>
              <Text style={styles.text}>
                {reviewCount} reviews on
                <Image
                  source={require("../../images/Yelp_trademark_RGB_outline.png")}
                  style={{ width: 70, height: 30, marginTop: -5 }}
                />
              </Text>
            </View>
            <Text style={styles.text}>{categoryText}</Text>
          </View>
          <Image source={{uri: image}} style={styles.image}/>
          <View style={styles.info}>
            <View style={styles.t_and_h}>
              <Text style={styles.title}>Price</Text>
              <Text style={styles.text}>{price}</Text>
            </View>
            <View>
              <Text style={styles.title}>Hours</Text>
              <Text style={styles.text}>{hours[0]}</Text>
            </View>
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
  }
})