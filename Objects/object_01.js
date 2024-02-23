// Object.create();//singletion method 
//object literals

// symbol
 const mysym=Symbol("key1");

const user={
    name:"osama",
    "fullname":"muhammad osama abbasi",
    //using symbol in objects
    [mysym]:"mykey1",
    email:"123@gamil.com",
    age:21,
    location:"kahuta",
    islogedin:false,
    lastlogin:["monday","wednesday","friday"]
}

//accessing the objects using 2 methods
console.log(user.location);
console.log(user["islogedin"]);//because as the key value pairs are treated as string in the backend so user[isloggedin] will through error also it is prefered because if the key value is written in string format so by dot operator it cant be accessable
// console.log(user[fullname]);//error 
console.log(user[mysym]);
// console.log(typeof mysym);

//changing email
user.email="abbasiusama583@gmail.com";
//by using freze function the object will be locked or freeze no changing will be done
// Object.freeze(user);
user.email="08120311@gmail.com";
console.log(user);

//adding function in the objects
user.greeting=function(){
    console.log("Welcome User");
}

console.log(user.greeting());

user.greeting2=function(){
    console.log(`Welcome User, ${this.fullname}`);
}
console.log(user.greeting2());