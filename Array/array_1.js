let arr=[1,2,3,4,5];
let arr2=[223,42,423,4,3,true,"osama"];//we can take different type of data in array
let names=['osama','hamas','saim'];
const arr3=new Array(0,9,8,7,6,5,4,3,2,1);
// console.log(arr[4]);
// console.log(arr2[5]);
// console.log(names[2]);

//Array methods
//  arr.push(6);//insert at end
//  arr.push(7);
//  arr.pop();//delete from end

// arr.unshift(9);//insert at first
// arr.shift();//remove from the first

console.log(arr);

// console.log(arr.includes(9));
// console.log(arr.indexOf(3));

// const newarr=arr.join();//convert it to a string
// console.log(newarr);
// console.log(typeof newarr);

//slice & splice



//using slice it returns a new array the original array is not touched
const sl=arr.slice(1,3);
console.log("A=>",sl);
//using splice it will return a part of the array and the left array remain as it is simply it cuts the array from where you want and return an array 
const sp=arr.splice(3,5);
console.log("B=>",sp);
console.log("C=>",arr);