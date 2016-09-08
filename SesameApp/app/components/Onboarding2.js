import React, { Component } from 'react';
import {
  View,
  Image,
  Dimensions
} from 'react-native';
var screen = Dimensions.get('window');

var Onboarding2 = React.createClass({
  render (){
    return (
      <Image
        style={{width: screen.width, height: screen.height}}
        source={require('../images/Onboarding2.png')}
      />
    )
  }
})

module.exports = Onboarding2
