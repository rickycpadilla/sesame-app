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

  // Scott's code start

  getRef() {
    return firebaseApp.database().ref();
  }

  // Scott's code end


  constructor(props) {
    super(props);
    this.state = { locked: false };
    this.itemsRef = this.getRef().child('items');
  }

  onChange(state) {
    this.setState({
      locked: !this.state.locked
    });
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log(this.state);
    this.itemsRef.push(this.state)


  }


  render() {
    return (
      // <View style={styles.lockContainer} onPress={this.onChange.bind(this)}>
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
            <Text>Unlocked</Text>
          </View>
        </TouchableOpacity>
      // </View>
    );
  }
}

module.exports = LockDetails;
