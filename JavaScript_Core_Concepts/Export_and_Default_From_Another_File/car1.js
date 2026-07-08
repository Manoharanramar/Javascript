//ES6 modules
export default class car{
    drive(){
        console.log("Driving")
    }
}
export function fillGas(){
    console.log('Filling Gas')
}
export function repair(){
    console.log('Repairing')
}


/*
//export->This file is used to another package
export default car//here default is used to nay this like"import car from './car.js'""->car or any things
//For example:go and check in car.js

export {fillGas,repair}*/