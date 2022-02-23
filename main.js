
const stringLength=string=>string.toString().length
const reverseString=string=>string.toString().split('').reverse().join('')

class Calculator{
    constructor(num1,num2){
        this.num1=num1
        this.num2=num2
    }
    add=()=>this.num1+this.num2
    subtract=()=>this.num1-this.num2
    multiply=()=>this.num1*this.num2
    divide=()=>this.num1/this.num2
}

const firstLetterCapitalize=str=>{
   let lastNumber=[]
    let firstLetter=str.split('')[0].toString().toUpperCase()
     str.split('').forEach((letter,index)=>{
         if(index)
         lastNumber.push(letter)
     })
     return firstLetter+lastNumber.join('')
}

module.exports={stringLength,reverseString,Calculator,firstLetterCapitalize}