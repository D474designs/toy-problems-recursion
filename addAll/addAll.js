/*Add up all numbers in the list. [2,7,8,3,1,4] Returns 25*/

// create sum function
var add = function(array) {
  // if input is empty array return 0
  if (array.length === 0) {
    return 0;
  }
  // add i to parameters as starting value
  function sum(array, i){
    // if array has only one value return value
    if (i === array.length-1) {
      return array[i];
    }
    // recursively call sum function
      return array[i] + sum(array, i+1);
    }
    // return reduced array
      return sum(array, 0);
};

// var add = (array) => {
//   var sum = [];
//   var currentValue = 0;
//   var reducer = (accumulator, currentValue) => accumulator + currentValue;
//   if (Array.isArray(array)) {
//       return sum.reduce(reducer);
//   }
//   sum.push(array);
//   return sum;
// };

// var add = function(array) {
//   /* START SOLUTION */
//   // create placeholder for sum
//   var sum = 0;
//   var i = 0;
//   // iterate through array and reduce values
//   // if array index length reached return sum
//   if (array[i] === array[array.length]) {
//     sum = sum + array[i];
//     return sum;
//   // return sum plus recursion through array
//   } else {
//     sum = sum + add(array[i]);
//     i++;
//   }
//   /* END SOLUTION */
// };
