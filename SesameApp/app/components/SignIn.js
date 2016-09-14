import React, { Component } from 'react';
import {
  AsyncStorage,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  AlertIOS,
  View,
  Image,
  StatusBar
} from 'react-native';
var styles = require('../config/styles');
var app = require('./Firebase');
var Button = require('./button');
var Signup = require('./SignUp');
var LocksContainer = require('./MyLocksContainer');

class SignIn extends Component {

  constructor(props){
    super(props);
    this.onSignup = this.onSignup.bind(this)
    this.emailSignIn = this.emailSignIn.bind(this)
    this.state = {
      email: '',
      password: '',
      errors:[],
      navbarHide: true,
    }
  }
  onSignup() {
    this.props.navigator.push({
    title: 'sign up',
    component: Signup
  })
}
  emailSignIn(){
      const email = this.state.email;
      const pass = this.state.password;
      const auth = app.auth();
      const promise = auth.signInWithEmailAndPassword(email, pass).then(function(user){
        AsyncStorage.setItem("userID", user.uid)
        this.props.navigator.push({
        title: 'LocksContainer',
        component: LocksContainer,
      });
      this.setState({"email": "", "password": "", "navbarHide": false});
    }.bind(this)).catch(function(e){
        alert(e)
      });
       }

  render() {
    return (
      <View style={{flex: 10}}>
        <StatusBar hidden={false} />
        <View style={styles.formContainer}>
          <Image
            style={{resizeMode:'contain', height: 60, width: 200, alignSelf: 'center', marginBottom: 50}}
            source={require('../images/sesame.png')}
          />
          <TextInput
            style={styles.textinput}
            onChangeText={(text) => this.setState({email: text})}
            value={this.state.email}
            placeholder={"Email"}
          />
          <TextInput
            style={styles.textinput}
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
            secureTextEntry={true}
            placeholder={"Password"}
          />
          <TouchableHighlight onPress={this.emailSignIn.bind(this)} style={styles.primary_button}>
            <Text style={styles.primary_button_text}>
              SIGN IN
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.underFormContainer}>
          <TouchableOpacity onPress={this.onSignup.bind(this)}>
            <Text style={{color: '#8B999F', fontWeight: 'bold', letterSpacing: 1}}>Don't have an account?</Text>
            </TouchableOpacity >
          </View>

        </View>
      );
    }
  }

module.exports = SignIn;
