const user={
    username : "vineet",
    price : 999,

    welcome : function(){
        console.log(`${this.username} welcome to website`)
        
    }
    
}
// user.welcome()
// user.username = "sam"
// user.welcome()


// const chai = function () {
//         let username = "saini"
//          console.log(this.username); //undefined
//      }

// chai()

// const chai =  () => {
//     let username = "vineet"
//     console.log(this); //{}
// }


//chai()

const addtwonum= (num1 , num2 ) => {
    return num1 + num2;
}

//const twoadd=(num1,num2) => ( num1 + num2) //first method

//const twoadd=(num1,num2) => ( num1 + num2) // second method

//console.log( twoadd(3,6));

const ob=() => ({ username : "saini"}) //return object

console.log(ob());

