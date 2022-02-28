'use strict'

const arr = [1,2,3,4,5];

const first = arr[0];
const second = arr[1];
const third = arr[2];

console.log(first + "," + second + "," + third);

//using destructuring concept
let [ft, sec, th] = arr;

console.log("using destructuring concept");
console.log(ft + "," + sec + "," + th);


//destructuring of objects
let person = {
    name : 'John',
    age : 27
}

const {name:n , age:a} = person;
console.log(n,a);