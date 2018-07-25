// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5);
// [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  var newArray = []

  if(array.length === 0){
    return []
  }

  newArray.push(array.splice(0, 1)[0])
  newArray[0].push(aug)

  return  newArray.concat(augmentElements(array, aug))

};
