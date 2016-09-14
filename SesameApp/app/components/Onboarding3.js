import React, { Component } from 'react';
import {
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
var screen = Dimensions.get('window');
var SignIn = require('./SignIn')

class Onboarding3 extends Component {
  render (){
    return (
      <View>
        <Image
          style={{width:  screen.width, height:  screen.height * .88}}
          source={require('../images/Onboarding3.1.png')}
        />
        <TouchableOpacity onPress={this.props.onSignIn}>
          <Image
            style={{width:  screen.width, height:  screen.height * .12}}
            source={require('../images/Onboarding3.2.png')}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

module.exports = Onboarding3
