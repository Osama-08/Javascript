//Immediately Invoked Function Expression IIFE

//sometimes we have to immediately invoke the function for the safety from the global pollution so for that we use iife
(function name(params) {
    console.log('DB connected');
})();//we have to end the context otherwise it will not end

(
    (n)=>{
        console.log(`hello ${n}`);
    }
)('ali');


