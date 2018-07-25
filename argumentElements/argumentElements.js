// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  result = result || [];
  if(i>arr.length-1) {
    return result;
  } else {
    result.push(arr[i].concat(num));
    augment(arr,i+1,num,result);
  }
  return result;
};
};
