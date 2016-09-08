import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
var styles = require('../config/styles');

class Onboarding3 extends Component {
  render (){
    return (
        <Image
          style={styles.container}
          source={require('../images/Onboarding3.jpg')}
        />
    )
  }
}

module.exports = Onboarding3
