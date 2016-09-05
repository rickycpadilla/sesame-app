import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
var styles = require('../config/styles');

class LockDetails extends Component {
  render() {
    return (
      <View style={styles.lockContainer}>
        <View style={styles.lockImage}>
          <Text>
          Hi buddy!
          </Text>
        </View>
        <View style={styles.lockDetails}>
          <Text>Home</Text>
          <Text>Front Door</Text>
          <Text>Unlocked</Text>
        </View>
      </View>
    );
  }
}

module.exports = LockDetails;
