'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  AsyncStorage
} from 'react-native';
var styles = require('./app/config/styles');
var MyLocksContainer = require('./app/components/MyLocksContainer');
var OnboardingContainer = require('./app/components/OnboardingContainer');

class SesameApp extends Component {
  componentDidMount() {
    AsyncStorage.getItem("userID").then((value) => {
      this.setState({"userID": value, "ready": true});
    }).done();
  }

  constructor(props){
    super(props);
    this.state = {"ready": false}
  }

  render() {
    if (this.state.ready === false){
      return null
    } else if(this.state.loggedIn !== "true"){
      return (
        <NavigatorIOS
          style={styles.navigator}
          navigationBarHidden={true}
          initialRoute={{component: OnboardingContainer, title: 'Sesame'}}/>
      );

    } else {
      return (
        <NavigatorIOS
          style={styles.navigator}
          navigationBarHidden={true}
          initialRoute={{component: OnboardingContainer, title: 'My Locks'}}/>
      );
    }
  }
}

AppRegistry.registerComponent('SesameApp', () => SesameApp);
