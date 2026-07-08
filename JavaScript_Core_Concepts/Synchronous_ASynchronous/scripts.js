//Synchronous:
console.log("Hello..")//f1
function sync(){
console.log("step1")//f3
console.log("step2")//f4
console.log("step3")//f5
console.log("step4")//f6
console.log("step5")//f7
console.log("step6")//f8
}
sync()//f2



//ASynchronous:IT is not blocking
setTimeout(()=>console.log('mano1'),4000)//4000->sec time->Minimum time//F9
setTimeout(()=>console.log('mano2'),2000)//F10
setTimeout(()=>console.log('mano3'),1000)//F11


console.log('bye')
for(let i=0;i<10;i++){
    console.log(i)
}
/*


call stack->after completing of task remove in the callk stack
____________
|           |//here function only excuted
|           |->F11->Timeout function so it wait 4 sec in this case passed to browser and remove this 
|           |->F10->Timeout function so it wait 4 sec in this case passed to browser and remove this 
|           |->F9->Timeout function so it wait 4 sec in this case passed to browser and remove this 
|           |->f2()->Sync()->->finished means after pop up this and remove this
|           |->f1()->LiFo->finished means after pop up this and remove this
|___________|->global()


Browser
____________
|           |
|           |
|           |
|           |
|           |->F11//1S->After completed this add into the call back queue and after remove
|           |->F10//2S->After completed this add into the call back queue and after remove
|___________|->F9()//4S->After completed this add into the call back queue and after remove


call back queue->FIFO
________________________
|      |          |     |  
| f9   |    f10   |  f11|                      
|______|__________|_____|

Event loop->if call stack is empty call back queue add to the call stack



o/p:
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

setInterval(()=>console.log("Hi.."),2000)//run unlimited every 2 second


