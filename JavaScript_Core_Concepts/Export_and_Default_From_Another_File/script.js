import car from './car.js'
import c from './car.js'
let newcar=new car()
newcar.drive()//o/P:Driving

let car1=new car()
car1.drive()//o/P:Driving



import function_all_so,{fillGas,repair} from './car.js'//calling function from another file
fillGas()//o/p:Filling Gas
repair()//o/p:Repairing


import function_all,{fillGas as fill,repair as rep} from './car.js'//calling function from another file
fill()//o/p:Filling Gas
rep()//o/p:Repairing
