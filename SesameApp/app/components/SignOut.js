import React, { Component } from 'react';
import {
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AlertIOS,
  NavigatorIOS
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
        <View style={styles.sigOutContainer}>
          <TouchableOpacity
            onPress={this.onSignOut}
            >
            <Text style={{color: '#8B999F', fontWeight: 'bold', letterSpacing: 1}}>
              Sign out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

module.exports = SignOut;
