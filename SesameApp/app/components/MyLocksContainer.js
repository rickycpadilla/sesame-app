import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
var styles = require('../config/styles');
var LockDetails = require('./LockDetails');

class MyLocksContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={false} />
        <LockDetails />
      </View>
    );
  }
}

module.exports = MyLocksContainer;
