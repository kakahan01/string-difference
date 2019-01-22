Basic usage. Basic scope. Easy to use.

**Warning: Compared 2 string should be at the same length. It will say you which chars are different.**

```js
//Basic Usage
var stringDifference = require('string-difference');

var difference = new stringDifference().calculateDifference("string1", "string2");

console.log(difference); //Expected Output: [true, true, true, true, true, true, false]

//Getting the ratio ( difference count / char count )

var ratio = new stringDifference.ratio(difference);

//Finding the difference
var index = difference.indexOf(false);

console.log("string1".charAt(index)); //Expected Output: 1
console.log("string2".charAt(index)); //Expected Output: 2

//Difference: 1-2
```

A find the difference puzzle solver!
