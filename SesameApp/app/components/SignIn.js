import React, { Component } from 'react';
import {
  Text,
  TextInput,
  TouchableHighlight,
  AlertIOS,
  View
} from 'react-native';

var styles = require('../config/styles');
var app = require('./Firebase');
var Button = require('./button');

class SignIn extends Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      errors:[]
    }
  }

  emailSignIn(){
      const email = this.state.email;
      const pass = this.state.password;
      const auth = app.auth();
      const promise = auth.signInWithEmailAndPassword(email, pass).then(user);
      promise.catch(e=>alert(e.message));


      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          userId = user.uid;
          console.log(userId);
          return
        } else {return}
      })
  }


  render() {
    return (
        <View style={{marginTop : 100}}>
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
              Sign In
            </Text>
          </TouchableHighlight>
        </View>
      );
    }
  }
module.exports = SignIn;
