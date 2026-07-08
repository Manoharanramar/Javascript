//Using prototype the inheritance will do


class User{//base class,parent class,super class
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


//Inheritance
//derived class,child class,sub class
class paiduser extends User{
    constructor(name,age){
        super(name,age);//call parent class variable
        this.stroage=100;
    }
     message(){
        console.log("Hi")
     }

     //Overriding
     login(){
        console.log("Recall methods1")
     }
}

let paiduser1=new paiduser('Mano',20)
paiduser1.login()//call the parent class login->



