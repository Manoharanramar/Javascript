class User6{
    constructor(name,age){
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

class paidusers extends User6{
    constructor(name,age){
        super(name,age);
        this.stroage=100;
    }
     message(){
        console.log("Hi")
     }

     login(){
        console.log("Recall methods1")
        return this//current object call
     }
}

let paiduser2=new paidusers('Mano',20)
paiduser2.login()//call the parent class login->


//method chaining
//This like i want to show
//For example:paidUser1.login().message()->but error throws with object call

/*
return this->line number 26
*/
paiduser2.login().message()/*Recall methods1,Hi */


