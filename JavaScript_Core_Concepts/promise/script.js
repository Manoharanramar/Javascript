/* Promise:got or not goted->success or faliure
    Promise is mainly used to resolve(Tranfer amound to friend) or Reject(Try bus Tickets)
*/

//The promise objects represemts the
//Eventual completion (or failure)
//Of an asynchronous operation)
//handing the asynchronous operation 
//Its is a object only

/* Using Arrow Function:
const tatkalBook=new Promise((resolve,reject)=>{
    let bookingSuccess=true;
    if(bookingSuccess)
        resolve(850)
    else
        reject()
})*/

function tatkalBook(){
    return new Promise((resolve,reject)=>{
    let bookingSuccess=true;
    if(bookingSuccess)
        resolve(850)
    else
        reject()
})
}//amt is send to the resolve function ->850
tatkalBook().then((amt)=>console.log(`Thanks buddy! I will tranfer the amount Rs.${amt}`))//then is use success code only
.catch(failure)//and .catch is used to failure code only

function success(amt){
    console.log("Thanks buddy! I will tranfer the amount")
}
function failure(){
    console.log("Thanks for trying! i will book the bus")
}










function tossCoin(){
    return new Promise((resolve,reject)=>{
        //0-head(successs) 1-tail(fail)
        const rand=Math.floor(Math.random()*2)
        if(rand==0){
            resolve()
        }
        else{
            reject()
        }
    })
}

tossCoin().then(()=>console.log("Congrate this is head you won"))
.then(()=>console.log("Congrate this is head you won"))
.then(()=>console.log("Congrate this is head you won"))
.then(()=>console.log("Congrate this is head you won"))
.then(()=>console.log("Congrate this is head you won"))
.then(()=>console.log("Congrate this is head you won"))
.catch(()=>console.log("You loss.. it tail"))




//Friend reach home or not
let reachA=new Promise((resolve,reject)=>{
    const reached=true
    if(reached){
        setTimeout(resolve,3000,"Vidya reached")//resolve parameter give resolve("vidhya reached")->In this case setTimeout(resolve,3000,"Vidya reached")
    }
    else{
        reject("Vidya Not reached")
    }
})

let reachB=new Promise((resolve,reject)=>{
    const reached=true
    if(reached){
        setTimeout(resolve,1000,"Mano reached")//resolve parameter give resolve("vidhya reached")->In this case setTimeout(resolve,3000,"Vidya reached")
    }
    else{
        reject("Mano Not reached")
    }
})

let reachC=new Promise((resolve,reject)=>{
    const reached=true
    if(reached){
        setTimeout(resolve,2000,"Ram reached")//resolve parameter give resolve("vidhya reached")->In this case setTimeout(resolve,3000,"Vidya reached")
    }
    else{
        reject("Ram Not reached")
    }
})


//promise methods
Promise.all([reachA,reachB,reachC])//all the reach is possible means it will resolve->any one not accepted all rejected only show the not acceppted one
/*
(3) ['Vidya reached', 'Mano reached', 'Ram reached']0: "Vidya reached"1: "Mano reached"2: "Ram reached"length: 3[[Prototype]]: Array(0)
*/
.then((message)=>console.log(message))
.catch((message)=>console.log(message))



//promise methods
Promise.allSettled([reachA,reachB,reachC])//Only it in 3 stages->pending,resolved,rejected ->All promise settele-> all result show either show accepted or rejected->stettle
/*
Array(3)
0
: 
{status: 'fulfilled', value: 'Vidya reached'}
1
: 
{status: 'fulfilled', value: 'Mano reached'}
2
: 
{status: 'fulfilled', value: 'Ram reached'}
length
: 
3
[[Prototype]]
: 
Array(0)
*/
.then((message)=>console.log(message))
.catch((message)=>console.log(message))



//promise methods
Promise.all([reachA,reachB,reachC])//all the reach is possible means it will resolve
/*
(3) ['Vidya reached', 'Mano reached', 'Ram reached']0: "Vidya reached"1: "Mano reached"2: "Ram reached"length: 3[[Prototype]]: Array(0)
*/
.then((message)=>console.log(message))
.catch((message)=>console.log(message))


Promise.any([reachA,reachB,reachC])//any one result accepts it will accepted || only all rejected means it will rejected
.then((message)=>console.log(message))
.catch((message)=>console.log(message))

Promise.race([reachA,reachB,reachC])//which statement is first resolve that is show in result
.then((message)=>console.log(message))
.catch((message)=>console.log(message))