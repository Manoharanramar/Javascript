/*Application programming interface:
         our program<->API<->other program
*/
//fetch helps to return promise
console.log(fetch('https://official-joke-api.appspot.com/jokes/programming/random'))
/*o/P:Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: Response*/


//fetch the apis in the other url


//get the data and use
fetch('https://official-joke-api.appspot.com/jokes/programming/random')
.then((res)=>{
    if(res.ok){
        console.log('success')
    }
    else{
        console.log('Failed')
    }
    return res.json()})
.then((msg)=>console.log(msg[0].setup,msg[0].punchline))//o/P:Why did the programmer go to art school? He wanted to learn how to code outside the box.
.catch((err)=>console.log(err))


//post the data in my slef in api
fetch('https://jsonplaceholder.typicode.com/todos',{
    method:'POST',
    headers:{'content-type':'application/json'},
    body:JSON.stringify({
        userId:22,
        id:456,
        title:'test',
        completed:false
    })
})
.then((res)=>res.json())
.then(json=>console.log(json))
.catch((err)=>console.log(err))