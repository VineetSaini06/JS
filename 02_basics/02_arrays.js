const arr_marvel=["ironman","hulk","thor","vision"]
const arr_dc=["aquaman","batman","superman"]

// arr_marvel.push(arr_dc)
// console.log(arr_marvel); // this wrong way

// const new_arr=arr_marvel.concat(arr_dc) // this second method to add arrays
// console.log(new_arr);

// const arr=[...arr_marvel,...arr_dc] //... this spread function //this second method to add to arrays
// console.log(arr);       

const arr=[4,3,2,[4,3,7,5,[1,0,98,7,5]]]
const real_arr=arr.flat(Infinity)
// console.log(real_arr);              //[4, 3, 2, 4,  3,7, 5, 1, 0, 98,7, 5]

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) //[] empty

let n=1000
let n1=2000
let n2=398

console.log(Array.of(n,n1,n2)); //[ 1000, 2000, 398 ]
