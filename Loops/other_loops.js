//for of

const a=[1,2,3,4,5];
for (const val of a) {
    //console.log(val);
}

//Maps

const map=new Map();
map.set('Pk','Pakistan');
map.set('In','India');
map.set('In','India');//it cannot be repested like objects b/s maps are known for their unique property
map.set('Usa','United States of America');


// console.log(map);

for (const [key,val] of map)// destructuring of maps or array
 {
    console.log(key,val);
}

const obj={
    'name':"osama",
    'id':'32',
    'gender':'male'

}
// for (const [key,val] of obj) {
//     console.log([key,val]);
// } not itteratale through for of

// for in
const obj2={
    js:'Javascript',
    cpp:'C++',
    py:'Python',
    rb:'Ruby'
}

for (const key in obj2) {
    console.log(`${key} : ${obj2[key]}`);
}

const arr=['a','b','c','d','e','f'];

for (const index in arr) {
    console.log(arr[index]);
}

//for-each loop

const sub=['toa','daa','fm','pk','db'];
sub.forEach( (item)=>{
     console.log(`${item} is currently studied`);
} )
sub.forEach((item,index,arr)=>{
        console.log(item,index,arr);
})


const my=[
    {
        lan:"js",
        lanname:"javascript"
    },
    {
        lan:"cpp",
        lanname:"c++"
    },
    {
        lan:"py",
        lanname:"python"
    }
]
my.forEach((item)=>{
 console.log(`${item.lan} : ${item.lanname}`);
})


