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
    AsyncStorage.getItem("loggedIn").then((value) => {
      this.setState({"loggedIn": value, "ready": true});
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
          // Comment out line below to show Nav Bar
          navigationBarHidden={true}
          // DURING DEVELOPMENT - TO TEST ANOTHER SCENE, CHANGE THE COMPONENT BELOW
          // TO THE ONE YOU WANT TO TEST (ie: component: HomeContainer)
          initialRoute={{component: OnboardingContainer, title: 'Sesame'}}/>
      );

    } else {
      return (
        <NavigatorIOS
          style={styles.navigator}
          // Comment out line below to show Nav Bar
          navigationBarHidden={true}
          // DURING DEVELOPMENT - TO TEST ANOTHER SCENE, CHANGE THE COMPONENT BELOW
          // TO THE ONE YOU WANT TO TEST (ie: component: HomeContainer)
          initialRoute={{component: MyLocksContainer, title: 'My Locks'}}/>
      );
    }

  }
}

AppRegistry.registerComponent('SesameApp', () => SesameApp);
