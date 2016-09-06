'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} from 'react-native';
var styles = require('./app/config/styles');
var TestContainer = require('./app/components/TestContainer');
var MyLocksContainer = require('./app/components/MyLocksContainer');
var SignUp = require('./app/components/SignUp')

class SesameApp extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.navigator}
        // DURING DEVELOPMENT - TO TEST ANOTHER SCENE, CHANGE THE COMPONENT BELOW
        // TO THE ONE YOU WANT TO TEST (ie: component: HomeContainer)
        initialRoute={{component: SignUp, title: 'Sesame'}}/>
    );
  }
}

AppRegistry.registerComponent('SesameApp', () => SesameApp);
