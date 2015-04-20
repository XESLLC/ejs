// minimum
console.log ("-----minimum-----");
function min(arg1, arg2) {
  if (arg1 < arg2) {
    return arg1;
  }
  else {
    return arg2;
  };

};
console.log(min(1,2));

//recursion
console.log ("-----recursion-----");
function is_even(number) {
  if (number === 0) {
    console.log("true");
    return true;
  }
  else if (Math.abs(number) === 1) {
    console.log("false");
    return false;
  }
  else {
    is_even(Math.abs(number)-2);
  };
}
is_even(50);
is_even(75);
is_even(-1);

// bean counting

console.log ("-----bean counting-----");
var countChar = function (string, char) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === char) {
      count += 1;
    };
  };
  console.log(count);
  return count;
};

console.log("Blueberry Basalmic");
countChar("Blueberry Basalmic", "B");

console.log ("-----bean counting-----");
var countBs = function (string) {
  countChar(string, "B");
};

console.log("Blueberry Basalmic");
countBs("Blueberry Basalmic");
