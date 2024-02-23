//singleton object
const app=new Object()
app.id=12;
app.name="ali";
app.loggedinday=['mon','tue','wed','thur'];
// console.log(app);

//now ojects within objects
const regularuser={
    email:"123@gmail.com",
    fullname:{
        userfullname:{
            firstname:"osama",
            lastname:"abbasi"
        }
    }
}

// console.log(regularuser.fullname.userfullname.firstname);

// combining objects

const obj1={1:'a',2:'b'}
const obj2={3:'c',4:'d'}

// const obj3=Object.assign({},obj1,obj2)

//prefered way by using spread operator
const obj3={...obj1,...obj2}

console.log(obj3);

//if a data come from the database
const user=[
    {
        id:1,
        name:"hamas"
    },

    {
        id:2,
        name:"ali"
    },

    {
        id:3,
        name:"hamad"
    },

    {
        id:4,
        name:"saim"
    }
]

console.log(user[1].name);
console.log(app);
console.log(Object.keys(app));
console.log(Object.entries(app));
console.log(app.hasOwnProperty('loggedinday'));

const course={
    name:"maths",
    price:3232,
    teacher:"altaf"
}

// course.name

const {name:n}=course;//we can access and change the key by this structure and this is called as destructuring
console.log(n);

//API JSON
// {
 
//     "name":"osama",
//     "cour":"js",
//     "price":"2000"

// }


