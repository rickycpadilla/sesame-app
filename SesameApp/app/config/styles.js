'use strict';
var React = require('react-native');
var { StyleSheet } = React;

var styles = StyleSheet.create({

    navigator: {flex: 1},

    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 10,
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

    lockImageContainer: {
      backgroundColor: '#4CD964'

    },

    lockImage: {
      width: 40,
      height: 40,
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 50,
      marginRight: 50,
    },

    lockDetails: {

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
    }

});


module.exports = styles;
