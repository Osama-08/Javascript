// fetch('https://something.com').then().catch().finally()

const promise1= new Promise((resolve,reject)=>{
    //Do an async tesk
    //DB calls
    //Crypography
    //network
    setTimeout(()=>{
        console.log('ASYNC task is completed');
        resolve();
    },1000)
}); 

promise1.then((res)=>{
    console.log('Promise Consumed');
})

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('ASYNC task2 is completed');
        resolve();
    },1000)
}).then(()=>{
    console.log('ASYNC2 is consumed');
})

const promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:'osama',
      email:'abbasiusama583@gmail.coom',
      age:21            
    })
    },1000)
})
promise3.then((user)=>{
console.log(user);
})

const promise4=new Promise((resolve,reject)=>{
    setTimeout(()=>{
    //    let error=true;
       let error=false;
       if (!error) {
        resolve({username:'Ali',pass:'123'})
       } 
       else{
        reject('Error: Something went Wrong !')
       }
    },1000)
})

//chaning 
promise4
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log('The promise is either resolved or rejected');
})

const promise5=new Promise((resolve,reject)=>{
    setTimeout(()=>{
           let error=true;
        //    let error=false;
           if (!error) {
            resolve({username:'Javascript',pass:'123'})
           } 
           else{
            reject('Error: JS went Wrong !')
           }
        },1000)
});

async function consume(){
    try {
        const response = await promise5;
        console.log(response);       
    } catch (error) {
        console.log(error);
    }
 
}
consume();

async function getAllusers() {
    try {
        const response=await fetch('https://jsonplaceholder.typicode.com/users');
    const data= await response.json();
    console.log(data); 
    } catch (error) {
        console.log('E:',error);
    }
   
}
// getAllusers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{
  console.log(data);
})
.catch((error)=>{console.log(error);})

