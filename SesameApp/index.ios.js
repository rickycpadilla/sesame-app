'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  Navigator,
  TouchableHighlight,
  TouchableWithoutFeedback,
  ScrollView,
  Dimensions
} from 'react-native';
var styles = require('./app/config/styles');
var TestContainer = require('./app/components/TestContainer');
var MyLocksContainer = require('./app/components/MyLocksContainer');
var Onboarding1 = require('./app/components/Onboarding1');
var Onboarding2 = require('./app/components/Onboarding2');
var Onboarding3 = require('./app/components/Onboarding3');

// class SesameApp extends Component {
//   render() {
//     return (
//       <NavigatorIOS
//         style={styles.navigator}
//         // DURING DEVELOPMENT - TO TEST ANOTHER SCENE, CHANGE THE COMPONENT BELOW
//         // TO THE ONE YOU WANT TO TEST (ie: component: HomeContainer)
//         initialRoute={{component: MyLocksContainer, title: 'Sesame'}}/>
//     );
//   }
// }

const COMP_WIDTH = Dimensions.get('window').width;

class SesameApp extends Component {
  render() {
    return (
      <ScrollView horizontal={true}
        decelerationRate={0}
        snapToInterval={COMP_WIDTH}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={false}
        //snapToAlignment="start"
      >
        <Onboarding1 />
        <Onboarding2 />
        <Onboarding3 />
      </ScrollView>
    );
  }
}





AppRegistry.registerComponent('SesameApp', () => SesameApp);
