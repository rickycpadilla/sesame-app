import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  NavigatorIOS,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native';
var styles = require('../config/styles');

var Onboarding1 = React.createClass({

  render (){
    return (

        <Image
          style={{width:  Dimensions.get('window').width,
            height:  Dimensions.get('window').height

          }}

          source={require('../images/Onboarding1.png')}
        />
    )
  }
})

module.exports = Onboarding1
