//oops:Think like class and objects 
//class is a template of properties 
//In javascript all are the oops concepts excepts the primitive data type
//and methods
class User{
    constructor(name,age){//constructor immediate call
        this.name=name;
        this.age=age;
    }
    login(){
        console.log('Hi',this.name)
        console.log('You are logged in')
    }
    logout(){
        console.log('You are logged out')
    }
}
let userOne=new User('Vidya',21)//here ask this means immediate constructure call....
let userTwo=new User('mano',20)

userOne.login()//o/p:Hi Vidya 
//You are logged in



