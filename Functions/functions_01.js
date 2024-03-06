//function defination
function syname(){
    console.log('My name is Osama');
}

// syname();//function refrence

function add(a,b){
    
        
        // console.log(a+b);
  return a+b;
}

const res=add(3,5);

console.log(res);

function lgin(user){
    if (!user) {
        console.log('no username');
        return;
    }
    return `${user} just loged in`;
}

const a=lgin('Ali');//if no argument is passed then undefined is written
console.log(a);








