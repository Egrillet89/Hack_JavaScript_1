/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */

let result = Array.from({ length: 4 }, function(_, i) {
    return 2 * i + 1;
  });

//export result
module.exports = result;