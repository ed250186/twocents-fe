import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>I like turtles!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2540',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#EE933F',
    fontSize: 30,
  }
});
