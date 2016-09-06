import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
var styles = require('../config/styles');
const firebase = require('firebase');

// Initialize Firebase
const firebaseConfig = {
  authDomain: "",
  databaseURL: "https://todo-cc9d9.firebaseio.com/",
  storageBucket: "",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

class LockDetails extends Component {

  getRef() {
    return firebaseApp.database().ref('locked');
  }

  constructor(props) {
    super(props);
    this.state = {locked: undefined};
    this.state.ready = false;
    this.getRef().once('value', function(snapshot) {
      this.state.locked = snapshot.child("locked").val();
      this.state.ready = true;
      this.forceUpdate()
    }.bind(this))
  }

  onChange(state) {
    this.setState({
      locked: !this.state.locked
    }, function(){
      this.getRef().update({locked: this.state.locked})
    });
  }

  render() {
    if (!this.state.ready){
      return null
    }
    else {
      return (
          <TouchableOpacity style={styles.lockContainer} onPress={this.onChange.bind(this)}>
            <View style={styles.lockImageContainer}>
              <Image
                source={require('../images/WhiteLock.png')}
                style={styles.lockImage}
              />
            </View>
            <View style={styles.lockDetails}>
              <Text>Home</Text>
              <Text>Front Door</Text>
              <Text>Locked: {this.state.locked ? 'Locked' : 'Unlocked'}</Text>
            </View>
          </TouchableOpacity>
      );
    }
  }
}

module.exports = LockDetails;
