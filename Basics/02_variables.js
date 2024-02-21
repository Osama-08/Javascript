const name="Muhammad Osama Abbasi";
let age=21;
var email="abbasiusama583@gmail.com";
gender="male";

// name="Ali"; cannot change because it is constant

//console.log(name); //printing just one value
/*
prefer not to use var so much because of the block scope abd functional scope
*/
console.table([name,age,email,gender]);
//can change var and let as we want
email="muhammadosama@gmail.com";
age='22';

console.table([name,age,email,gender]);