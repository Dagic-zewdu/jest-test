const { stringLength,reverseString,Calculator,firstLetterCapitalize } = require("./main");
let numberList1=[]
let numberList2=[]
const randomNumber=()=>Math.round(Math.random(0,1000)*1000)
for(let i=0;i<3;i++){
    numberList1.push(randomNumber())
    numberList2.push(randomNumber())
}
test('string length should be less than ten', () => {
   expect(stringLength('sdfdskf')).toBeLessThan(10);
   
})

test('The string is not reverse format',()=>{
    expect(reverseString('Dagi')).toBe('igaD')
})

describe('The result of number', () => {
   numberList1.forEach(num1=>{
       numberList2.forEach(num2=>{
           let c=new Calculator(num1,num2)
           test('in addition', () => {
            expect(c.add()).toBe(num1+num2);
         })
         test('in subtraction', () => {
            expect(c.subtract()).toBe(num1-num2);
         })
         test('in Multiplication', () => {
            expect(c.multiply()).toBe(num1*num2);
         })
         test('in Division', () => {
            expect(c.divide()).toBe(num1/num2);
         })
       })
   })
});

test('The first letter should be capitalized',()=>{
    expect(firstLetterCapitalize('dagi')).toBe('Dagi')
})