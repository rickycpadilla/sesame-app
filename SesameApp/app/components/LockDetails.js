import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  AlertIOS
} from 'react-native';
var styles = require('../config/styles');

const firebase = require('firebase');

import PasscodeAuth from 'react-native-passcode-auth';

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
    // GETTING ERRORS?
    // To make this not throw errors, comment out the 2 snippets below
    // that are associated with touch ID
    // FROM HERE >>>>>>>
    // PasscodeAuth.authenticate('to access your lock')
    // .then(success => {
    //   this.state.locked ?  AlertIOS.alert('Successfully Unlocked') : AlertIOS.alert('Successfully Locked')
      // <<<<<<<< TO HERE

      this.setState({
        locked: !this.state.locked
      }, function(){
        this.getRef().update({locked: this.state.locked})
      });

      // AND FROM HERE >>>>>>>
    // })
    // .catch(error => {
    //   AlertIOS.alert('Authentication Failed');
    // });
    // <<<<<<< TO HERE
  }

  render() {
    if (!this.state.ready){
      return null
    }
    else {
      return (
          <TouchableOpacity style={styles.lockContainer} onPress={this.onChange.bind(this)}>
            <View style={this.state.locked ? styles.lockedImageContainer : styles.unlockedImageContainer}>
              <Image
                source={require('../images/WhiteLock.png')}
                style={this.state.locked ? styles.lockImage : styles.unlockImage}
              />
            </View>
            <View style={styles.lockDetails}>
              <Text>Home</Text>
              <Text>Front Door</Text>
              <Text>{this.state.locked ? 'Locked' : 'Unlocked'}</Text>
            </View>
          </TouchableOpacity>
      );
    }
  }
}

module.exports = LockDetails;
