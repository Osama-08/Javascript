//Generating a random Color

const randomColor=()=>{
    const hex='0123456789ABCDEF';
    let color="#";
    for (let i = 0; i <  6; i++) {
        color +=hex[Math.floor(Math.random()*16)];
        
    }

    return color;
}
// console.log(randomColor());
  let bg_color;
const start_change_color=()=>{
    if (!bg_color) {
        bg_color=setInterval(color_change,1000);
    }
    
       function color_change(){
        document.body.style.backgroundColor = randomColor(); 
      }
    
           
}
const stop_change_color=()=>{
       clearInterval(bg_color);
       bg_color=null;
}

document.querySelector('#start').addEventListener('click',start_change_color);

document.querySelector('#stop').addEventListener('click',stop_change_color);








