import React, { Component } from 'react';
import {
  View,
  Image,
  Dimensions
} from 'react-native';
var screen = Dimensions.get('window');

var Onboarding1 = React.createClass({
  render (){
    return (
      <Image
        style={{width: screen.width, height: screen.height}}
        source={require('../images/Onboarding1.png')}
      />
    )
  }
})

module.exports = Onboarding1
