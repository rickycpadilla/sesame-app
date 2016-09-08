import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  NavigatorIOS
} from 'react-native';
var styles = require('../config/styles');

var Onboarding2 = React.createClass({

  render (){
    return (
        <Image
          style={styles.container}
          onPress={this._handleChangePage}
          source={require('../images/Onboarding2.jpg')}
        />
    )
  }
})

module.exports = Onboarding2
