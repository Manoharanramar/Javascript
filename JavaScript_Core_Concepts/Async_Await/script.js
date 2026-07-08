//always return a promise is called async

async function fn(){
    return 'hello'
}
console.log(fn())
fn().then((msg)=>console.log(msg))


//Using async to how to call
let reachA=new Promise((resolve,reject)=>{
    const reached=true
    if(reached){
        setTimeout(resolve,3000,"Mano reached")
    }
    else{
        reject("Mano cannot reached")
    }
})

async function status(){
    console.log('hi...')
    res=await reachA //await is only valid in the async function
    console.log(res)
    console.log('bye')
}
status()

/*if false give means:
Uncaught (in promise) Mano cannot reached
*/

//Using async to how to call->if promise not resolve means in that point of thing we want use the try and catch
let reachB=new Promise((resolve,reject)=>{
    const reached=false
    if(reached){
        setTimeout(resolve,3000,"Mano reached")
    }
    else{
        reject("Mano cannot reached")
    }
})

async function asyncstatus(){
    try{
    console.log('hi...')
    res=await reachB //await is only valid in the async function
    console.log(res)
    console.log('bye')
    }
    catch(err){
        console.log(err)
    }
}
asyncstatus()