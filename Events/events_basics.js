  //old approach
    // document.getElementById('owl').onclick =()=>{
    //     alert('Owl is clicked')
    // }
    //attach event
    //jQuery --oneventlisten
    //type , timestamp , defaultPrevented , target , toElement , srcElement , currentTarget , clientX , clientY , screenX , screenY , altkey , ctrlkey , shiftkey , keycode
    
    // ------- Basics -------- //
    // document.getElementById('images').addEventListener('click',(e)=>{
    //     console.log('clicked inside the image');
    // },false)

    // document.getElementById('owl').addEventListener('click',(e)=>{
    //     console.log('owl clicked');
    //     e.stopPropagation();
    // },false)

    // document.getElementById('google').addEventListener('click',(e)=>{
    //     e.preventDefault();
    //     e.stopPropagation();
    //     console.log('Google Clicked');
    // })
    
    document.querySelector('#images').addEventListener('click',(e)=>{
        //   console.log(e.target.parentNode);
        //   console.log(e.target.tagName);
        if (e.target.tagName === 'IMG') {
            
            let removeit = e.target.parentNode;
            removeit.remove();
        }
       // 2nd method to remove 
       // removeit.parentNode.removeChild(removeit);
},false)