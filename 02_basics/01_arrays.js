//let arr=[5,3,2,5,4,"vineet",'saini']
//console.log(arr);

//let arr1=new Array(4,2,2,6,4)
//console.log(arr1);

// +++++++++ Methods +++++++++

let arr=[3,5,2,6,3,1]
// arr.push(9)
// console.log(arr);
// arr.pop()
// console.log(arr);

// arr.unshift(2)''
// arr.shift(); //remove element or value in the starting
//console.log(arr); // add value in the starting

// console.log(arr.includes(0)); //find the element in array = false
//console.log(arr.indexOf(6)); //3

// const newarr=arr.join()
// console.log(newarr); // it converts arr into string

// slice and splice
console.log("A ", arr);

const myn1 = arr.slice(1, 3)

console.log(myn1);
console.log("B ", arr);

console.log(arr)                //[ 3, 5, 2, 6, 3, 1 ]
const myn2 = arr.splice(1, 3)
console.log("C ", arr);         // C  [ 3, 3, 1 ]
console.log(myn2);              // [ 5, 2, 6 ]
