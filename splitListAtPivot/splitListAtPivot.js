/*6.Split a list of numbers with regard to a pivot element.
All elements smaller than the pivot element go in the first return list,
all other elements go into the second return list. Both return list are inside one
list. [2,7,8,3,1,4] , 4 Returns [[2,3,1],[7,8,4]]*/

  // var split = function(array, pivot, i, resultA, resultB) {
  //   // if (typeof array[i] !== 'number') {
  //   if (Array.isArray(array[i])) {
  //     return array;
  //   }
  //   else if (array[i] < pivot) {
  //     array.push(resultA[array[i]]);
  //     array.splice(1);
  //     split(array, pivot, i, resultA, resultB);
  //   } else {
  //     array.push(resultB[array[i]]);
  //     array.splice(1);
  //     split(array, pivot, i, resultA, resultB);
  //   }
  // };
  // split([2,7,8,3,1,4] , 4);

  var split = function(array, pivot, resultA=[], resultB=[]) {
    if(array.length === 0) {
      return [resultA, resultB];
    }
    if(array[0] < pivot) {
      resultA.push(array[0]);
    }
    if(array[0] >= pivot) {
      resultB.push(array[0]);
    }
    return split(array.slice(1), pivot, resultA, resultB)
  };
  split([2,7,8,3,1,4] , 4);
