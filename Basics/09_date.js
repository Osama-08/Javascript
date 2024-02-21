// let d=new Date();
// console.log(d.toString());
// console.log(d.toDateString());
// console.log(d.toISOString());
// console.log(d.toJSON());
// console.log(d.toLocaleString());

let myd=new Date(2003,11,8);
// console.log(myd.toDateString());
// let my=new Date(2003,11,8,3,5);
// console.log(my.toLocaleString());
// let a=new Date("01-12-2002");
// console.log(a.toLocaleString());

// let nw=Date.now();
// console.log(nw);
// console.log(myd.getTime());

console.log(Math.floor(Date.now()/1000));

let c=new Date;
console.log(c.getDate());
console.log(c.getDay());
console.log(c.getMonth());

c.toLocaleString('default',{
    weekday:"long"
})