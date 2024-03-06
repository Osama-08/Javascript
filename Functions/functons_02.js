//using a res operator it returns an array 
function cal(...val){
    return val;
}
// console.log(cal(122,31,23,121));

const user={
    name:'osama',
    id:23
}

function obj(anyobject){
   console.log(`Usename=${anyobject.name} and id=${anyobject.id}`);
}
obj(user);
obj({name:'ali',id:2})

const present=(arr)=>{
    for (let index = 0; index < arr.length; index++) {
     console.log(`${arr[index]} is Present`);
     
    }
 }
 let b=['saad','hamza','hasnian'];
 present(b);