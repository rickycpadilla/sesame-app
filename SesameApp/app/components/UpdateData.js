import React, { Component } from 'react';
import {
  Text,
  TextInput,
  TouchableHighlight,
  AlertIOS,
  Switch,
  View
} from 'react-native';

var styles = require('../config/styles');
var app = require('./Firebase');
var Button = require('./button');

class Update extends Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      errors:[]
    }
  }

  updateIt(){
      const x = this.state.location;
      var ref = app.database().ref('locked');
      ref.set({location, x})
    }

  render() {
    return (
        <View style={{marginTop : 100}}>
          <TextInput
            style={styles.textinput}
            onChangeText={(text) => this.setState({location: text})}
            value={this.state.location}
            placeholder={"location"}
          />
          <TouchableHighlight onPress={this.updateIt.bind(this)} style={styles.primary_button}>
            <Text style={styles.primary_button_text}>
              Send
            </Text>
          </TouchableHighlight>
        </View>
      );
    }
  }
module.exports = Update;

  
