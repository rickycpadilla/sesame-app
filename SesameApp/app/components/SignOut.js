import React, { Component } from 'react';
import {
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AlertIOS,
  NavigatorIOS,
  Image
} from 'react-native';
var styles = require('../config/styles');

class SignOut extends Component {
  constructor(props) {
    super(props);
    this.onSignOut = this.onSignOut.bind(this)
  }

  onSignOut(){
    AsyncStorage.removeItem("userID").then((value) => {
    this.props.navigator.pop();
    }).done();
  }



  render() {

    return (
      <View>
        <TouchableOpacity
          onPress={this.onSignOut}
        >
          <Image
            source={require('../images/signout.png')}
            style={{
              width:25,
              height:18,
              marginTop: -30,
              marginLeft: 20,
              position: 'absolute',

            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

module.exports = SignOut;
