import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  NavigatorIOS,
  Dimensions
} from 'react-native';
var styles = require('../config/styles');

var Onboarding2 = React.createClass({

  render (){
    return (
        <Image
          style={{width:  Dimensions.get('window').width,
            height:  Dimensions.get('window').height

          }}
          source={require('../images/Onboarding2.png')}
        />
    )
  }
})

module.exports = Onboarding2
