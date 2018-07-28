/*Swap all elements in pairs. If the length of the list is odd, the last element stays
in place. [2,7,8,3,1,4] Returns [7,2,3,8,4,1] [3,6,8,1,5] Returns [6,3,1,8,5]*/

var swapElements = function(array) {
  //START SOLUTUION//
  var i = 0;
  var j = 1;
  function swappo(array) {
    if ((array.length % 2 === 1) && (i === array.length - 1)) {
      var shift = array.splice(i, 1);
      array.splice(j, 0, shift);
      i += 2;
      j += 2;
      return swappo(array);
    } else {
    return array;
      }
  //END SOLUTUION//
  }
  return swappo(array);
};
swapElements([3,6,8,1,5]);
