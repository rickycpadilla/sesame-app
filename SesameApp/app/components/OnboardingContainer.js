'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  StatusBar,
  Image,
  Text
} from 'react-native';
var styles = require('../config/styles');
var Onboarding1 = require('./Onboarding1');
var Onboarding2 = require('./Onboarding2');
var Onboarding3 = require('./Onboarding3');
var SignIn = require('./SignIn');
var screen = Dimensions.get('window');
var PageControl = require('react-native-page-control');

class OnboardingContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.onSignIn = this.onSignIn.bind(this);
    this.state = {currentPage: 0};
  }

  onSignIn() {
  this.props.navigator.push({
    title: 'Sign In',
    component: SignIn
  })
  }

  onScroll(e, state){
    var offsetX = e.nativeEvent.contentOffset.x,
        pageWidth = screen.width - 10;
    this.setState({
      currentPage: Math.floor((offsetX - pageWidth / 2) / pageWidth) + 1
    });
  }

  render() {
    return (
        <Image source={require('../images/onboardingBg.png')}
          style={styles.onboardingContainer}
        >
          <PageControl
            style={{position:'absolute', left:0, right:0, top:40}}
            numberOfPages={3} currentPage={this.state.currentPage}
            hidesForSinglePage={true}
            pageIndicatorTintColor='#DDE1E2'
            indicatorSize={{width:10, height:10}}
            currentPageIndicatorTintColor='#8B999F' />
          <ScrollView horizontal={true}
            decelerationRate={0}
            snapToInterval={screen.width}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={false}
            onScroll={this.onScroll.bind(this)} scrollEventThrottle={16}
          >
            <StatusBar hidden={true} />
            <Onboarding1 />
            <Onboarding2 />
            <Onboarding3
              onSignIn={this.onSignIn}

               />
          </ScrollView>
        </Image>
    );
  }
}

module.exports = OnboardingContainer
