import React, { Component } from 'react';
import {
  Text,
  TextInput,
  TouchableHighlight,
  AlertIOS,
  View,
  Image
} from 'react-native';

var styles = require('../config/styles');
var app = require('./Firebase');
var Button = require('./button');

class SignUp extends Component {

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
      const promise = auth.createUserWithEmailAndPassword(email, pass);
      promise.catch(e=>alert(e.message));
    }

  render() {
    return (
      <View style={{flex: 10}}>
        <View style={styles.formContainer}>

          <TextInput
            style={styles.textinput}
            placeholder={"  Name"}
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
          <TextInput
            style={styles.textinput}
            placeholder={"  Confirm Password"}
          />
          <TouchableHighlight
            onPress={this.emailSignIn.bind(this)}
            style={styles.primary_button}>
            <Text style={styles.primary_button_text}>
              CREATE ACCOUNT
            </Text>
          </TouchableHighlight>
          <Text
            style={{
              color: '#8B999F',
              letterSpacing: 1,
              textAlign: 'center',
              marginTop: 40
            }}>
            By creating an account you agree to the
            <Text style={{fontWeight: 'bold'}}> Terms of Use.</Text>
          </Text>

        </View>
        <View style={styles.underFormContainer}>
          <Text style={{color: '#8B999F', fontWeight: 'bold', letterSpacing: 1}}>
            Already have an account?
          </Text>
        </View>
      </View>
      );
    }
  }
module.exports = SignUp;
