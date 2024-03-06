//for

let a=['osama','hamas','saim'];
for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
    
}

//double loops
for (let i = 1; i < 11; i++) {
    console.log(`Table of ${i}`);
    for (let j = 1; j < 11; j++) {
        
        console.log(i+'*'+j+'='+i*j);
        
    }
    
}

//break and continue
let b=true;
for (let i = 0; i < 5; i++) {
    if (!b) {
        console.log('user has exited');
        break;
    }
    else{
        console.log('user has logged in');
        b=false;
    }
}



