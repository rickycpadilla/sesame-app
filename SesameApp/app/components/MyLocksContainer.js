import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';
var styles = require('../config/styles');
var LockDetails = require('./LockDetails');
var SignOut = require('./SignOut')

class MyLocksContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LockDetails />
        <SignOut navigator={this.props.navigator}/>
      </View>

    );
  }
}

module.exports = MyLocksContainer;
