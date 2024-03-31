function setusername(username) {
    this.username=username;
    console.log('called');
}
function createuser(username,email,pass) {
     setusername.call(this,username);
    this.email=email;
    this.pass=pass;
}
const user1=new createuser('osama','123@gmail.com','123')
console.log(user1);

