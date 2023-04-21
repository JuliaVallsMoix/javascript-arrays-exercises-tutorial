let arr = [4,5,734,43,45];

// Your code here, use the push function and the random function.

let randomIndex1 = Math.floor(Math.random() * arr.length);
let randomIndex2 = Math.floor(Math.random() * arr.length);

let randomItem1 = arr[randomIndex1];
let randomItem2 = arr[randomIndex2];

arr.push(randomItem1, randomItem2);

console.log(arr);