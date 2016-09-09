import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
var Home = require ('./Home.js')
var Signup = require ('./Sign.js')

class MyLocks extends Component {

  static propTypes = {

  navigator: PropTypes.object.isRequired,
}

  constructor(props, context) {
  super(props, context);
  this.onSignup = this.onSignup.bind(this);
  this.onHome = this.onHome.bind(this);
  
}
onSignup() {
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  //  console.log(this.props.navigator.route);
  this.props.navigator.push({
    title: 'sign up',
    component: Signup
  })
}
onHome() {
  this.props.navigator.popToTop(0)
}
render() {
  return (
    <View style={{marginTop: 20}}>
      <Text>Current Scene: MyLocks</Text>
      <TouchableHighlight onPress={this.onSignup}>
        <Text>Sign up</Text>
      </TouchableHighlight>

      <TouchableHighlight onPress={this.onHome}>
        <Text>Home</Text>
      </TouchableHighlight>
    </View>
  )
}
}
module.exports = MyLocks
