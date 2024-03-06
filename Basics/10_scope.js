//global scope
var c=323;
let a=332;
let b=2321;
//scope
if(true){
    // block scope
    let a=28;
    const b=31;
    // console.log(`inner a=${a} and b=${b}`);
    var c=32;

}
// console.log(a);//error which is correct
// console.log(b);//error which is correct
// console.log(c);//not good

function one(){
    const user='osama';
    function two() {
        const id=35;
        console.log(user);
    }
    // console.log(id);//error b/s the scope of id is not valid
    two();
}

one();

if (true) {
    const n='hamas';
    if (n==='hamas') {
        const lasr='abbasi';
        console.log(n+lasr);
    }
    // console.log(lasr);//error
}

// console.log(n);//not in the scope

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addone(2));
function addone(val) {
    return val+1;
}

//hosting

// console.log(two(43));//error b/s the function or the function expression is wrap in the variable 



const two=function addtwo(params) {
    return params+2;
}
