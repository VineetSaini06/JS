//singleton
//object.create

//Literals

const mysym=Symbol();

const myinfo={
    name :"vineet",
    lastname :"saini",
    age : 19,
    [mysym] : "key1",
    email : "vineetsaini@gmail.com" ,
    location : "Dehradun",
    isLoggedIn : true,
    LastLoggedin : ["Monday","Tuesday"]

}

console.log(myinfo.name);
console.log(myinfo["lastname"]);
console.log(myinfo[mysym]);

myinfo.name= "King "
console.log(myinfo.name);

// Object.freeze(myinfo) //freeze, this function does not allow you to modification in object

myinfo.greeting = function(){
    console.log(" Hello Vineet sir");
    
}

myinfo.greetingTwo = function(){
    console.log(`My name age is ,${this.age}`);
    
}

console.log(myinfo.greeting());
console.log(myinfo.greetingTwo());

