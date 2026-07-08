//Exception handling
try{
num=prompt("Enter a number")
    if(isNaN(num)){
        throw "Enter a valid Number"
    }
    if(num===''){
        throw "Can be empty"
    }
    console.log(num**2 )
}
catch(error){
    console.log(error)
}
finally{
    console.log('bye')
}