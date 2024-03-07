/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

let index = 0;

while (index < arr.length){
    let item = arr[index];

    if (item === "bar" || item === "baz" || item === "qux"){
        if (item === "bar" || item === "baz"){
            item = item.replace('a','@')
        }
        if (item === "qux"){
            item = item.toUpperCase();
        }
        result.push(item)
    }
    index ++;
}

//export result
module.exports = result;