'use strict'

const arr = [1,2,3,4];


function square(num){
    return num * num;
}

console.log("printing using for loop");
for(let index = 0;index < arr.length;index++){
    console.log(square(arr[index]));
}

//equivalent map code
//map function returns an array
const result = arr.map(function(num) {
    return num * num;
})

console.log("printing using map function");
console.log(result);