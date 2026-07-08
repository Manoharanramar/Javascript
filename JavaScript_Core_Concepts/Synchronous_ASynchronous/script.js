//Synchronous:In javascript the completion one step to another sstep like step by step it is called synchronous
//Asynchronous:In javascript Asynchronous is do task in not step by step it do all in one like symentanchiously
/* js is Synchronous in its basic form->For example  */
//Synchronous is Blocking

//Synchronous:
console.log("step1")
console.log("step2")
console.log("step3")
console.log("step4")
console.log("step5")
console.log("step6")


//ASynchronous:Its is not blocking
//for Example:button.addEventListener('click',displayststs)->when button click the event will run that like
setTimeout(()=>console.log('mano1'),4000)//4000->sec time->Minimum time
setTimeout(()=>console.log('mano2'),2000)
setTimeout(()=>console.log('mano3'),1000)


console.log('bye')
for(let i=0;i<10;i++){
    console.log(i)
}

/*o/p:
step1
script.js:8 step2
script.js:9 step3
script.js:10 step4
script.js:11 step5
script.js:12 step6
script.js:21 bye
script.js:23 0
script.js:23 1
script.js:23 2
script.js:23 3
script.js:23 4
script.js:23 5
script.js:23 6
script.js:23 7
script.js:23 8
script.js:23 9
script.js:18 mano3
script.js:17 mano2
script.js:16 mano1
*/