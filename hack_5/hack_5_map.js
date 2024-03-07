/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */

let result = Array.from({ length: 4 }, function(_, i) {
    return 2 * (4 - i) - 1;
  });

//export result
module.exports = result;