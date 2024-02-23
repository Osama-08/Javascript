const names=['osama','hamas','saim'];
const frnd=['jawad','taqi','saad'];

names.push(frnd);//it will push the whole array and it will be a array in a array

// console.log(names);
// console.log(names[3]);//so it will be shown as a whole new element in the array
// console.log(names[3][2]);

// const all=names.concat(frnd);
// console.log(all);

//spread operator
const all2=[...names,...frnd];
console.log(all2);

//using flat if their are many subarrays in a single array it will convert it to a single array
const arr4=[1,2,3,4,[5,6,7],8,9,[10,11,12,[13,14]],15]
const all3=arr4.flat(Infinity)
console.log(all3);

console.log(Array.isArray('osama'));//ask a qs if it is array or not
console.log(Array.from("osama"));//make a new array of it
let a=12;
let b=21;
let c=43;
console.log(Array.of(a,b,c));//same work as of from

//if we are making an array of objects we have to define that the array will be of the key aor key values
console.log(Array.of({name:"osama",age:21}));//not make an array

