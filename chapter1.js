// looping triangle

for (var i = 0; i <= 8 ; ++i) {
  var string = "########";
  console.log(string.slice(0,i));
}

// fizz buzz

for (var i = 1; i <= 100; i++) {
  if (i/3%5 === 0 ) {
    console.log("FizzBuzz");
  }
  else if (i%5 === 0) {
    console.log ("Buzz");
  }
  else if (i%3 === 0) {
   console.log("Fizz");
 }
  else {
    console.log(i);
  };
};

// chess board

var size = 8;
var chess_board = "";
for (var i = 0; i < size/2; i++) {
  for (var j = 0; j < (size/2 ); j++) {
    chess_board += "# ";
  };
  chess_board += "\n";
  for (var k = 0; k < size/2; k++) {
    chess_board += " #";
  };
  chess_board += "\n";
};
console.log(chess_board.substring(0, chess_board.length - 1))
