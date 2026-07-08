class User5{
    static numberOfUsers=0;//commen variable in help o f static
    constructor(name,age){//constructor immediate call
        //Instance variables
        this.name=name;
        this.age=age;
        User5.numberOfUsers++
    }
    login(){
        console.log('Hi',this.name)
        console.log('You are logged in')
    }
    logout(){
        console.log('You are logged out')
    }

    static displayTotalUsers(){//static methods
        console.log("Total number of users: "+User5.numberOfUsers)
    }
}
let userthree=new User5('Vidya',21)//here ask this means immediate constructure call....
console.log('Number of Uers',User5.numberOfUsers)
User5.displayTotalUsers();


//Normal methods calling:
let user=new User5('Mano',21)
user.login()//You are logged in

//static methods calling:
User5.displayTotalUsers()//Total number of users: 2


console.log(Math.sqrt(5))//Here Math is class and sqrt is the static method
/* Math->class,sqrt->static */