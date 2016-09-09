import React, { Component } from 'react';
import {
  Text,
  TextInput,
  TouchableHighlight,
  AlertIOS,
  View,
  Image,
  StatusBar,
  AsyncStorage
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

  saveData(value) {
    AsyncStorage.setItem("loggedIn", value);
  }

  emailSignIn(){
      const email = this.state.email;
      const pass = this.state.password;
      const auth = app.auth();
      const that = this;
      const promise = auth.signInWithEmailAndPassword(email, pass);
      promise.then(function(user){
        // that.saveData(true)
        AsyncStorage.setItem("loggedIn", "true");
      })
      .catch(e=>alert(e.message));
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
            placeholder={"  Email"}
          />
          <TextInput
            style={styles.textinput}
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
            secureTextEntry={true}
            placeholder={"  Password"}
          />
          <TouchableHighlight onPress={this.emailSignIn.bind(this)} style={styles.primary_button}>
            <Text style={styles.primary_button_text}>
              SIGN IN
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.underFormContainer}>
          <Text style={{color: '#8B999F', fontWeight: 'bold', letterSpacing: 1}}>Don't have an account?</Text>
        </View>

      </View>
      );
    }
  }
module.exports = SignIn;
