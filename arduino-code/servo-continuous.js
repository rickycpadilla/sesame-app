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
     } else {
          servo.max()
     }
   });

 });
