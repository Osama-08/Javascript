const time=document.querySelector('#clock');


setInterval(()=>{
    let date=new Date();
    // console.log(date.toLocaleString());
    time.innerHTML = date.toLocaleTimeString();  
},1000)


