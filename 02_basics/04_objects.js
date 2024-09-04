// const tinder=new Object()

const tinder={}

tinder.id="2bxb2"
tinder.name="vineet"
tinder.isLoggedIn=false

// console.log(tinder); //{ id: '2bxb2', name: 'vineet', isLoggedIn: false }

const regularUser={
    email : "vineetsaini@gmail.com",
    username : {
        userfullname : {
            firstname : " vineet",
            lastname : " saini"
        }
    }
}

// console.log(regularUser.username.userfullname);

const ob1={1:"a",2:"b"}
const ob2={3:"c",4:"d"}
//const ob3={5:"e",6:"f"}

//const ob3={ob1,ob2}
const ob4=Object.assign({},ob1,ob2)
//console.log(ob4);


//console.log(ob3);
//console.log();


const ob3={...ob1,...ob2}
//console.log(ob3);

const user=[
    {
        id : 1,
        name : " saini"
    },
    {
        id : 1,
        name : " saini"
    },
    {
        id : 1,
        name : " saini"
    }
]

// console.log(user[1].name);

// console.log(tinder);
// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder)); //[ [ 'id', '2bxb2' ], [ 'name', 'vineet' ], [ 'isLoggedIn', false ] ]

// console.log(tinder.hasOwnProperty('isLoggedIn'));

const course={
    coursename : "js in hindi",
    price : "999",
    cousreinstrucor : "vineet saini"
}

//course.cousreinstrucor

const { cousreinstrucor} =course
console.log(cousreinstrucor);
