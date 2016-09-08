'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  ScrollView,
  Dimensions,
  StatusBar,
  Image
} from 'react-native';
var styles = require('./app/config/styles');
var TestContainer = require('./app/components/TestContainer');
var MyLocksContainer = require('./app/components/MyLocksContainer');
var OnboardingContainer = require('./app/components/OnboardingContainer')

class SesameApp extends Component {
  render() {
    return (
      <NavigatorIOS
        //style={styles.navigator}
        // DURING DEVELOPMENT - TO TEST ANOTHER SCENE, CHANGE THE COMPONENT BELOW
        // TO THE ONE YOU WANT TO TEST (ie: component: HomeContainer)
        initialRoute={{component: OnboardingContainer, title: 'Sesame'}}/>
    );
  }
}

// const COMP_WIDTH = Dimensions.get('window').width;
//
// var screen = Dimensions.get('window');
//
// var PageControl = require('react-native-page-control');
//
// class SesameApp extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {currentPage: 0};
//   }
//
//   onScroll(e, state){
//     var offsetX = e.nativeEvent.contentOffset.x,
//         pageWidth = screen.width - 10;
//     this.setState({
//       currentPage: Math.floor((offsetX - pageWidth / 2) / pageWidth) + 1
//     });
//   }
//
//   render() {
//
//     return (
//
//         <Image source={require('./app/images/onboardingBg.png')}
//           style={styles.onboardingContainer}
//         >
//           <PageControl style={{position:'absolute', left:0, right:0, top:40}} numberOfPages={3} currentPage={this.state.currentPage} hidesForSinglePage={true} pageIndicatorTintColor='#DDE1E2' indicatorSize={{width:10, height:10}} currentPageIndicatorTintColor='#8B999F' />
//           <ScrollView horizontal={true}
//             decelerationRate={0}
//             snapToInterval={COMP_WIDTH}
//             showsHorizontalScrollIndicator={false}
//             pagingEnabled={false}
//             onScroll={this.onScroll.bind(this)} scrollEventThrottle={16}
//           >
//             <StatusBar hidden={true} />
//             <Onboarding1 />
//             <Onboarding2 />
//             <Onboarding3 />
//           </ScrollView>
//         </Image>
//     );
//   }
// }





AppRegistry.registerComponent('SesameApp', () => SesameApp);
