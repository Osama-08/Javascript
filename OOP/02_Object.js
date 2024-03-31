function multiply_by_3(num) {
    return num*3;
}
//functions are functions as well as objects 
//everything in js is acted as objects
multiply_by_3.power=2;
console.log(multiply_by_3(5));
console.log(multiply_by_3.power);
console.log(multiply_by_3.prototype);

function create_user(username,score) {
    this.username=username;
    this.score=score;
}
//selfcreating or injectig our own properties in  the function b/s it acted as an object
create_user.prototype.increment=function () {
    this.score++;
}
create_user.prototype.print_me=function () {
    console.log(`Age is ${this.score}`);
}

const user1=new create_user('Osama',21);
const user2=new create_user('Rehan',18);

user1.print_me();
user1.increment();
user1.print_me();



