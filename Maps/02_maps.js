const  num=[1,2,3,4,5,6,7,8,9,10]

// const s=num.map((num)=>num+10)
// console.log(s);

//chaining of different methods

const n=num.map((num)=>num*10).map((newnum)=>newnum+1).filter((val)=>val > 15)
console.log(n);

//reduce method

const v=[1,2,3,4]

const total=v.reduce((acc,curr)=>{
   console.log(`acc ${acc} and currval ${curr}`);
    return acc+curr
},0 );
console.log(total);

const shoppingcart=[
    {
        itemname:"shirt",
        price:10
    },
    {
        itemname:"paint",
        price:20
    },
    {
        itemname:"shal",
        price:30
    },
    {
        itemname:"kameez",
        price:40
    },
    {
        itemname:"caot",
        price:50
    },
    {
        itemname:"bag",
        price:60
    },
]

const totalprice=shoppingcart.reduce((acc,item)=>acc+item.price,0)
console.log(totalprice);













