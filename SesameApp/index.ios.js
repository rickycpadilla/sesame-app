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

  constructor(props){
    super(props);
    this.state = {navigationBarHidden: true}
  }

  render() {
    return (
      <NavigatorIOS
        style={styles.navigator}
        navigationBarHidden={this.state.navigationBarHidden}        // DURING DEVELOPMENT - TO TEST ANOTHER SCENE, CHANGE THE COMPONENT BELOW
        initialRoute={{component: OnboardingContainer, title: 'Sesame'}}/>
    );
  }
}

AppRegistry.registerComponent('SesameApp', () => SesameApp);
