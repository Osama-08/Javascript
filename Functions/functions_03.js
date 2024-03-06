const user={
    n:'osama',
    id:32,
    welcome:function (params) {
        //this is used to refer the current context of the scope
        // console.log(`${this.n} welcome to our web`);
        // console.log(this);
    }


}
user.welcome();
// console.log(this);

function one(params) {
    let n='saaas';
    console.log(this.n);//not working in the functions
}
// one();

const two=()=>{
    let a='ss';
    console.log(this);
}

two();

//////////////////////// arrow function /////////////////////////

// explicit return

// const addnum=(a+b)=>{
//     return a+b;
// }

//implicit return

const addnum=(n,a)=>a+n;
//cannot return object using this method
const obj=()=>{n:'osama'}

console.log(obj());
console.log(addnum(23,3));



