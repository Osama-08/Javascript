let myname="osama    ";
let mygoal="Development    ";
//making a truelength function of our own so that we can get the true length without extra spaces
let myheros=['superman',"batman"];
let heropower={
      thor:'hammer',
      spiderman:'sling',
      getspiderpower:function () {
        console.log(`Spiderman power is ${this.spiderman}`);
      }
}

//as all the strings,array and funtions are the objects so injection directly in the object will be creation the functionality of all the objects
Object.prototype.osama=function () {
    console.log('Osama is present in all objects');
}

Array.prototype.hello=function () {
    console.log('In array Hello');
}

// heropower.osama();
myheros.osama();
myheros.hello();
// heropower.hello();//error

///Inheritance

//old method
const user={
     name:"osama",
     age:21
}


const tec={
    makevideo:true
}
const tecsupp={
    isavai:false
}
const ta={
    makeass:'JS',
    fulltime:true,
    __proto__:tecsupp
}
tec.__proto__=user

//modern Syntax
Object.setPrototypeOf(tecsupp,tec);

String.prototype.truelength=function () {
    console.log(this);
    console.log(`True Length is: ${this.trim().length}`);
}

myname.truelength();
