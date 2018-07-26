// 33. Augument every element in a list with a new value where each element is an array
// itself.

// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]

// var augmentElements = function(array, aug, i) {
//   if (i < array.length) {
//     array[i].push(aug);
//     // i++;
//     augmentElements(array, aug, i + 1);
//   }
//   // else if (i === array.length) {
//   //   return array;
//   // }
//   return array;
//   // console.log(array);
// };

var augmentElements = function(array, aug) {
  if (array.length !== 0) {
    array[0].push(aug);
    augmentElements(array.slice(1), aug);
  }
  return array;
};

// // augmentElements([[],[3],[7]], 5);
// // [[5],[3,5],[7,5]]
// var augmentElements = function(array, aug) {
//   var newArray = []
//
//   if(array.length === 0){
//     return []
//   }
//
//   newArray.push(array.splice(0, 1)[0])
//   newArray[0].push(aug)
//   return  newArray.concat(augmentElements(array, aug))
// };

// var augmentElements = function(array, aug) {
//   var i = 0;
//   if (i < array.length) {
//     array[i].push(aug);
//     i++;
//     augmentElements(array, aug);
//   }
//   return array;
// };

//   var i = 0;
//   var newArray = [];
//   if (array.length === 0) {
//     return newArray;
//   }
//   else if (array.length === 1) {
//     return array.concat(aug);
//   }
//   newArray.push(array[i]);
//   newArray[i].push(aug);
//   i++;
//   augmentElements(array, aug);
// };

//   if (element === array.length) {
//     return array;
//   }
//   array.map(element => element.concat(aug));
//   augmentElements(array, aug);
// };

// var augmentElements = function(array, aug) {
//   var i = 0;
//   if (Array.isArray(array[i])) {
//     return array[i].concat[aug];
//     i++;
//     augmentElements(array, aug);
//   } else {
//     return array;
//   }
// };

// var augmentElements = function(array, aug) {
//     if(array.length===1) return array[0].concat(aug);
//       return [array[0].concat(aug)].concat(augmentElements(array.slice(1), aug));
// };

// // create placeholder array
//   var result = [];

  // if (!Array.isArray(array[i])) {
  //   result.push[array[i]];
  //   i++;
  // }

  // var augmentElements = function(array, aug, i) {
  //
  // var newArray = [];
  // if (i < array.length) {
  //   newArray.push(array[i]);
  //   newArray[i].concat(aug);
  //   augmentElements(array, aug, i + 1);
  // } else {
  //   return newArray;
  // }
  // };

  // var augmentElements = function(array, aug) {
  //   var i = 0;
  //   var newArray = [];
  //   if (i < array.length) {
  //     newArray.push(array[i]);
  //     newArray[i].push(aug);
  //     i++;
  //     augmentElements(array, aug);
  // } else {
  //   return newArray;
  // }
  // };

  // var augmentElements = function(array, aug, i) {
  //
  // var newArray = [];
  // if (i < array.length) {
  //   newArray.push(array[i]);
  //   newArray.push(aug);
  //   augmentElements(array, aug, i + 1);
  // } else {
  //   return newArray;
  // }
  // };

//   var newArray = array;
//   if (i < array.length) {
//     array[i].push(aug);
//     augmentElements(array, aug, i + 1);
//   } else {
//     return newArray;
//   }
// };

// var newArray = array;
// if (i < array.length) {
//   array[i].concat(aug);
//   augmentElements(array, aug, i + 1);
// } else {
//   return newArray;
// }
// };

// var augmentElements = function(arr, aug) {
// result = result || [];
// if(i>arr.length-1) {
// return result;
// } else {
// result.push(arr[i].concat(num));
// augment(arr,i+1,num,result);
// }
// return result;
// };
