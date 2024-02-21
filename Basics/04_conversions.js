let score="0"
let score1=1
let score2=undefined
let score3=null
let score4=true
console.log(typeof score);

//converting into the number
let newval=Number(score);
console.log(typeof newval);
console.log(newval);

//converting into the string
let newval1=String(score1);
console.log(typeof newval1);
console.log(newval1);

//converting into the boolean
let newval2=Boolean(score);
console.log(typeof newval2);
console.log(newval2);

let a="osama"
let b=Boolean(a)
console.log(typeof b);
console.log(b);

/*
 "32" =>32
 "32ad" =>NaN
  true => 1 ,false =>0
  "" =>false
  "sdff" =>true
*/