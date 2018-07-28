/*Swap all elements in pairs. If the length of the list is odd, the last element stays
in place. [2,7,8,3,1,4] Returns [7,2,3,8,4,1] [3,6,8,1,5] Returns [6,3,1,8,5]*/

var swapElements = function(array) {
  //START SOLUTUION//
  var i = 0;
  var j = 1;
  var swappo = function(array) {
    if (array.length > 1) {
      var shift = array.splice(i);
      array.splice(j, 0, shift)
      i += 2;
      j += 2;
      swappo(array);
    } else {
    return array;
  }
  swappo(array);
  //END SOLUTUION//
};

swapElements([3,6,8,1,5]);
