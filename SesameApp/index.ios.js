'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';
var styles = require('./app/config/styles');
var TestContainer = require('./app/components/TestContainer');
var OnboardingContainer = require('./app/components/OnboardingContainer');


class SesameApp extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.navigator}
        // Comment out line below to show Nav Bar
        navigationBarHidden={true}
        // DURING DEVELOPMENT - TO TEST ANOTHER SCENE, CHANGE THE COMPONENT BELOW
        // TO THE ONE YOU WANT TO TEST (ie: component: HomeContainer)
        initialRoute={{component: OnboardingContainer, title: 'Sesame'}}/>
    );
  }
}

AppRegistry.registerComponent('SesameApp', () => SesameApp);
