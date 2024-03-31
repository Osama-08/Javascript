class user{
    constructor(username,pass,email) {
        this.username=username;
        this.email=email;
        this.pass=pass;
    }
    encryptpass(){
        return `${this.pass}xhr`;
    }
    changeusername(){
        return `${this.username.toUpperCase()}`;
    }
}

const user1=new user('Osama','123','abc@gmail.com');

console.log(user1.encryptpass()); 
console.log(user1.changeusername()); 

//Inheritance

class person{
    constructor(username) {
        this.username=username;
    }
    logme(){
        console.log(`Username is ${this.username}`);
    }
    static uniqueID(){
        return '081203';
    }
}

class teacher extends person{
    constructor(username,pass,email){
        super(username);//get the username to the person class
       this.pass=pass;
        this.email=email;
    }
    addcourse(){
        console.log(`New course was added by ${this.username}`);
    }
}
const user2=new teacher('Rehan','456','xyz@gmail.com')
user2.addcourse();
console.log(user2.uniqueID());//errorb/s we are giving acces to this particular function
const user3=new person('Ali');
user3.logme();
console.log(teacher instanceof person);
