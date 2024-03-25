const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');
// const text1=document.querySelector('.text').innerHTML;
// console.log(typeof text1);
buttons.forEach((button)=>{
    // console.log(button);
    button.addEventListener('click',(event)=>{
    //  console.log(event);
    //  console.log(event.target);
     if (event.target.id === 'red') {
        body.style.backgroundColor = event.target.id;
        document.getElementById('text').style.color = 'yellow';
     }
     if (event.target.id === 'white') {
        body.style.backgroundColor = event.target.id;
        document.getElementById('text').style.color = 'red';
     }
     if (event.target.id === 'blue') {
        body.style.backgroundColor = event.target.id;
        document.getElementById('text').style.color = 'yellow';
     }
     if (event.target.id === 'yellow') {
        body.style.backgroundColor = event.target.id;
        document.getElementById('text').style.color = 'blue';
     }

})
})





