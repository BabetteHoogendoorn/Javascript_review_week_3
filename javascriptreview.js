// write a function that takes in three parameters and returns the sum of those three parameters

function sum(num1, num2){
  console.log ("The sum is " + (num1 + num2));
}
sum(3,4); // --> answer is 7

// given a string, create a function that returns the last character in that string.
// examples:
// "cattywampus" --> s

function lastCharacter (string) {
  for (i=0; i<string.length; i++)
  if (i= string.length-1) {
    console.log (string[i])
  }
}
lastCharacter("aap");


// write a function that takes in one parameter and returns the cube of that parameter
// examples:
// 3 --> 27
// 4 --> 64

function cube (i) {
  return("The cube is: " + i * i * i);
}
console.log(cube(4));

// define a function that takes in a string and reverses it. you are not allowed to
// call the "reverse" function (or any other string functions)

function reverse(word) {
  var string = '';
  for (var i = word.length - 1; i >= 0; i--)
    string += word[i];
  return string;
}
console.log (reverse( "joe hoi doei" ));

// write a function that takes in two arrays of the same length as parameters. From those two arrays,
// create, then return an object which contains the elements of the first array as keys, and the
// elements of the second array as values.
// examples:
// ["exciting", "exotic"], ["markets", "britain"] --> { exciting: "markets", exotic: "britain" }
// ["a", "b", "c"], ["x", "y", "z"] --> { a: "x", b: "y", c: "z" }

function twoArrays ( hello, goodbye ) {
  var something = {}

  for(var i=0; i < hello.length; i++) {
    something[  hello[i]  ] = goodbye[i]
  }
  return something
}
console.log (twoArrays(["a", "b", "c"], ["1", "2", "3"]));

// Given an object with keys and values, create two arrays: one which contains the object's keys,
// and one which contains the object's values. Wrap this into a function which takes in one object
// that contains keys and values, and returns a different object that contains two keys. The first key
// should be named "keys" and will have the first array as a value. The second key should be named
// "values" and will have the second array as a value.
// examples:
// { exciting: "markets", exotic: "britain" } --> { keys: ["exciting", "exotic"], values: ["markets", "britain"] }
// { a: "x", b: "y", c: "z" } --> { keys: ["a", "b", "c"], values: ["x", "y", "z"] }

var object = {
	nice: "shoes",
	great: "shirt"
};

function orden (object) {
	var newObject = {'keys': [], 'values': []};
	for (var add in object) {
		newObject.keys.push(add);
		newObject.values.push(object[add]);
	};
	return newObject;
};

console.log(orden(object));
