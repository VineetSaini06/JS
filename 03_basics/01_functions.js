function saymyname(){
    console.log("V");
    console.log("i");
    console.log("n");
    console.log("e");
    console.log("e");
    console.log("t");   
}

//saymyname()

function addtwonum(num1,num2){
   // console.log(num1+num2);
    return num1+num2
}

//const ans=addtwonum(33,22)
//console.log(ans);
//console.log(addtwonum(33,22));

function userloggedin(username){
    if(userloggedin===undefined){
        console.log("Please enter the value");
        
    }
    return `${username} just loggedIn`
}

//console.log(userloggedin());
function multiplevalue(num1,num2,...mix){
    return mix;
}

//console.log(multiplevalue(100,200,300,500)); //[ 300, 500 ]

const ob={
    user : "vineet",
    price : "999"
}

function handleanyobject(anyobject){
    console.log(`username is ${anyobject.user} and price is ${anyobject.price}`);  
}

//handleanyobject(ob)
handleanyobject({
    user : "sam",
    price : "888"
})

const arr=[33,4,44,55,44]

function returnsecondvalue(value){
    return value[2]
}

// console.log(returnsecondvalue(arr));
console.log(returnsecondvalue([33,4,44,55,44]));
