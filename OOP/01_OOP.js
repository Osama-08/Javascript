
const user={
    username:'Osama',
    loginCount:3,
    signedIn:true,

   getUserDetail:function(){
      console.log('Got Details from Database');
      console.log(`Username:${this.username}`);
      console.log(this);
    //   return 'Got Details from Database';
   }

}

// console.log(user.getUserDetail());
// console.log(this);

function User(username,loginCount,islogedIn) {
    this.username=username;
    this.loginCount=loginCount;
    this.islogedIn=islogedIn;
      this.greetings=function () {
        console.log(`Welcome ${this.username}`);
      }
     return this; //implicitly defined so no need to write it
}

const user1 =new  User('Osama',12,true);
const user2 =new User('Ali',2,false);

console.log(user1);
console.log(user2);
