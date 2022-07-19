
// You should implement your task here.


// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(towelSort(matrix));

module.exports = function towelSort (matrix) {
  if (Array.isArray(matrix) && (matrix.length>0)) {
    return [].concat(
          Array
          .from(matrix)
          .reduce((arr, curArr, indexArr) => 
              (indexArr % 2 === 0) ?
                  arr.concat(curArr.sort((item1, item2) => item1[1] > item2[1] ? -1 : 1)) :
                  arr.concat(curArr.sort((item1, item2) => item1[1] > item2[1] ? 1 : -1)))
          );   
  }
  else {
    return [];
  }       
}
