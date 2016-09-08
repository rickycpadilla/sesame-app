import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  NavigatorIOS,
  TouchableWithoutFeedback
} from 'react-native';
var styles = require('../config/styles');

var Onboarding1 = React.createClass({

  render (){
    return (

        <Image
          style={styles.container}
          onPress={this._handleChangePage}
          source={require('../images/Onboarding1.jpg')}
        />
    )
  }
})

module.exports = Onboarding1
