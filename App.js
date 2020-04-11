import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style = {{marginTop: 10, width: "50%", marginLeft: 100}}>
        <Text style={{marginTop: 100}}>
         There are some components of HTML and Javascript that are there in react.
         Both have tags and have styling features. However instead of giving the 
         file name, we give the components that we wish to derive.
        </Text>
      </View>
    );
  }
}