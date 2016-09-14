import React, { Component } from 'react';
import {
  AsyncStorage,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  AlertIOS,
  View,
  Image
} from 'react-native';
var styles = require('../config/styles');
var app = require('./Firebase');
var Button = require('./button');
var LocksContainer = require('./MyLocksContainer');

class SignUp extends Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      errors:[]
    }
  }

  SignIn(){
    this.props.navigator.pop()
  }

  emailSignUp(){
    const email = this.state.email;
    const pass = this.state.password;
    const userName = this.state.userName;
    const auth = app.auth();
    const promise = auth.createUserWithEmailAndPassword(email, pass).then(function(user){
      firebase.database().ref('users/'+user.uid).set({locked : true, name : userName})
      AsyncStorage.setItem("userID", user.uid);
      this.props.navigator.push({
      title: 'Lock Details',
      component: LocksContainer,
    })
  }.bind(this)).catch(e=>alert(e.message));
  }

  render() {
    return (
      <View style={{flex: 10}}>
        <View style={styles.formContainer}>

          <TextInput
            style={styles.textinput}
            onChangeText={(text) => this.setState({userName: text})}
            value={this.state.userName}
            placeholder={"Name"}
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
          <TextInput
            style={styles.textinput}
            secureTextEntry={true}
            placeholder={"Confirm Password"}
          />
          <TouchableHighlight
            onPress={this.emailSignUp.bind(this)}
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
          <TouchableOpacity onPress={this.SignIn.bind(this)}>
            <Text style={{color: '#8B999F', fontWeight: 'bold', letterSpacing: 1}}>
              Already have an account?
            </Text>
          </TouchableOpacity>

        </View>
      </View>
      );
    }
  }
module.exports = SignUp;
