'use strict';
var React = require('react-native');
var { StyleSheet } = React;

var styles = StyleSheet.create({

    navigator: {flex: 1},

    onboardingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: null,
        height: null
    },

    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 10,
        backgroundColor: '#F1F5F6',
    },

    formContainer: {
        flex: 9,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
        backgroundColor: '#F1F5F6',
        alignItems: 'stretch',
    },

    underFormContainer: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F1F5F6',
    },

    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },

    button: {
        height: 36,
        backgroundColor: '#48BBEC',
        alignSelf: 'stretch',
        justifyContent: 'center'
    },

    saveButton: {
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
    },

    newButton: {
        marginBottom: 0,
        borderRadius: 0,
    },

    lockContainer: {
        flexDirection: 'row',
        marginTop: 60,
        // width: 100,
        padding: 10,
        backgroundColor: '#ffffff',
    },

    lockedImageContainer: {
      backgroundColor: '#FF2D55',
      flex: 1,
      alignItems: 'center'
    },

    unlockedImageContainer: {
      backgroundColor: '#4CD964',
      flex: 1,
      alignItems: 'center'
    },

    lockImage: {
      width: 40,
      height: 40,
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 50,
      marginRight: 50,
      transform: [{rotate: '-90deg'}]
    },


    unlockImage: {
      width: 40,
      height: 40,
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 50,
      marginRight: 50,
    },

    lockDetails: {
      flex: 1,
      marginLeft: 10,
      marginTop: 15
    },

    txt: {
        fontSize: 18,
        marginLeft: 5,
        marginTop: 2,
        color: '#222222',
    },

    completed: {
        color: '#cccccc'
    },

    hr: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        height: 1,
        marginLeft: 0,
        marginRight: 0,
    },
    //Mike code below for form
  textinput: {
     height: 45,
    //  borderColor: null,
    //  borderWidth: 0,
     backgroundColor: 'white',
     marginTop: 10,
   },

   primary_button: {
     alignItems: 'center',
     marginTop: 20,
     padding: 15,
     width: null,
     backgroundColor: '#4CD964',
     borderRadius: 10,
   },

   primary_button_text: {
     color: '#FFF',
     fontSize: 16,
     fontWeight: 'bold',
     letterSpacing: 3
   },

});


module.exports = styles;
