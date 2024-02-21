// declare a string
const name="    Muhammad-Osama-Abbasi";
let age="21";
console.log(`My name is ${name} and my age is ${age}`);
//A string is an object it has different functions in it we can use it for different purpose
console.log(name.__proto__);
let up=name.toUpperCase();
console.log(up);
let newname=name.slice(8,9);
console.log(newname);
let rep=name.replace('-',' ');
console.log(rep);
let tm=name.trim();
console.log(tm);