import React, { Component } from 'react';
import {
  AsyncStorage,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  AlertIOS
} from 'react-native';
var styles = require('../config/styles');
var app = require('./Firebase')

import PasscodeAuth from 'react-native-passcode-auth';


class LockDetails extends Component {



  constructor(props) {
    super(props);
    this.state = {locked: undefined};
    this.state.ready = false;
  }

  componentWillMount() {

    AsyncStorage.getItem("userID").then((value) => {
      app.database().ref('users/' + value).once('value', function(snapshot) {
      this.setState({locked: snapshot.child("locked").val()});
      this.setState({ready: true})
    }.bind(this))
    }).done()
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
        AsyncStorage.getItem("userID").then((value) => {
          app.database().ref('users/' + value).update({locked: this.state.locked})
        }).done()
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
              <Text style={{color: '#4A4A4A',}}>Home</Text>
              <Text
                style={{
                  color: '#4A4A4A',
                  fontWeight: 'bold',
                  fontSize: 20
                }}>Front Door</Text>
              {this.state.locked ?
                <Text style={{color: '#FF2D55'}}>Locked</Text>
                  : <Text style={{color: '#4CD964'}}>Unlocked</Text>}
            </View>
          </TouchableOpacity>
      );
    }
  }
}

module.exports = LockDetails;
