var five = require("johnny-five");
var board = new five.Board();
var firebase = require("firebase");
var config = {
  databaseURL: "https://todo-cc9d9.firebaseio.com/",
  storageBucket: "",
};


firebase.initializeApp(config);
 var database = firebase.database();
 var locked = firebase.database().ref('locked');

 board.on("ready", function() {
   var ledGreen = new five.Led(13);
   var ledRed = new five.Led(12);
   var servo = new five.Servo({
     pin: 10,
     range: [35, 145],
     startAt: 35
   }
   );

   locked.on('value', function(snapshot) {
     var command = snapshot.val().locked
     if (command == true) {
          servo.min();
          ledGreen.off();
          ledRed.on();
     } else {
          servo.max();
          ledGreen.on();
          ledRed.off();
     }
   });

 });
