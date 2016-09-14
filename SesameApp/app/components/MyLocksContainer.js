import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';
var styles = require('../config/styles');
var LockDetails = require('./LockDetails');
var SignOut = require('./SignOut')

class MyLocksContainer extends Component {
  render() {
    return (
      <View style={{flex: 11, backgroundColor: '#F1F5F6'}}>
        <StatusBar hidden={false} />
        <View style={styles.navbar}>
          <Text style={styles.navbarText}>My Locks</Text>
        </View>
        <SignOut navigator={this.props.navigator}/>
        <View style={styles.container}>
          <LockDetails />
        </View>
        <TouchableOpacity>
          <Text style={styles.addLock}>
            + Add a Lock
          </Text>
          </TouchableOpacity>
      </View>
    );
  }
}

module.exports = MyLocksContainer;
