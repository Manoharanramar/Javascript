let select=document.querySelectorAll('.currency')
let btn=document.getElementById('btn')
let input=document.getElementById('input')
fetch('https://api.frankfurter.dev/v1/currencies')
.then(res=>res.json())//res changed to json
.then(res=>displayDropDown(res))

function displayDropDown(res){
    let curr=Object.entries(res)// convert object into array of key-value pair arrays
    for(let i=0;i<curr.length;i++){
        let opt=`<option value="${curr[i][0]}">${curr[i][0]}</option>`
        select[0].innerHTML+=opt
        select[1].innerHTML+=opt
    }
}

btn.addEventListener('click',()=>{
    let cur1=select[0].value
    let cur2=select[1].value
    let inputVal=input.value
    if(cur1==cur2){
        alert('choose Different Currencies')
    }
    else{
        convert(cur1,cur2,inputVal)
    }
});

function convert(cur1,cur2,inputVal){
    fetch(`https://api.frankfurter.dev/v1/latest?amount=${inputVal}&from=${cur1}&to=${cur2}`)
    .then(res => res.json())
    .then(data => {
         document.getElementById('result').value=Object.values(data.rates)[0]
    })
    .catch(err => console.log(err));
}