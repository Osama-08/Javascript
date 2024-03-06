const coding=['js','py','cpp','sql'];

// const val=coding.forEach((item)=>{
//     console.log(item);
//     return item;//undefined
// })
// console.log(val);


const mynums=[1,2,3,4,5,6,7,8,9,10]

const n=mynums.filter((num)=> num > 4 )

const ny=[]
mynums.forEach((num)=>{
    if (num>4) {
        ny.push(num);
    }
})
// console.log(n);
// console.log(ny);

const books=[
    {
        title:'book1',
        genre:'fiction',
        publish:1912,
        edition:2003
    },
    {
        title:'book2',
        genre:'romance',
        publish:1914,
        edition:2004
    },
    {
        title:'book3',
        genre:'comedy',
        publish:1915,
        edition:2002
    },
    {
        title:'book4',
        genre:'sci',
        publish:1915,
        edition:2006
    },
    {
        title:'book5',
        genre:'history',
        publish:1917,
        edition:2004
    },
    {
        title:'book6',
        genre:'geo',
        publish:1986,
        edition:2023
    }
    
]

const userbooks=books.filter((bk)=>bk.genre === 'history');
// console.log(userbooks);

const pb=books.filter((bk)=>{return bk.edition >= 2000});
// console.log(pb);



