const btn=document.getElementById("btn")
const colortext=document.getElementById("colortext")
const wrap=document.getElementById("wrap")
const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

/*btn.addEventListener('click',changeBackGround)//when button click the result will happen
function changeBackGround(){
    let hexColor='#'
    for(let i=1;i<=6;i++){
        hexColor+=randHexValue()//any random value in this list of array
    }
    console.log(hexColor)
    wrap.style.backgroundColor=hexColor//style call in script
    colortext.innerHTML=hexColor
}
*/  
                   // |
                   // |
                //same the things this like
btn.addEventListener('click',function(){
    let hexColor='#'
    for(let i=1;i<=6;i++){
        hexColor+=randHexValue()//any random value in this list of array
    }
    console.log(hexColor)
    wrap.style.backgroundColor=hexColor//style call in script
    colortext.innerHTML=hexColor
})

function randHexValue(){//taking hex index to random value give//first function call
    let randomIndex=Math.floor(Math.random()*16)//second random index generate
    return hex[randomIndex]//third return
}


/*Exercise:
arr=['ECE','CSE','IT','EEE','MECH','CIVIL']
Add the array elements to a dropdown in HTML
 */