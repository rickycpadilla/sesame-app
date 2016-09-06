var five = require("johnny-five");
var board = new five.Board();
var firebase = require("firebase");
var config = {
  databaseURL: "https://todo-cc9d9.firebaseio.com/",
  storageBucket: "",
};


firebase.initializeApp(config);
 var database = firebase.database();
 var items = firebase.database().ref('items');

 board.on("ready", function() {
   var servo = new five.Servo({
     pin: 10,
     range: [35, 145],
     startAt: 35
   }
   );

   items.on('value', function(snapshot) {
     var arr = Object.keys(snapshot.val())
     var command = snapshot.val()[arr[arr.length - 1]].locked
     console.log(command);
     if (command == true) {
          servo.min();
     } else {
          servo.max()
     }
   });

 });
