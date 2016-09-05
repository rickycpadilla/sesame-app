import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
var styles = require('../config/styles');

class TestContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Hi buddy!
        </Text>
        <Text>
          If you want to change what is showing here, go to index.ios.js
        </Text>
        <Text>
          and update the selected component on line 21.
        </Text>
        <Text>
          Just make sure to change it back to "TestContainer" once you're done testing.
        </Text>
      </View>
    );
  }
}

module.exports = TestContainer;
