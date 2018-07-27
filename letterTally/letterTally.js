// // 31. Given a string, return an object containing tallies of each letter.
// // letterTally('potato'); // {p:1, o:2, t:2, a:1}
// var letterTally = function(str, obj) {
//
//   var length = str.length;
//   var current = str.charAt(0);
//   if (length === 0) {
//     return obj;
//   } else if (obj[current]) {
//     obj[current] ++;
//   } else {
//     obj[current] = 1;
//   }
//
// return letterTally(str.slice(1), obj);
// };

// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str) {
  var arr = str.split("");
  console.log(arr);
  var objTally = arr.reduce(function(acc,curr){
    if(curr in acc){
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  },{})
  return objTally;
};

// // letterTally('potato'); // {p:1, o:2, t:2, a:1}
// var letterTally = function(str, obj) {
//   if (str.length === 0) {
//     obj = [];
//     return Object.keys(obj);
//   }
//   for (var key in obj) {
//     if (str[0] === obj[key]) {
//       obj[str[0]]++
//     } else {
//       obj[str[0]] = 1;
//     }
//   }
//   return letterTally(str.slice(1),obj);
// };

// // letterTally('potato'); // {p:1, o:2, t:2, a:1}
// var letterTally = function(str, obj) {
//   if (Object.keys(obj).length === str.length) {
//     return obj;
//   }
//   for (var char of str) {
//     obj.char = 0;
//   }
//     obj.char++;
//   // for (var key in obj) {
//   //   if (key === char) {
//   //     obj.key += 1;
//   //   }
//   // }
//   letterTally(str, obj);
//   };
