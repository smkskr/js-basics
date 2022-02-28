'use strict'

const arr1 = [1,2,3,5,6];
const arr2 = [4,5,6];

const combine = arr1.concat(arr2);
console.log(combine);

//using spread operator

const combineUsingSpread = [...arr1 , 10 , 11, 12, ...arr2];
console.log(combineUsingSpread);

