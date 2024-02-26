let car=new Promise((resolve, reject) => {
    full=true
    if(full){
        resolve()
    }else{
        reject()
    }
})
car.then(()=>{
    console.log('Promise resolve')
}).catch(()=>{
    console.log('error occured')
})
// javascript is single threaded means every command is excutes synchronously i.e. one at a time and other function waits until it recives completion of current function.
// this is time consuming and restricted. So overcome this asynchronous comes into picture. with asynchronous javascript can perfrom multiple operation at a time without blocking main thread.
// so with help of features like callback,promises, async await asynchronous programming can be achieved easily.
// Promise is an asynchronous action that may complete at some point in future and provides result , notify when task is done.
// basically it keeps track of asynchronous program.
// Promise is said to be setteled when either it is resovlved or rejected
// Once it is settled it can not chnage its state ie.it becomes immutable
// then ---attached to callback when promise resolved.
// .cath-atteached to callback when promise rejected
// 3 states- pending, resolve, reject.

//Promise.all
const p1=Promise.resolve() //Promise.resolve(50)  can be writting with a value ,its optional ,and here we immidiately resolving  the promise
const p2=500 // Promise.resolve(500) can be written like this, but only 500 is a non promise value,and when we assign something like this in promise.all it implicitly wrapped it into a resolved promise using promise.all
const p3=new Promise((resolve,reject)=>{ //here promise is created using promise constructure //and resolve or reject depends on full variable here
    full=true
    if(full){
        resolve()
    }else{
        reject()
    }
})
Promise.all([p1,p2,p3]).then(()=>{console.log('resolved')}).catch(()=>{console.log('rejected')}) //resolved


/// this keyword

// normal function
 var value=50
function myfun(){
    var value=100
    console.log(value) //100 
    console.log(this.value) // undefined
}
myfun()
// The reason you are getting undefined for the second output (console.log(this.value)) is because this.value is attempting to access a property named value on the global object (window object in a browser environment or the global object in a Node.js environment). 
//However, there is no global property named value, and that's why you get undefined.

// to overcome this need to use global before value

// global.value=50
// function myfun(){
//     var value=100
//     console.log(value) //100 
//     console.log(this.value) // 50  // refrence to global variable
// }
// myfun()

//object method
const random={
    name:"john",
    info(){
        console.log(this.name) //john
    }
}
random.info()
 //output is john . thats because this is used within a method inside a object ..it is representing to the property of object