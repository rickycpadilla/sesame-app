import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
var styles = require('../config/styles');

class Onboarding3 extends Component {
  render (){
    return (
        // <Image
        //   style={{width:  Dimensions.get('window').width,
        //     height:  Dimensions.get('window').height
        //
        //   }}
        //   source={require('../images/Onboarding3.png')}
        // />
        <Image
          style={{width:  Dimensions.get('window').width,
            height:  Dimensions.get('window').height

          }}
          source={require('../images/Onboarding3.png')}
        >
          <TouchableOpacity
            style={{position:'absolute', left:0, right:0, bottom:40, width: 600, height: 100,}} />


        </Image>
    )
  }
}

module.exports = Onboarding3
