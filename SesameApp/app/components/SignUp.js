import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
var styles = require('../config/styles');


class SignUp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.LockDetails}>

          <Text>Front Door</Text>
            <TextInput
                defaultValue="iloveturtles"
                secureTextEntry={true}
                style={styles.singleLine}
            />
          </View>
      </View>
    );
  }
}

module.exports = SignUp;
